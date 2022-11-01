import React, { useState } from 'react'
import { Popup, Space, Button } from 'vigor-design-mobile'
import { DemoBlock, lorem } from 'demos'

export default () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [visible5, setVisible5] = useState(false)
  const [visible6, setVisible6] = useState(false)
  const [visible7, setVisible7] = useState(false)
  const [visibleCloseRight, setVisibleCloseRight] = useState(false)

  return (
    <>
      <DemoBlock title='弹出位置'>
        <Space direction='vertical'>
          <>
            <Button
              onClick={() => {
                setVisible1(true)
              }}
            >
              底部弹出
            </Button>
            <Popup
              visible={visible1}
              onMaskClick={() => {
                setVisible1(false)
              }}
              bodyStyle={{ height: '40vh' }}
            >
              {mockContent}
            </Popup>
          </>
          <>
            <Button
              onClick={() => {
                setVisible2(true)
              }}
            >
              顶部弹出
            </Button>
            <Popup
              visible={visible2}
              onMaskClick={() => {
                setVisible2(false)
              }}
              position='top'
              bodyStyle={{ height: '40vh' }}
            >
              {mockContent}
            </Popup>
          </>
          <>
            <Button
              onClick={() => {
                setVisible3(true)
              }}
            >
              左侧弹出
            </Button>
            <Popup
              visible={visible3}
              onMaskClick={() => {
                setVisible3(false)
              }}
              position='left'
              bodyStyle={{ width: '60vw' }}
            >
              {mockContent}
            </Popup>
          </>
          <>
            <Button
              onClick={() => {
                setVisible4(true)
              }}
            >
              右侧弹出
            </Button>
            <Popup
              visible={visible4}
              onMaskClick={() => {
                setVisible4(false)
              }}
              position='right'
              bodyStyle={{ width: '60vw' }}
            >
              {mockContent}
            </Popup>
          </>
        </Space>
      </DemoBlock>

      <DemoBlock title='自定义样式'>
        <Space direction='vertical'>
          <>
            <Button
              onClick={() => {
                setVisible5(true)
              }}
            >
              圆角的弹出层
            </Button>
            <Popup
              visible={visible5}
              onMaskClick={() => {
                setVisible5(false)
              }}
              bodyStyle={{
                borderTopLeftRadius: '8px',
                borderTopRightRadius: '8px',
                minHeight: '40vh',
              }}
            >
              {mockContent}
            </Popup>
          </>
          <>
            <Button
              onClick={() => {
                setVisible7(true)
              }}
            >
              显示关闭按钮
            </Button>

            <Popup
              visible={visible7}
              showCloseButton
              onClose={() => {
                setVisible7(false)
              }}
            >
              {mockContentWithCloseIcon}
            </Popup>
          </>
          <>
            <Button
              onClick={() => {
                setVisibleCloseRight(true)
              }}
            >
              显示右侧弹出关闭按钮
            </Button>

            <Popup
              position='right'
              visible={visibleCloseRight}
              showCloseButton
              onClose={() => {
                setVisibleCloseRight(false)
              }}
            >
              {mockContentWithCloseIcon}
            </Popup>
          </>
          <>
            <Button
              onClick={() => {
                setVisible6(true)
              }}
            >
              内容超长滚动
            </Button>
            <Popup
              visible={visible6}
              onMaskClick={() => {
                setVisible6(false)
              }}
            >
              <div
                style={{ height: '40vh', overflowY: 'scroll', padding: '20px' }}
              >
                {mockLongContent}
              </div>
            </Popup>
          </>
        </Space>
      </DemoBlock>
    </>
  )
}

const mockLongContent = lorem.generateParagraphs(10)

const mockContent = (
  <div style={{ padding: 20 }}>{lorem.generateParagraphs(1)}</div>
)

const mockContentWithCloseIcon = (
  <div style={{ padding: '40px 20px 20px' }}>{lorem.generateParagraphs(1)}</div>
)
