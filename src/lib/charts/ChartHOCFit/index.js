// @flow
import React from 'react'
import type { Node } from 'react'

export type Props = {
  children?: Node,
  fit: Array<Array<number>>,
  width: number,
  height: number,
  xScale: Function,
  yScale: Function,
  wScale: Function,
  hScale: Function,
  svg: Node
}

const getTransform = ({ fit, width, height }) => {
  const [[x0, y0], [x1, y1]] = fit
  const w = x1 - x0
  const h = y1 - y0
  const mx = x0 + w / 2
  const my = y0 + h / 2
  const scale = 0.95 / Math.max(w / width, h / height)
  const translate = [width / 2 - scale * mx, height / 2 - scale * my]

  return { scale, translate }
}

const ChartHOCFit = ({
  children,
  width,
  height,
  xScale,
  yScale,
  wScale,
  hScale,
  svg,
  fit
}: Props) => {
  const { scale, translate } = getTransform({ fit, width, height })
  return (
    <g transform={`translate(${translate.join(',')}) scale(${scale})`}>
      {
        React.Children.map(children, (child) => (
          child ? React.cloneElement(child, { width, height, xScale, yScale, wScale, hScale, svg, ...child.props }) : null
        ))
      }
    </g>
  )
}

ChartHOCFit.defaultProps = {
  fit: [1, 1],
  children: null
}

ChartHOCFit.displayName = 'ChartHOCFit'

export default ChartHOCFit
export { ChartHOCFit }
