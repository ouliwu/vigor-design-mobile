import { components } from './components'

export const menus = {
  '/': [
    {
      title: '首页',
      path: 'index',
    },
  ],
  '/guide': [
    {
      title: '快速上手',
      path: '/guide/quick-start',
    },
    {
      title: 'CSS 变量',
      path: '/guide/css-variables',
    },
    {
      title: '主题',
      path: '/guide/theming',
    },
    {
      title: '深色模式',
      path: '/guide/dark-mode',
    },
    {
      title: '按需加载',
      path: '/guide/import-on-demand',
    },
    {
      title: '国际化',
      path: '/guide/i18n',
    },
  ],
  '/components': [
    {
      title: '通用',
      children: components.common,
    },
    {
      title: '布局',
      children: components.layout,
    },
    {
      title: '导航',
      children: components.navigation,
    },

    {
      title: '信息展示',
      children: components.dataDisplay,
    },
    {
      title: '信息录入',
      children: components.dataEntry,
    },
    {
      title: '反馈',
      children: components.feedback,
    },
    {
      title: '引导提示',
      children: components.guidance,
    },
    {
      title: '其他',
      children: components.other,
    },
  ],
}
