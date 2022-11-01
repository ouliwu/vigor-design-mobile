import React from 'react'
import { Image, Space } from 'vigor-design-mobile'
import { DemoBlock } from 'demos'

import styles from './demo1.less'

const demoSrc =
  'https://images.unsplash.com/photo-1567945716310-4745a6b7844b?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1500&q=60'
const demoSrc2 =
  'https://images.unsplash.com/photo-1620476214170-1d8080f65cdb?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3150&q=80'

export default () => {
  return (
    <div style={{ userSelect: 'none' }}>
      <DemoBlock title='基础用法'>
        <Image src={demoSrc} />
      </DemoBlock>

      <DemoBlock title='多种填充模式'>
        <Space wrap>
          <Image src={demoSrc} width={100} height={100} fit='fill' />
          <Image src={demoSrc} width={100} height={100} fit='contain' />
          <Image src={demoSrc} width={100} height={100} fit='cover' />
          <Image src={demoSrc} width={100} height={100} fit='scale-down' />
          <Image src={demoSrc} width={100} height={100} fit='none' />
        </Space>
      </DemoBlock>

      <DemoBlock title='自定义圆角'>
        <Space wrap>
          <Image
            src={demoSrc}
            width={64}
            height={64}
            fit='cover'
            style={{ borderRadius: 4 }}
          />
          <Image
            src={demoSrc}
            width={64}
            height={64}
            fit='cover'
            style={{ borderRadius: 8 }}
          />
          <Image
            src={demoSrc}
            width={64}
            height={64}
            fit='cover'
            style={{ borderRadius: 32 }}
          />
        </Space>
      </DemoBlock>

      <DemoBlock title='通过 CSS 变量统一设置图片大小'>
        <div className={styles.imagesContainer}>
          <Space wrap>
            <Image src={demoSrc} />
            <Image src={demoSrc} />
            <Image src={demoSrc} />
          </Space>
        </div>
      </DemoBlock>

      <DemoBlock title='加载失败'>
        <Image src='/404' width={100} height={100} />
      </DemoBlock>

      <DemoBlock title='懒加载'>
        <Image lazy src={demoSrc2} />
      </DemoBlock>
    </div>
  )
}
