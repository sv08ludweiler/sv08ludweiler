module.exports = ({ env }) => ({
	upload: {
		config: {
			providerOptions: {
				localServer: {
					maxage: 31536000, // one year
				},
			},
			// adapted to tailwind breakpoints
			breakpoints: {
				xlarge: 1536,
				large: 1280,
				medium: 1024,
				small: 768,
				xsmall: 640,
			},
		},
	},

	'strapi-cache': {
		enabled: true,
		config: {
			debug: false, // Enable debug logs
			max: 1000, // Maximum number of items in the cache (only for memory cache)
			ttl: 1000 * 60 * 60, // Time to live for cache items (1 hour)
			size: 1024 * 1024 * 1024, // Maximum size of the cache (1 GB) (only for memory cache)
			allowStale: false, // Allow stale cache items (only for memory cache)
			cacheableRoutes: [], // Caches routes which start with these paths (if empty array, all '/api' routes are cached)
			provider: 'memory', // Cache provider ('memory' or 'redis')
			//  redisConfig: env('REDIS_URL', 'redis://localhost:6379'), // Redis config takes either a string or an object see https://ioredis.readthedocs.io/en/stable/README for references to what object is available, the object or string is passed directly to ioredis client (if using Redis)
			cacheHeaders: true, // Plugin also stores response headers in the cache (set to false if you don't want to cache headers)
			cacheAuthorizedRequests: false, // Cache requests with authorization headers (set to true if you want to cache authorized requests)
			cacheGetTimeoutInMs: 1000, // Timeout for getting cached data in milliseconds (default is 1 seconds)
		},
	},

	'webp-converter': {
		enabled: true,
		config: {
			// mimeTypes that converts to WebP. Default is ['image/png', 'image/jpeg', 'image/jpg']
			mimeTypes: undefined,
			options: {
				// WebP options: https://sharp.pixelplumbing.com/api-output#webp
			},
		},
	},
});
