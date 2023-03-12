module.exports = {
  themeConfig: {
    // 图标
    logo: '/assets/img/hero.png',
    // 导航栏
    nav: [
      {text: '首页', link: '/'},
      {text: '指引', link: '/guide/'},
      {
        text: '前端',
        items: [
          {text: 'HTML', link: '/frontEnd/html_yesir_mao'},
          {text: 'CSS', link: '/frontEnd/css_yesir_mao'},
          {text: 'JS', link: '/frontEnd/js_yesir_mao'},
        ],
      },
      {
        text: '框架',
        items: [
          {text: 'VUE', link: '/frame/vue_yesir_mao'},
          {text: 'REACT', link: '/frame/react_yesir_mao'},
        ],
      },
      {
        text: '工程化工具',
        items: [
          {text: 'GIT', link: '/engine/git_yesir_mao'},
          {text: 'WEBPACK', link: '/engine/webpack_yesir_mao'},
        ],
      },
      {
        text: '数据结构与算法',
        items: [
          {text: '数据结构', link: '/data/data_yesir_mao'},
          {text: '算法', link: '/data/structure_yesir_mao'},
          {text: '设计模式', link: '/data/model_yesir_mao'},
        ],
      },
      {
        text: '后端',
        items: [
          {text: 'JAVA', link: '/backEnd/java_yesir_mao'},
          {text: 'NODE', link: '/backEnd/node_yesir_mao'},
        ],
      },
      {
        text: '更多',
        items: [
          {text: 'GitHub', link: 'https://github.com/'},
          {text: 'Npm', link: 'https://www.npmjs.com/package/mysql'},
          {text: 'CSDN', link: 'https://i.csdn.net/#/user-center/profile'},
          {text: 'MDN', link: 'https://developer.mozilla.org/zh-CN/'},
          {text: 'React', link: 'https://react.docschina.org/'},
          {text: 'Webpack', link: 'https://www.webpackjs.com/'},
          {text: 'TypeScript', link: 'https://www.tslang.cn/docs/home.html'},
          {text: 'Echarts', link: 'https://echarts.apache.org/zh/index.html'},
          {text: 'LeetCode', link: 'https://leetcode.cn/'},
          {
            text: 'VUE',
            items: [
              {text: 'VUE官网', link: 'https://cn.vuejs.org/'},
              {text: 'Vite', link: 'https://vitejs.cn/'},
              {text: 'VuePress', link: 'http://caibaojian.com/vuepress/'},
            ],
          },
          {
            text: 'UI',
            items: [
              {
                text: 'Element Plus',
                link: 'https://element-plus.gitee.io/zh-CN/',
              },
              {
                text: 'Ant Design Vue',
                link: 'https://antdv.com/components/overview',
              },
              {text: 'ANTD PRO VUE', link: 'https://pro.antdv.com/'},
              {
                text: 'Vant Weapp',
                link: 'https://youzan.github.io/vant-weapp/#/home',
              },
            ],
          },
          {
            text: '微前端',
            items: [
              {
                text: 'qiankun（乾坤）',
                link: 'https://qiankun.umijs.org/zh/guide',
              },
              {
                text: 'micro-app',
                link: 'http://cangdu.org/micro-app/docs.html#/',
              },
            ],
          },
        ],
      },
    ],
    sidebar: [
      {
        title: 'HTML',
        path: '/frontEnd/html_yesir_mao',
        collapsable: true,
        sidebarDepth: 2,
        children: ['/frontEnd/html_yesir_mao'],
      },
      {
        title: 'CSS',
        path: '/frontEnd/css_yesir_mao',
        collapsable: true,
        sidebarDepth: 2,
        children: ['/frontEnd/css_yesir_mao'],
      },
      {
        title: 'JS',
        path: '/frontEnd/js_yesir_mao',
        collapsable: true,
        sidebarDepth: 2,
        children: ['/frontEnd/js_yesir_mao'],
      },
      {
        title: 'Vue',
        path: '/frame/vue_yesir_mao',
        collapsable: true,
        sidebarDepth: 2,
        children: ['/frame/vue_yesir_mao'],
      },
      {
        title: 'React',
        path: '/frame/react_yesir_mao',
        collapsable: true,
        sidebarDepth: 2,
        children: ['/frame/react_yesir_mao'],
      },
      {
        title: 'WebPack',
        path: '/engine/webpack_yesir_mao',
        collapsable: true,
        sidebarDepth: 2,
        children: ['/engine/webpack_yesir_mao'],
      },
      {
        title: 'Git',
        path: '/engine/git_yesir_mao',
        collapsable: true,
        sidebarDepth: 2,
        children: ['/engine/git_yesir_mao'],
      },
      {
        title: '数据结构',
        path: '/data/data_yesir_mao',
        collapsable: true,
        sidebarDepth: 2,
        children: ['/data/data_yesir_mao'],
      },
      {
        title: '算法',
        path: '/data/structure_yesir_mao',
        collapsable: true,
        sidebarDepth: 2,
        children: ['/data/structure_yesir_mao'],
      },
      {
        title: '设计模式',
        path: '/data/model_yesir_mao',
        collapsable: true,
        sidebarDepth: 2,
        children: ['/data/model_yesir_mao'],
      },
      {
        title: 'Java',
        path: '/backEnd/java_yesir_mao',
        collapsable: true,
        sidebarDepth: 2,
        children: ['/backEnd/java_yesir_mao'],
      },
      {
        title: 'Node',
        path: '/backEnd/node_yesir_mao',
        collapsable: true,
        sidebarDepth: 2,
        children: ['/backEnd/node_yesir_mao'],
      },
    ],
  },
};
