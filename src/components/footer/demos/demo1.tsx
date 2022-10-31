import React from 'react'
import { Footer } from 'vigor-design-mobile'
import { DemoBlock } from 'demos'
import { HandPayCircleOutline } from 'antd-mobile-icons'
import { ChipItem, LinkItem } from '../footer'

export default () => {
  const links: LinkItem[] = [
    {
      text: 'github',
      href: 'https://www.github.com/',
    },
    {
      text: 'gitee',
      href: 'https://www.gitee.com/',
    },
  ]
  const chips: ChipItem[] = [
    {
      text: '知乎',
    },
    {
      text: '掘金',
    },
    {
      text: '语雀',
    },
  ]
  const chipsLinkData: ChipItem[] = [
    {
      text: '知乎',
      type: 'link',
    },
    {
      text: '掘金',
      type: 'link',
    },
    {
      text: '语雀',
      type: 'link',
    },
  ]

  const onChipClick = (item: ChipItem, index: number) => {
    console.log(item, index)
    alert(`${item?.text}被点击了`)
  }
  const onLinkClick = (item: LinkItem, index: number) => {
    console.log(item, index)
    alert(`跳转到${item?.href}`)
  }

  return (
    <>
      <DemoBlock title='基础页脚'>
        <Footer label='没有更多了'></Footer>
      </DemoBlock>
      <DemoBlock title='自定义 label'>
        <Footer
          label={
            <div>
              <HandPayCircleOutline /> 分割线
            </div>
          }
        ></Footer>
      </DemoBlock>
      <DemoBlock title='带内容的页脚'>
        <Footer content='@ 2004-2020 】www.com All rights reserved'></Footer>
      </DemoBlock>
      <DemoBlock title='带链接的页脚'>
        <Footer
          links={[
            {
              text: 'github',
              href: 'https://www.github.com/',
            },
          ]}
        ></Footer>
      </DemoBlock>
      <DemoBlock title='通过点击事件跳转'>
        <Footer links={links} onLinkClick={onLinkClick}></Footer>
      </DemoBlock>
      <DemoBlock title='带标签的页脚'>
        <Footer chips={chips}></Footer>
      </DemoBlock>
      <DemoBlock title='标签可点击'>
        <Footer chips={chipsLinkData} onChipClick={onChipClick}></Footer>
      </DemoBlock>
      <DemoBlock title='组合使用'>
        <Footer
          label='没有更多了'
          content='@ 2004-2020 Alipay.com All rights reserved'
          links={links}
          chips={chips}
        ></Footer>
      </DemoBlock>
    </>
  )
}
