module.exports = {
    title: '知识文档',
    description: '总结知识，分享知识',
    base: '/',
    host: '0.0.0.0',
    port: 8081,
    //额外的需要被注入到当前页面的HTML head中的标签，其中路径的'/'就是public资源目录
    head: [
        ['link', {rel: 'icon', href: '/img/logo.ico'}],
        ['link', {rel: 'manifest', href: '/manifest.json'}],
    ],
    themeConfig: {
        //gitc仓库地质
        repo: 'https://github.com/dreamof2080/myNote.git',
        //导航栏
        nav: [
            {text: 'Home', link: '/'},
            {
                text: '系统',
                items: [
                    {text: 'OA配置', link: '/system/oaSets/'},
                    {text: 'OA表结构', link: '/system/oaTables/'},
                ]
            },
            {
                text: '数据库',
                items: [
                    {text: 'oracle', link: '/db/oracle/'},
                    {text: 'mysql', link: '/db/mysql/'},
                ]
            },
            {
                text: '后台',
                items: [
                    {text: 'java', link: '/backStage/java/'},
                    {text: '框架', link: '/backStage/frameWork/'},
                ]
            },
            {
                text: '前端',
                items: [
                    {text: 'vue.js', link: '/front/vuejs/'},
                    {text: '设计', link: '/front/design/'},
                ]
            },
            {text: 'linux', link: '/linux/'},
        ],
        search: true,
        markdown: {
            //是否显示代码行号
            lineNumber: true,
        },
    }
};