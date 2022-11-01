import { IConfig } from 'dumi'
import { menus } from './menus'
import { navs } from './navs'
const repo = 'vigor-design-mobile';

const shouldDisableCSSVar = Boolean(process.env.DISABLE_CSS_VAR)

if (shouldDisableCSSVar) {
  console.info('\nCSS Variables has been disabled for dev purpose.\n')
}

const postcssDisableCSSVars = require('../scripts/postcss-disable-css-vars.js')

const config: IConfig = {
  mode: 'site',
  title: 'Vigor Design Mobile ',
  logo: 'https://user-images.githubusercontent.com/48983788/199143833-07d9c5d9-6ddf-4d54-b6d2-8530fea2dec3.svg',
  favicon:
    'https://gw.alipayobjects.com/zos/bmw-prod/69a27fcc-ce52-4f27-83f1-c44541e9b65d.svg',
  navs,
  menus,
  resolve: {
    includes: ['docs', 'src'],
    passivePreview: true,
  },
  publicPath: `/${repo}/`,
  base: `/${repo}`,
  alias: {
    'vigor-design-mobile/es': process.cwd() + '/src',
    'demos': process.cwd() + '/src/demos/index.ts',
  },
  metas: [
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover',
    },
    {
      name: 'keywords',
      content: 'vigor-design-mobile, Vigor Design Mobile , React mobile components',
    },
    {
      name: 'description',
      content: 'Essential UI blocks for building mobile web apps.',
    },
    {
      name: 'google-site-verification',
      content: '2saDOufpfJI4y1cqfxvuviYg8bfo4gLmiEtSnt2oh50',
    },
  ],
  hash: true,
  scripts: [
    `if (location.pathname.startsWith('/~demos/')) {
      document.documentElement.setAttribute('data-is-demo', 'true')
    }`,
    `
    if (!location.port) {
      // Enable Google Analytics
      window.dataLayer = window.dataLayer || [];
      function gtag() {
        dataLayer.push(arguments);
      }
      gtag('js', new Date());
      gtag('config', 'UA-72788897-2');
    }
    `,
    {
      src: 'https://www.googletagmanager.com/gtag/js?id=UA-72788897-2',
      async: true,
    },
  ],
  extraPostCSSPlugins: [
    shouldDisableCSSVar && postcssDisableCSSVars(),
  ].filter(i => i),
  themeConfig: {
    carrier: 'vigorDM', // 设备状态栏左侧的文本内容
    hd: {
      // umi-hd 的 750 高清方案（默认值）
      rules: [
        { maxWidth: 375, mode: 'vw', options: [100, 750] },
        { minWidth: 376, maxWidth: 750, mode: 'vw', options: [100, 1500] },
      ],
      // 更多 rule 配置访问 https://github.com/umijs/dumi/blob/1.x/packages/theme-mobile/src/typings/config.d.ts#L7
    }
  },
  exportStatic: {},
  dynamicImport: {},
}

export default config
