const webpack = require('webpack');

module.exports = {
    mode: 'spa',

    /*
     ** Headers of the page
     */
    head: {
        title: "basic_nuxt_project",
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1, user-scalable=no' },
            { hid: 'description', name: 'description', content:''}
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    /*
     ** Customize the progress-bar color
     */
    loading: { color: '#008AC6' },

    /*
     ** Global CSS
     */
    css: [
        'element-ui/lib/theme-chalk/index.css',
        'css-reset-and-normalize/css/reset-and-normalize.css'
    ],

    /*
     ** Plugins to load before mounting the App
     */
    plugins: [
        '@/plugins/element-ui',
        '@/plugins/global-components',
        '@/plugins/global-mixins',
        '@/plugins/fontawesome',
    ],

    /*
     ** Nuxt.js modules
     */
    modules: [
        '@nuxtjs/axios',
        'nuxt-sass-resources-loader'
    ],
    sassResources: [
        '@/assets/scss/style.scss'
    ],
    axios: {

    },
    router: {
        extendRoutes (routes, resolve) {
            // routes.forEach(route => {
            //     switch (route.name) {
            //         case 'index':
            //             break;
                
            //         default:
            //             break;
            //     }
            // });
        }
    },
    /*
     ** Build configuration
     */
    build: {
        vendor: ['jquery'],
        plugins: [
            new webpack.ProvidePlugin({
                $: "jquery"
            })
        ],
        /*
         ** You can extend webpack config here
         */
        extend(config, ctx) {
            // Run ESLint on save
            if (ctx.isDev && ctx.isClient) {
                config.module.rules.push({
                    enforce: "pre",
                    test: /\.(js|vue)$/,
                    loader: "eslint-loader",
                    exclude: /(node_modules)/
                })
            }
        }
    }
}