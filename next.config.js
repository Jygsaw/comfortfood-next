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
                hostname: "www.simplyrecipes.com",
                port: "",
                pathname: "**",
            },
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
            {
                protocol: "https",
                hostname: "d14tal8bchn59o.cloudfront.net",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "acupunctureofiowa.com",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "www.tastefest.com.au",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "www.innatfollybeach.com",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "simplebites.net",
                port: "",
                pathname: "**",
            },
            {
                protocol: "https",
                hostname: "www.greenpan.ch",
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
