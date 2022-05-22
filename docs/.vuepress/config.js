
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
                                '/notes/learningNote_7.md',
                                '/notes/learningNote_8.md',
                                '/notes/learningNote_9.md',
                                '/notes/learningNote_10.md',
                                '/notes/learningNote_11.md',
                                '/notes/learningNote_12.md',
                                '/notes/learningNote_13.md',
                                '/notes/learningNote_14.md',
                                '/notes/learningNote_15.md',
                                '/notes/learningNote_16.md',
                                '/notes/learningNote_17.md',
                                '/notes/learningNote_18.md',
                                '/notes/learningNote_19.md',
                                '/notes/learningNote_20.md',
                                '/notes/learningNote_21.md',
                                '/notes/learningNote_22.md',
                                '/notes/learningNote_23.md',
                                '/notes/learningNote_24.md',
                                '/notes/learningNote_25.md',
                                '/notes/learningNote_26.md',
                                '/notes/learningNote_27.md',
                                '/notes/learningNote_28.md',
                                '/notes/learningNote_29.md',
                                '/notes/learningNote_30.md',
                                '/notes/learningNote_31.md',
                                '/notes/learningNote_32.md',
                                '/notes/learningNote_33.md',
                                '/notes/learningNote_34.md',
                                '/notes/learningNote_35.md',
                                '/notes/learningNote_36.md',
                                '/notes/learningNote_37.md',
                                '/notes/learningNote_38.md',
                                '/notes/learningNote_39.md',
                                '/notes/learningNote_40.md',
                                '/notes/learningNote_41.md',
                                '/notes/learningNote_42.md',
                                '/notes/learningNote_43.md'
                            ],
                        },
                    ]
                },
                editLink: false
            },
        },
    },

}