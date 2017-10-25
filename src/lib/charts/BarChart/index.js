// @flow
import React from 'react'
import type { Element } from 'react'

export type Props = {
  className: string,
  xScale: Function,
  yScale: Function,
  wScale: Function,
  hScale: Function,
  data: Array<number | Object>,
  interval?: number,
  divisions?: number,
  primary?: boolean
}

const BarChart = ({ className, data: _data, xScale, yScale, wScale, hScale, interval, divisions, primary }: Props): Element<any> => {
  const n = divisions || _data.length
  const width = xScale.bandwidth
    ? xScale.bandwidth()
    : interval
      ? wScale(interval)
      : wScale.range()[1] / n
  const data = _data
    .map((d, i) => {
      if (typeof d === 'number') return {x: i, y: d}
      return d
    })

  return (
    <g className={[
      className
    ].join(' ')}
    >
      {
        data.map(({ x, y }, i) => (
          <g key={i} transform={`translate(${xScale(x) + 1} ${yScale(y)})`}>
            <rect
              className='fill-foreground-90 stroke-transparent sr-crispedges'
              width={width - 1}
              height={hScale(y)}
            />
            <line x1={0} y1={0} x2={width - 1} y2={0} />
          </g>
        ))
      }
    </g>
  )
}

BarChart.defaultProps = {
  className: '',
  xScale: () => 0,
  yScale: () => 0,
  wScale: () => 0,
  hScale: () => 0,
  data: [],
  primary: false
}

BarChart.displayName = 'BarChart'

export default BarChart
export { BarChart }
