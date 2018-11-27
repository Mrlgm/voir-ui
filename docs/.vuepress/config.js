module.exports = {
    base: '/voir-UI/',
    title: 'Voir-ui',
    description: '一个好用的UI框架',
    markdown: {
        lineNumbers: true
    },
    head: [
        ['link', {rel: 'shortcut icon', type: "image/x-icon", href: `/favicon.ico`}]
    ],
    themeConfig: {
        nav: [
            {
                text: '主页',
                link: '/'
            },
            {
                text: '文档',
                link: '/guide/'
            },
            {
                text: '交流',
                link: 'https://google.com'
            },
            {
                text: 'Languages',
                items: [
                    {text: 'Chinese', link: '/language/chinese/'},
                    {text: 'Japanese', link: '/language/japanese/'}
                ]
            }
        ],
        sidebar: [
            {
                title: '开发指南',
                collapsable: false,
                children: [
                    '/introduction/',
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title: '组件',
                children: [
                    '/components/basic',
                    '/components/form',
                    '/components/layout',
                    '/components/navigation',
                    '/components/notice',
                    '/components/other'
                ]
            }
        ]


    }
}