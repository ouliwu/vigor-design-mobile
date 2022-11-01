# 如何在社区提问

> 这篇指南来源于 **How To Ask Questions The Smart Way** 的 [英文原文](http://www.catb.org/~esr/faqs/smart-questions.html) 和 [中文版本](https://github.com/ryanhanwu/How-To-Ask-Questions-The-Smart-Way/blob/main/README-zh_CN.md) ，我们摘取了其中比较关键和常见的内容，并且对一些内容进行了调整，使其更加形象易于了解。

**当你拋出一个技术问题时，最终是否能得到有用的回答，往往取决于你所提问和追问的方式**。本指南将教你如何正确的提问以获得你满意的答案。

有些时候，人们会不加思考地就进行提问，或者是在提问之前不做好他们应该做的事情，看起来在开源社区中，人们的沟通和交流是完全自由的，但是我们仍然认为，这种行为是不合理的，因为那些不加思考的提问、只想索取答案而不愿付出自己时间和精力的行为，都会消耗整个社区本来可以用在更有趣的问题或者是更值得回答的人身上的时间。

所以，请在提问前，仔细、完整地阅读以下内容，相信会帮到你，更会帮助到整个社区。

## 在提问之前

在你准备提 issue 或者是在钉钉交流群中提出技术问题之前，请先做到以下事情：

- 查阅和检索官网文档，很多常见的问题在官网文档中都有说明
- 尝试在我们的 GitHub 仓库的历史 issue 中搜索是否已经有人提过同样的问题
- 尝试自己检查问题，判断这个问题是你自己的代码写错了，还是 vigor-design-mobile 本身的问题

请谨记：草率的发问只能得到草率的回答，或者根本得不到任何答案。越是能表现出在寻求帮助前你为解决问题所付出的努力，你越有可能得到实质性的帮助。

## 当你提问时

### 使用有意义且描述明确的标题

在邮件列表、新闻群组或论坛中，大约 50 字以内的标题是抓住资深专家注意力的好机会。别用喋喋不休的帮帮忙、跪求、急（更别说救命啊！！！！这样让人反感的话，用这种标题会被条件反射式地忽略）来浪费这个机会。不要妄想用你的痛苦程度来打动我们，而应该是在这点空间中使用极简单扼要的描述方式来提出问题。

一个好标题范例是"目标-差异式"的描述，许多技术支持组织就是这样做的。在目标部分指出是哪一个或哪一组东西有问题，在差异部分则描述与期望的行为不一致的地方。

> 蠢问题：求救！Swiper 组件 onIndexChange 事件挂掉了
> 稍好一点的问题：Swiper 组件 onIndexChange 事件一直疯狂触发，我把 autoplay 关掉就正常了
> 聪明问题：Swiper 组件设置 autoplay 后，onIndexChange 事件间隔 autoplayInterval 持续触发，不会停止

### 使用清晰、正确、精准且合乎语法的语句

我们从经验中发现，粗心的提问者通常也会粗心地写程序与思考（我敢打包票）。回答粗心大意者的问题很不值得，我们宁愿把时间耗在别处。

正确的拼写、标点符号和大小写是很重要的，不要将 `vigor-design-mobile` 混淆为 `antm`，也不要把 `Picker` 写成 `Pick`。一般来说，如果你觉得这样做很麻烦，不想在乎这些，那我们也觉得麻烦，不想在乎你的提问。

此外，当你在 GitHub 上提问时，使用的是 Markdown 语法，请确保你预先了解过最基础的语法规则，并且在发布之后检查一些内容和格式是否符合你的预期，我们常常遇到有人把代码的格式弄错。

### 精确地描述问题并言之有物

- 仔细、清楚地描述你遇到的问题的具体表现
- 描述问题发生的环境（设备、操作系统、浏览器、以及对应的型号或版本）
- 描述在提问前你是怎样去研究和理解这个问题的
- 描述在提问前为确定问题而采取的诊断步骤
- 尽可能地提供一个可以重现这个问题的可控环境的方法

我们非常推荐在提问时提供一个可复现问题的最小 demo，你可以直接使用我们提供的 [Codesandbox](https://codesandbox.io/s/vigor-design-mobile-snrxr?file=/src/App.tsx) 环境非常方便地写出一个复现 demo。

### 描述问题症状而非你的猜测

你费劲心力描述你认为问题是怎样造成的，这往往并不会有什么帮助，在社区中，大家更希望了解到的是准确的一手信息。严谨一些，会避免大家走到错误的排查方向上。

### 别把自己家庭作业的问题贴上来

开源社区不会手把手教你写代码，也无法帮你完成工作（不然的话，你就得付工资给开源社区了）。

我们都会在工作中遇到一些问题，也乐意帮身边的人一把，但你的工作终究是你的工作，这些问题也终究得由你来搞定。你可以要求给点提示，但最好不要期望得到完整的解决方案。有的时候，自己解决问题的过程，对技术提升是很有效的。

## 不好的提问

以下是几个经典的蠢问题：

问题：[input\[type="search"\] 设置背景色失败](https://github.com/ant-design/ant-design-mobile/issues/4684)

回答：你是怎么设置的背景色？直接在属性中设置的还是在 CSS 文件中设置的？复现步骤和环境都描述不清楚，怎么能够期望社区帮你？

问题：[v5 版本没有 DatePicker 吗？](https://github.com/ant-design/ant-design-mobile/issues/4700)

回答：STFW

问题：[【请求帮助】error: Error: Unable to resolve module ./global.css from](https://github.com/ant-design/ant-design-mobile/issues/4687)

回答：写"请求帮助"并不会让你的问题更容易被社区回答，写清楚问题本身才会

问题：[连个下拉框组件都没有](https://github.com/ant-design/ant-design-mobile/issues/4720)

回答：……

## 好的提问

问题：[Dialog.confirm 配合 Input 组件使用时，无法正常绑定 state](https://github.com/ant-design/ant-design-mobile/issues/4762)

问题：[--adm-button-border-width 设置 0 时，Button 点击样式有问题](https://github.com/ant-design/ant-design-mobile/issues/4709)

问题：[Modal 和 Dialog 组件设置 image 属性后，当图片过长，无法显示内容](https://github.com/ant-design/ant-design-mobile/issues/4712)

问题：[Collapse 折叠面板想在展开和关闭时显示不同图标，能不能支持？以及这个是否支持动画？](https://github.com/ant-design/ant-design-mobile/issues/4545)
