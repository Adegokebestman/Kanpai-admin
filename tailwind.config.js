/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: {
					100: 'rgba(249, 215, 191, 0.27)',
					700: '#FF7E20',
				},
				blue: '#004AAD',
				black: ' #19191A',
				white: '#ffffff',
				gray: {
					100: '#F9F7F7',
					200: '#D5D3D2',
					300: '#B3B3B3',
					overlay: '#8784848a',
				},
				green: {
					fade: '#C3F8C5',
					bg: '#0EBC93',
					text: '#105723',
				},
				red: {
					fade: '#f9d7bf45',
					bg: '#fd88885e',
					text: '#EB001B',
				},
			},
			dropShadow: {
				card: '-2px 9px 45px rgba(0, 0, 0, 0.07)',
				default: '0px 4px 40px rgba(0, 0, 0, 0.19)',
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif'],
				rubik: ['Rubik', 'sans - serif'],
			},
		},
	},
	plugins: [],
};
