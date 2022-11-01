# IndexBar 序列

根据字母 A ～ Z 排列内容。

## 何时使用

适用于列表的分类显示和快速定位。

## 示例

<code src="./demos/demo1.tsx"></code>
<code src="./demos/demo2.tsx"></code>
<code src="./demos/demo3.tsx" debug></code>

## IndexBar

### 属性

| 属性          | 说明                 | 类型                      | 默认值 |
| ------------- | -------------------- | ------------------------- | ------ |
| onIndexChange | 当锚点变化时回调     | `(index: string) => void` | -      |
| sticky        | 是否开启锚点自动吸顶 | `boolean`                 | `true` |

### Ref

| 属性     | 说明           | 类型                      |
| -------- | -------------- | ------------------------- |
| scrollTo | 滚动到指定锚点 | `(index: string) => void` |

### CSS 变量

| 属性                | 说明                       | 默认值 | 全局变量 |
| ------------------- | -------------------------- | ------ | -------- |
| --sticky-offset-top | 锚点自动吸顶时与顶部的距离 | `0`    | -        |

## IndexBar.Panel

### 属性

| 属性  | 说明                   | 类型        | 默认值                      |
| ----- | ---------------------- | ----------- | --------------------------- |
| brief | 右侧索引条中的显示内容 | `ReactNode` | 默认取 `index` 的第一个字符 |
| index | 索引（不可以重复）     | `string`    | -                           |
| title | 左侧主内容区的分组标题 | `ReactNode` | 默认取 `index`              |
