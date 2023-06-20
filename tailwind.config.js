/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#F78C29',
				blue: '#004AAD',
				orange: '#C76913',
				black: ' #19191A',
				white: '#ffffff',
				overlay: '#D5D3D2',
			},
			dropShadow: {
				card: '-2px 9px 45px rgba(0, 0, 0, 0.07)',
				default: '0px 4px 40px rgba(0, 0, 0, 0.19)',
			},
		},
	},
	plugins: [],
};
