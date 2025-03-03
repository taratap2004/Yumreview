import React from 'react';

const CategoryButtons: React.FC = () => {
    const categories = ['ปิ้งย่าง', 'ชาบู', 'ซีฟู้ด', 'อิสาน', 'ของหวาน'];

    return (
        <div>
            {categories.map((category) => (
                <button key={category} style={{
                    border: '1px solid #ccc',
                    borderRadius: '5px',
                    margin: '5px',
                    padding: '10px',
                }}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryButtons;