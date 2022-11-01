import React from 'react'
import { Grid } from 'vigor-design-mobile'
import { DemoBlock } from 'demos'

import styles from './demo1.less'

export default () => {
  return (
    <>
      <DemoBlock title='基础用法'>
        <Grid columns={3} gap={8}>
          <Grid.Item>
            <div className={styles['grid-demo-item-block']}>A</div>
          </Grid.Item>
          <Grid.Item>
            <div className={styles['grid-demo-item-block']}>B</div>
          </Grid.Item>
          <Grid.Item>
            <div className={styles['grid-demo-item-block']}>C</div>
          </Grid.Item>
          <Grid.Item>
            <div className={styles['grid-demo-item-block']}>D</div>
          </Grid.Item>
          <Grid.Item>
            <div className={styles['grid-demo-item-block']}>E</div>
          </Grid.Item>
        </Grid>
      </DemoBlock>

      <DemoBlock title='控制格子的跨度'>
        <Grid columns={3} gap={8}>
          <Grid.Item>
            <div className={styles['grid-demo-item-block']}>A</div>
          </Grid.Item>
          <Grid.Item span={2}>
            <div className={styles['grid-demo-item-block']}>B</div>
          </Grid.Item>
          <Grid.Item span={2}>
            <div className={styles['grid-demo-item-block']}>C</div>
          </Grid.Item>
          <Grid.Item>
            <div className={styles['grid-demo-item-block']}>D</div>
          </Grid.Item>
          <Grid.Item span={3}>
            <div className={styles['grid-demo-item-block']}>E</div>
          </Grid.Item>
        </Grid>
      </DemoBlock>
    </>
  )
}
