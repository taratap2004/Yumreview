'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { supabase } from '../../../../lib/supabase';

type Review = {
  id: string;
  user_id: string;
  rating: number;
  comment: string;
  created_at: string;
};

type Like = {
  id: string;
  review_id: string;
  user_id: string;
};

export default function RestaurantDetailPage() {
  const { id } = useParams();
  const [reviews, setReviews] = useState<Review[]>([]);
  const [likes, setLikes] = useState<Like[]>([]);
  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const user = await supabase.auth.getUser();
      setUserId(user.data.user?.id || null);

      const { data: reviewData } = await supabase.from('reviews').select('*').eq('restaurant_id', id);
      const { data: likeData } = await supabase.from('likes').select('*');
      
      setReviews(reviewData || []);
      setLikes(likeData || []);
    };

    fetchData();
  }, [id]);

  const handleLike = async (reviewId: string) => {
    if (!userId) {
      alert('Please log in to like reviews.');
      return;
    }

    const existingLike = likes.find((like) => like.review_id === reviewId && like.user_id === userId);

    if (existingLike) {
      await supabase.from('likes').delete().eq('id', existingLike.id);
      setLikes(likes.filter((like) => like.id !== existingLike.id));
    } else {
      const { data, error } = await supabase
        .from('likes')
        .insert([{ review_id: reviewId, user_id: userId }])
        .select();
      if (!error && data) setLikes([...likes, { id: data[0].id, review_id: reviewId, user_id: userId }]);
    }
  };

  

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mt-6">📢 รีวิวจากผู้ใช้</h2>
      {reviews.length === 0 ? <p>ยังไม่มีรีวิว</p> : (
        <ul className="mt-2">
          {reviews.map((review) => {
            const likeCount = likes.filter((like) => like.review_id === review.id).length;
            const userLiked = likes.some((like) => like.review_id === review.id && like.user_id === userId);

            return (
              <li key={review.id} className="border p-3 my-2 rounded-md shadow-sm">
                <p className="text-yellow-500 text-lg">⭐ {review.rating}/5</p>
                <p className="text-gray-800">{review.comment}</p>
                <p className="text-gray-500 text-sm">{new Date(review.created_at).toLocaleString()}</p>

                {/* Like Button */}
                <button
                  onClick={() => handleLike(review.id)}
                  className={`mt-2 px-4 py-1 rounded-md ${userLiked ? 'bg-red-500 text-white' : 'bg-gray-300'}`}
                >
                  ❤️ {likeCount} {userLiked ? 'Unlike' : 'Like'}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
}
