/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./app/**/*.{js,jsx,ts,tsx}',
		'./components/**/*.{js,jsx,ts,tsx}',
	],
	theme: {
		extend: {
			colors: {
				primary: '#161622',
				secondary: {
					DEFAULT: '#FF9C01',
					100: '#FF9001',
					200: '#FF8E01',
				},
				black: {
					DEFAULT: '#000',
					100: '#1E1E2D',
					200: '#232533',
				},
				gray: {
					100: '#CDCDE0',
				},
			},
			fontFamily: {
				popthin: ['Poppins-Thin', 'sans-serif'],
				popextralight: ['Poppins-ExtraLight', 'sans-serif'],
				poplight: ['Poppins-Light', 'sans-serif'],
				popregular: ['Poppins-Regular', 'sans-serif'],
				popmedium: ['Poppins-Medium', 'sans-serif'],
				popsemibold: ['Poppins-SemiBold', 'sans-serif'],
				popbold: ['Poppins-Bold', 'sans-serif'],
				popextrabold: ['Poppins-ExtraBold', 'sans-serif'],
				popblack: ['Poppins-Black', 'sans-serif'],
			},
		},
	},
	plugins: [],
};
