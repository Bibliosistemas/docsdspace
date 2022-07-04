const { description, name } = require('../../package')

module.exports = {
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#title
     */
    title: 'Personalización Dspace',
    /**
     * Ref：https://v1.vuepress.vuejs.org/config/#description
     */
    description: description,

    base: `/${name}/`,

    /**
     * Extra tags to be injected to the page HTML `<head>`
     *
     * ref：https://v1.vuepress.vuejs.org/config/#head
     */
    head: [
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }]
    ],

    /**
     * Theme configuration, here is the default theme configuration for VuePress.
     *
     * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
     */
    themeConfig: {
        repo: 'https://github.com/horaciod/cursodspacedocs',
        editLinks: false,
        docsDir: '',
        editLinkText: '',
        lastUpdated: true,
        nav: [{
                text: 'Guía',
                link: '/guide/',
            },

            {
                text: 'bibliosistemas.com',
                link: 'https://bibliosistemas.com'
            }
        ],
        sidebar: {
            '/guide/': [{
                title: 'Guide',
                collapsable: true,
                children: [
                    '',
                    'crear-tema',
                ]
            }],
        }
    },

    /**
     * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
     */
    plugins: [
        '@vuepress/plugin-back-to-top',
        '@vuepress/plugin-medium-zoom',
    ]
}