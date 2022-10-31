import React, { useState } from 'react'
import { Button, WaterMark } from 'vigor-design-mobile'

import './demo1.less'

const textProps = {
  content: 'vigor design mobile ',
}

const imageProps = {
  image:
    'https://user-images.githubusercontent.com/48983788/199143833-07d9c5d9-6ddf-4d54-b6d2-8530fea2dec3.svg',
  imageWidth: 115,
  imageHeight: 36,
  width: 140,
  height: 80,
}

export default () => {
  const [props, setProps] = useState<{ [key: string]: any }>(textProps)

  return (
    <div className='water-mark-overlay'>
      <Button onClick={() => setProps(textProps)}>普通水印</Button>
      <br />
      <Button onClick={() => setProps(imageProps)}>图片水印</Button>
      <WaterMark {...props} />
    </div>
  )
}
