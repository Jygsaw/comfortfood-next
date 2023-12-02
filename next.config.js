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
                pathname: "/product-image/file/large_59565821-77e2-437c-9113-cdf304316dd4.jpg",
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
