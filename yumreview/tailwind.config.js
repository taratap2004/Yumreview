/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",  // ครอบคลุมโค้ดทั้งหมดใน app/
        "./components/**/*.{js,ts,jsx,tsx}", // ครอบคลุม component ต่าง ๆ
        './src/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
