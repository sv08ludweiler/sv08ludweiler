module.exports = (_config, { strapi }) => {
	const redirectAdminPanel = ['/', '/index.html'].map((path) => ({
		method: 'GET',
		path,
		handler: (ctx) => ctx.redirect('/admin'),
		config: { auth: false },
	}));

	strapi.server.routes(redirectAdminPanel);
};
