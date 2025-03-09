import { supabase } from './supabase';

export const signInWithGoogle = async () => {
  try {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
      options: { redirectTo: `${window.location.origin}/dashboard` },
    });
    if (error) throw error;
  } catch (err) {
    console.error('Google login failed:', err);
    throw err;
  }
};
