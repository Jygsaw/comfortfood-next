/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    eslint: {
        dirs: ["/"],
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "d2lnr5mha7bycj.cloudfront.net",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "cdn.pixabay.com",
                port: "",
                pathname: "**",
            },
        ],
    },

    // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
    // trailingSlash: true,

    // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
    // skipTrailingSlashRedirect: true,

    // Optional: Change the output directory `out` -> `dist`
    // distDir: 'dist',
};

module.exports = nextConfig;
