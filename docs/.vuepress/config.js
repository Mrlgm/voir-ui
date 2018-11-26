module.exports = {
    title: 'voir-ui',
    description: '一个好用的UI框架',
    themeConfig: {
        nav: [
            {
                text:'主页',
                link:'/'
            },
            {
                text:'文档',
                link:'/guide/'
            },
            {
                text:'交流',
                link:'https://google.com'
            },
            {
                text: 'Languages',
                items: [
                    { text: 'Chinese', link: '/language/chinese/' },
                    { text: 'Japanese', link: '/language/japanese/' }
                ]
            }
        ],
        sidebar: [
            {
                title:'入门',
                children:[
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title:'组件',
                children: [
                    '/components/button'
                ]
            }

        ]
    }
}