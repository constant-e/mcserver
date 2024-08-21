import { defineConfig } from 'vitepress'

export default defineConfig({
  base: "/mcserver/",
  title: "EntityBug's MC Server",
  description: "EntityBug's MC Server",
  lang: "zh-CN",
  themeConfig: {
    nav: [
      { text: '主页', link: '/' },
      { text: '详细信息', link: '/details' },
      { text: '公告', link: '/notice' },
      { text: '规则', link: '/rules' },
      { text: '关于', link: '/about' }
    ],

    search: {
      provider: 'local'
    },
  }
})
