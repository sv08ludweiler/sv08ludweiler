/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				green: {
					50: '#EBF9EC',
					100: '#D3F2D5',
					200: '#A8E6AC',
					300: 'var(--green-300)',
					400: '#51CD59',
					500: '#34B63D',
					600: 'var(--green-600)',
					700: '#1B5E20',
					800: '#123F15',
					900: '#09200B',
					950: '#051005'
				}
			}
		}
	},
	plugins: []
};
