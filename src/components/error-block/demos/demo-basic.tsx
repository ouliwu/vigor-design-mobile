import React from 'react'
import { ErrorBlock, Space } from 'vigor-design-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='εη§ηΆζ'>
        <Space block direction='vertical' style={{ '--gap': '16px' }}>
          <ErrorBlock status='default' />
          <ErrorBlock status='disconnected' />
          <ErrorBlock status='empty' />
          <ErrorBlock status='busy' />
        </Space>
      </DemoBlock>
    </>
  )
}
