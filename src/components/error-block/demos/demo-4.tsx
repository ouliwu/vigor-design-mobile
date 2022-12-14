import React from 'react'
import { createErrorBlock, Space } from 'vigor-design-mobile'
import { DemoBlock } from 'demos'
import { FileWrongOutline, SearchOutline } from 'antd-mobile-icons'
import styles from './demo-4.less'

const ErrorBlock = createErrorBlock({
  'default': <FileWrongOutline className={styles.myErrorBlockIcon} />,
  'empty': <SearchOutline className={styles.myErrorBlockIcon} />,
})

export default () => {
  return (
    <>
      <DemoBlock title='εη§ηΆζ'>
        <Space block direction='vertical' style={{ '--gap': '16px' }}>
          <ErrorBlock status='default' />
          <ErrorBlock status='empty' />
        </Space>
      </DemoBlock>
    </>
  )
}
