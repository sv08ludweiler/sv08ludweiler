module.exports = {
	content: ['./src/app.html', './src/**/*.{html,ts,svelte}'],
	theme: {
		extend: {
			colors: {
				primary: 'var(--sv-color-primary)',
				primaryLight: 'var(--sv-color-primary-light)',
				primaryDark: 'var(--sv-color-primary-dark)',
				primaryText: 'var(--sv-color-primary-text)',
				secondary: 'var(--sv-color-secondary)',
				secondaryLight: 'var(--sv-color-secondary-light)',
				secondaryDark: 'var(--sv-color-secondary-dark)',
				secondaryText: 'var(--sv-color-secondary-text)',
				background: 'var(--background)',
				header: 'var(--header)',
				accent: 'var(--accent)'
			}
		}
	},
	plugins: []
};
