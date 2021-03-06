module.exports = {
  title: '知识文档',
  description: '总结知识，分享知识，创造知识',
  base: '/',
  host: '0.0.0.0',
  port: 8081,
  //额外的需要被注入到当前页面的HTML head中的标签，其中路径的'/'就是public资源目录
  head: [
    ['link', {rel: 'icon', href: '/img/icon.png'}],
    ['link', {rel: 'manifest', href: '/manifest.json'}],
  ],
  themeConfig: {
    //自动生成侧栏
    sidebar: 'auto',
    sidebarDepth: 1,
    //gitc仓库地质
    repo: 'https://github.com/dreamof2080/myNote.git',
    //导航栏
    nav: [
      {text: 'Home', link: '/'},
      {
        text: 'OA系统',
        items: [
          {text: '系统配置', link: '/oaSystem/oaSets/'},
          {text: '表结构', link: '/oaSystem/oaTables/'},
          {text: '权限分表', link: '/oaSystem/permissionSplit/'},
          {text: '数据库回导操作', link: '/oaSystem/dbBack/'},
          {text: '断电恢复', link: '/oaSystem/powerOffRecovery/'},
          {text: '列表功能', link: '/oaSystem/reportList/'},
          {text: '更新说明', link: '/oaSystem/update/'},
        ]
      },
      {
        text: '数据库',
        items: [
          {text: 'oracle', link: '/db/oracle/'},
          {text: 'mysql', link: '/db/mysql/'},
          {text: 'redis', link: '/db/redis/'},
          {text: 'MongoDB', link: '/db/MongoDB/'},
          {text: 'postgreSQL', link: '/db/postgreSQL/'},
        ]
      },
      {
        text: '后端',
        items: [
          {text: 'jdk1.8新特性', link: '/backStage/java/'},
          {text: 'docker', link: '/backStage/docker/'},
          {text: '框架',
            items: [
              {text: 'Hibernate', link: '/backStage/frameWork/Hibernate/'},
              {text: 'springMVC',link: '/backStage/frameWork/Spring/springMVC/'},
              {text: 'eureka',link: '/backStage/frameWork/Spring/eureka/'},
              {text: 'swagger', link: '/backStage/frameWork/Spring/swagger/'},
            ]},
          {text: 'elasticSearch', link: '/backStage/elasticSearch/'},
        ]
      },
      {
        text: '前端',
        items: [
          {text: 'npm', link: '/front/npm/'},
          {text: 'JavaScript', link: '/front/js/'},
          {text: 'vue.js', link: '/front/vuejs/'},
          {text: '设计', link: '/front/design/'},
        ]
      },
      {text: 'linux', link: '/linux/'},
      {
        text: '版本管理',
        items: [
          {text: 'svn', link: '/vcs/svn/'},
          {text: 'git', link: '/vcs/git/'},
        ]
      },
      {text: '软考', link: '/softExamination/'},
    ],
    search: true,
    markdown: {
      //是否显示代码行号
      lineNumber: true,
    },
  }
};
