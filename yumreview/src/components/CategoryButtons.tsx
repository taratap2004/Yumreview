import React from 'react';


const CategoryButtons: React.FC = () => {
    const categories = ['ปิ้งย่าง', 'ชาบู', 'ซีฟู้ด', 'อิสาน', 'ของหวาน'];
    return (
        <div>
            {categories.map((category) => (
                <button key={category} style={{
                    borderRadius: '5px',
                    margin: '5px',
                    padding: '10px',
                    backgroundColor: 'lightblue',
                    color: 'white',
                    border: 'none',
                    cursor: 'pointer',

                }}>
                    {category}
                </button>
            ))}
        </div>
    );
};

export default CategoryButtons;