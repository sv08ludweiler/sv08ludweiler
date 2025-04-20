module.exports = () => ({
	'strapi-cache': {
		enabled: true,
		config: {
			debug: false, // Enable debug logs
			max: 1000, // Maximum number of items in the cache
			ttl: 1000 * 60 * 60, // Time to live for cache items (1 hour)
			size: 1024 * 1024 * 1024, // Maximum size of the cache (1 GB)
			allowStale: false, // Allow stale cache items
			cacheableRoutes: [], // Caches routes which start with these paths (if empty array, all '/api' routes are cached)
		},
	},
});
