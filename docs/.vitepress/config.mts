import { defineConfig, type DefaultTheme } from 'vitepress'

// https://vitepress.dev/zh/reference/site-config
export default defineConfig({
  title: "DocsDemo",
  description: "使用 vitepress 搭建的文档网站示例",

  base: '/DocsDemo/',

  lastUpdated: false,

  head: [
    ['link', { rel: 'icon', href: '/favicon.jpg' }]
  ],

  themeConfig: {
    // https://vitepress.dev/zh/reference/default-theme-config
    logo: "/favicon.jpg",
    nav: nav(),

    sidebar: sidebar(),

    socialLinks: [
      { icon: "github", link: "https://github.com/yxalkaid" }
    ],

    editLink: {
      pattern: "https://github.com/yxalkaid/DocsDemo/edit/main/docs/:path",
      text: '在 GitHub 上编辑此页面'
    },

    search: {
      provider: 'local'
    },

    // footer: {
    //   message: '',
    //   copyright: ''
    // },

    docFooter: {
      prev: '上一页',
      next: '下一页'
    },

    outline: {
      label: '本页目录'
    },

    lastUpdated: {
      text: '最后更新于'
    },

    notFound: {
      title: '页面未找到',
      quote:
        '但如果你不改变方向，并且继续寻找，你可能最终会到达你所前往的地方。',
      linkLabel: '前往首页',
      linkText: '带我回首页'
    },

    langMenuLabel: '多语言',
    returnToTopLabel: '回到顶部',
    sidebarMenuLabel: '菜单',
    darkModeSwitchLabel: '主题',
    lightModeSwitchTitle: '切换到浅色模式',
    darkModeSwitchTitle: '切换到深色模式',
    skipToContentLabel: '跳转到内容',
  },
  locales: {
    root: { label: '简体中文', lang: 'zh-Hans' },
    en: { label: 'English', lang: 'en-US' },
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    { text: "首页", link: "/" },
    { text: "指南", link: "/quick-start"},
    {
      text: "关于",
      items: [
        { text: "Me", link: "https://yxalkaid.github.io/" },
      ]
    }
  ]
}

function sidebar(): DefaultTheme.Sidebar {
  return [
    {
      text: '指南',
      items: [
        { text: "快速开始", link: '/quick-start' },
      ]
    }
  ]
}