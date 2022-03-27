
module.exports = {
    // 部署路径
    base: '/ReverseHunters/',

    // 站点配置
    lang: 'zh-CN',
    title: 'ReverseHunters',
    description: '逆向工程',

    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        repo: 'https://github.com/Hunter-0x07/ReverseHunters',
        locales: {
            '/': {
                navbar: [
                    {
                        text: '笔记',
                        link: '/notes/',
                    },
                    {
                        text: '目录',
                        link: '/directory/',
                    }
                ],
                sidebar: {
                    '/notes/': [
                        {
                            text: '笔记',
                            children: [
                                '/notes/README.md',
                                '/notes/learningNote_2.md',
                                '/notes/learningNote_3.md',
                                '/notes/learningNote_4.md',
                                '/notes/learningNote_5.md',
                                '/notes/learningNote_6.md',
                                '/notes/learningNote_7.md'
                            ],
                        },
                    ]
                },
                editLink: false
            },
        },
    },

}