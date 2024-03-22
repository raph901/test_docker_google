/** @type {import('next').NextConfig} */
const nextConfig = {
	output: 'standalone',
	images: {
		remotePatterns: [
			{
				protocol: "http",
				hostname: "localhost",
				port: "8080",
				pathname: "/wp-content/uploads/**",
				// formats: ['image/png', 'image/webp']
			},
		],
		unoptimized: true,
		// formats: ['image/avif', 'image/webp']
	},
}

module.exports = nextConfig
