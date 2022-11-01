import React, { FC, useMemo, useRef, useState } from 'react'
import runes from 'runes'
import { mergeProps } from '../../utils/with-default-props'
import { NativeProps, withNativeProps } from '../../utils/native-props'
import { useResizeEffect } from '../../utils/use-resize-effect'
import { useIsomorphicLayoutEffect } from 'ahooks'
import {
  PropagationEvent,
  withStopPropagation,
} from '../../utils/with-stop-propagation'

const classPrefix = `adm-ellipsis`

export type EllipsisProps = {
  content: string
  direction?: 'start' | 'end' | 'middle'
  rows?: number
  expandText?: string
  collapseText?: string
  stopPropagationForActionButtons?: PropagationEvent[]
  onContentClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
} & NativeProps

const defaultProps = {
  direction: 'end',
  rows: 1,
  expandText: '',
  content: '',
  collapseText: '',
  stopPropagationForActionButtons: [],
  onContentClick: () => {},
}

type EllipsisedValue = {
  leading?: string
  tailing?: string
}

export const Ellipsis: FC<EllipsisProps> = p => {
  const props = mergeProps(defaultProps, p)
  const rootRef = useRef<HTMLDivElement>(null)

  const [ellipsised, setEllipsised] = useState<EllipsisedValue>({})
  const [expanded, setExpanded] = useState(false)
  const [exceeded, setExceeded] = useState(false)

  const chars = useMemo(() => runes(props.content), [props.content])
  function getSubString(start: number, end: number) {
    return chars.slice(start, end).join('')
  }

  function calcEllipsised() {
    const root = rootRef.current
    if (!root) return
    if (!root.offsetParent) return

    const originStyle = window.getComputedStyle(root)
    const container = document.createElement('div')
    const styleNames: string[] = Array.prototype.slice.apply(originStyle)
    styleNames.forEach(name => {
      container.style.setProperty(name, originStyle.getPropertyValue(name))
    })
    container.style.position = 'fixed'
    container.style.left = '999999px'
    container.style.top = '999999px'
    container.style.zIndex = '-1000'
    container.style.height = 'auto'
    container.style.minHeight = 'auto'
    container.style.maxHeight = 'auto'
    container.style.textOverflow = 'clip'
    container.style.whiteSpace = 'normal'
    container.style.webkitLineClamp = 'unset'
    container.style.display = 'block'

    const lineHeight = pxToNumber(originStyle.lineHeight)
    const maxHeight = Math.floor(
      lineHeight * (props.rows + 0.5) +
        pxToNumber(originStyle.paddingTop) +
        pxToNumber(originStyle.paddingBottom)
    )

    container.innerText = props.content
    document.body.appendChild(container)

    if (container.offsetHeight <= maxHeight) {
      setExceeded(false)
    } else {
      setExceeded(true)
      const end = props.content.length
      const actionText = expanded ? props.collapseText : props.expandText

      function check(left: number, right: number): EllipsisedValue {
        if (right - left <= 1) {
          if (props.direction === 'end') {
            return {
              leading: getSubString(0, left) + '...',
            }
          } else {
            return {
              tailing: '...' + getSubString(right, end),
            }
          }
        }
        const middle = Math.round((left + right) / 2)
        if (props.direction === 'end') {
          container.innerText = getSubString(0, middle) + '...' + actionText
        } else {
          container.innerText = actionText + '...' + getSubString(middle, end)
        }
        if (container.offsetHeight <= maxHeight) {
          if (props.direction === 'end') {
            return check(middle, right)
          } else {
            return check(left, middle)
          }
        } else {
          if (props.direction === 'end') {
            return check(left, middle)
          } else {
            return check(middle, right)
          }
        }
      }

      function checkMiddle(
        leftPart: [number, number],
        rightPart: [number, number]
      ): EllipsisedValue {
        if (
          leftPart[1] - leftPart[0] <= 1 &&
          rightPart[1] - rightPart[0] <= 1
        ) {
          return {
            leading: getSubString(0, leftPart[0]) + '...',
            tailing: '...' + getSubString(rightPart[1], end),
          }
        }
        const leftPartMiddle = Math.floor((leftPart[0] + leftPart[1]) / 2)
        const rightPartMiddle = Math.ceil((rightPart[0] + rightPart[1]) / 2)
        container.innerText =
          getSubString(0, leftPartMiddle) +
          '...' +
          actionText +
          '...' +
          getSubString(rightPartMiddle, end)
        if (container.offsetHeight <= maxHeight) {
          return checkMiddle(
            [leftPartMiddle, leftPart[1]],
            [rightPart[0], rightPartMiddle]
          )
        } else {
          return checkMiddle(
            [leftPart[0], leftPartMiddle],
            [rightPartMiddle, rightPart[1]]
          )
        }
      }

      const middle = Math.floor((0 + end) / 2)
      const ellipsised =
        props.direction === 'middle'
          ? checkMiddle([0, middle], [middle, end])
          : check(0, end)
      setEllipsised(ellipsised)
    }
    document.body.removeChild(container)
  }

  useResizeEffect(calcEllipsised, rootRef)
  useIsomorphicLayoutEffect(() => {
    calcEllipsised()
  }, [
    props.content,
    props.direction,
    props.rows,
    props.expandText,
    props.collapseText,
  ])

  const expandActionElement =
    exceeded && props.expandText
      ? withStopPropagation(
          props.stopPropagationForActionButtons,
          <a
            onClick={() => {
              setExpanded(true)
            }}
          >
            {props.expandText}
          </a>
        )
      : null

  const collapseActionElement =
    exceeded && props.expandText
      ? withStopPropagation(
          props.stopPropagationForActionButtons,
          <a
            onClick={() => {
              setExpanded(false)
            }}
          >
            {props.collapseText}
          </a>
        )
      : null

  const renderContent = () => {
    if (!exceeded) {
      return props.content
    }
    if (expanded) {
      return (
        <>
          {props.content}
          {collapseActionElement}
        </>
      )
    } else {
      return (
        <>
          {ellipsised.leading}
          {expandActionElement}
          {ellipsised.tailing}
        </>
      )
    }
  }

  return withNativeProps(
    props,
    <div
      ref={rootRef}
      className={classPrefix}
      onClick={e => {
        if (e.target === e.currentTarget) {
          props.onContentClick(e)
        }
      }}
    >
      {renderContent()}
    </div>
  )
}

function pxToNumber(value: string | null): number {
  if (!value) return 0
  const match = value.match(/^\d*(\.\d*)?/)
  return match ? Number(match[0]) : 0
}
