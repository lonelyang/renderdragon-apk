import { defineConfig, type DefaultTheme } from 'vitepress'

export const enConfig = defineConfig({  
  title: "RenderDragon Apk",
  description: "Unofficial documentation page for apk Shaders",
  themeConfig: {
    nav: [
      {
        text: 'Apk',
        link: '/en/apk/start',
        activeMatch: '/apk/'
      },
      {
        text: 'Shaders',
        link: '/en/shaders/start',
        activeMatch: '/shaders/'
      },
      {
        text: 'Docs',
        link: '/en/docs/start',
        activeMatch: '/docs/'
      }
    ],
    sidebar: {
      '/en/apk/': {
        base: '/en/apk/',
        items: sidebarApk() 
       },
      '/en/shaders/': {
        base: '/en/shaders/',
        items: sidebarShaders() 
       },
      '/en/docs/': {
        base: '/en/docs/',
        items: sidebarDocs()
      }
    },
    editLink: {
      pattern: 'https://github.com/lonelyang/renderdragon-apk/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    footer: {
      message: "This site is not affiliated with Mojang Studios."
    }
  }
})

function sidebarApk(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Apk List',
      items: [
        { text: 'start', link: 'start' },
        { text: 'Release', link: 'list/Release' },
        { text: 'Preview', link: 'list/Preview' },
      ]
    }
  ]
}
  
function sidebarShaders(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Guide',
      items: [
        {
          text: 'Installation',
          base: '/en/shaders/installation/',
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
      text: 'Shaders List',
      items: [
        { text: 'Explore', link: 'start' },
        { text: 'Forward', link: 'list/rd' },
        { text: 'Deferred', link: 'list/deferred' },
      ]
    }
  ]
}

function sidebarDocs(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Documentation',
      items: [
        { text: 'Getting started', link: 'start' },
        { text: 'Building shaders', link: 'build' },
        { text: 'Extra resources', link: 'extra' },
        { text: 'Utilities', link: 'utilities' }
      ]
    }
  ]
}
  