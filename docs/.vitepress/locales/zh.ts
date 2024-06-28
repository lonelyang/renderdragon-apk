import { defineConfig, type DefaultTheme } from 'vitepress'

export const zhConfig = defineConfig({  
  title: "RenderDragon Apk",
  description: "RenderDragon的非官方apk页面",
  themeConfig: {
    nav: [
      {
        text: 'Apk',
        link: '/apk/start',
        activeMatch: '/apk/'
      },
      {
        text: 'Shaders',
        link: '/shaders/start',
        activeMatch: '/shaders/'
      },
      {
        text: 'Docs',
        link: '/docs/start',
        activeMatch: '/docs/'
      }
    ],
    sidebar: {
      '/apk/': {
        base: '/apk/',
        items: sidebarApk() 
       },
      '/shaders/': {
        base: '/shaders/',
        items: sidebarShaders() 
       },
      '/docs/': {
        base: '/docs/',
        items: sidebarDocs()
      }
    },
    editLink: {
      pattern: 'https://github.com/lonelyang/renderdragon-apk/edit/main/docs/:path',
      text: '在GitHub上编辑这个页面'
    },
    footer: {
      message: "本网站不隶属于Mojang Studios."
    }
  }
})

function sidebarApk(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Apk 列表',
      items: [
        { text: '开始', link: 'start' },
        { text: '正式版', link: 'list/Release' },
        { text: '预览版', link: 'list/Preview' },
      ]
    }
  ]
}
  
function sidebarShaders(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '引导',
      items: [
        {
          text: '安装',
          base: '/shaders/installation/',
          link: 'start',
          items: [
            { text: 'Android', link: 'android' },
            { text: 'Windows', link: 'windows' },
            { text: 'iOS', link: 'ios' },
            { text: 'Linux', link: 'linux' }
          ]
        }
      ]
    },
    {
      text: '着色器列表',
      items: [
        { text: '探索', link: 'start' },
        { text: '渲染龙', link: 'list/rd' },
        { text: '延迟渲染', link: 'list/deferred' },
      ]
    }
  ]
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: '文档',
      items: [
        { text: '开始工作', link: 'start' },
        { text: '构建着色器', link: 'build' },
        { text: '补充内容', link: 'extra' },
        { text: '实用程序', link: 'utilities' }
      ]
    }
  ]
}
  