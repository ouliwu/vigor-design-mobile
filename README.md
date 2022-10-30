# vigor-design-mobile

## 快速上手

### 安装

```bash
$ npm install --save vigor-design-mobile
# or
$ yarn add vigor-design-mobile
# or
$ pnpm add vigor-design-mobile
```

### 引入

直接引入组件即可，vigor-design-mobile 会自动为你加载 css 样式文件：

```bash
import { Button } from 'vigor-design-mobile'
```

## 反馈与共建

请访问 [GitHub](https://github.com/umijs/dumi) 

## 开发规范

1. commit 信息规范

   - commit 信息必须符合 type(scope): subject 的规范
   - type 提交类型为以下类型`feat|fix|docs|dx|style|refactor|perf|test|workflow|build|ci|chore|types|wip|release`
   - 严禁使用--no-verify 跳过 commit 信息验证
  
2. 组件库内置 prettier，写完代码后可以执行 yarn prettier 或者通过编辑器格式化代码

3. 测试应在每个组件目录下新建一个`__tests__`的目录，测试代码存放于此，工具库等公共方法的测试放于`src/tests`目录下
