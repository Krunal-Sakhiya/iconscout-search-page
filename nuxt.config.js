export default {
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        title: "Iconscout Search Page",
        htmlAttrs: {
            lang: "en",
        },
        meta: [
            { charset: "utf-8" },
            {
                name: "viewport",
                content: "width=device-width, initial-scale=1",
            },
            { hid: "description", name: "description", content: "" },
            { name: "format-detection", content: "telephone=no" },
        ],
        link: [
            { rel: "icon", type: "image/png", href: "/favicon.png" },
            {
                rel: "stylesheet",
                href: "https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css",
            },
            {
                rel: "stylesheet",
                href: "https://unicons.iconscout.com/release/v4.0.8/css/line.css",
            },
        ],
        script: [
            {
                src: "https://code.jquery.com/jquery-3.6.0.slim.min.js",
                body: true,
            },
            {
                src: "https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js",
                body: true,
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ["@/assets/css/global.css"],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [{ src: "~/plugins/jquery.js", mode: "client" }],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        // https://go.nuxtjs.dev/bootstrap
        "bootstrap-vue/nuxt",
    ],

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {},

    publicRuntimeConfig: {
        iconScoutClientId: process.env.ICONSCOUT_CLIENT_ID,
        iconScoutClientSecret: process.env.ICONSCOUT_CLIENT_SECRET,
    },
};
