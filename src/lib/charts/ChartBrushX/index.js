// @flow
import React, { PureComponent } from 'react'
import * as d3 from 'd3'

export type Props = {
  data: Array<{x: number | Date, y: number}>,
  xScale: Function,
  yScale: Function,
  onChange: Function
}

class ChartBrushX extends PureComponent<Props> {
  static defaultProps = {
    data: [],
    xScale: () => 0,
    yScale: () => 0,
    onChange: () => {}
  }

  componentDidMount () {
    this.forceUpdate()
  }

  componentDidUpdate () {
    const { xScale, yScale } = this.props
    const start = [xScale(xScale.domain()[0]), yScale(yScale.domain()[1])]
    const end = [xScale(xScale.domain()[1]), yScale(yScale.domain()[0])]

    d3.select(this.refs.brush)
      .call(d3.brushX()
        .extent([start, end])
        .on('brush', this.handleBrush)
        .on('end', this.handleBrushEnd)
      )
  }

  render () {
    return (
      <g ref='brush' />
    )
  }

  handleBrush = () => {
    if (d3.event.sourceEvent.type === 'brush') return
    const { data, xScale } = this.props
    const x = data.map(({ x }) => x).concat(xScale.domain()[1])
    const d0 = d3.event.selection.map(xScale.invert)
    const d1 = d0.map((d) =>
      x.reduce((a, b) =>
        Math.abs(a - d) < Math.abs(b - d) ? a : b
      )
    )

    d3.select(this.refs.brush).call(d3.event.target.move, d1.map(xScale))
  }

  handleBrushEnd = () => {
    const { xScale, onChange } = this.props
    if (!d3.event.sourceEvent) return
    if (!d3.event.selection) return onChange(null)
    const d0 = d3.event.selection.map(xScale.invert)

    return onChange(d0)
  }
}

ChartBrushX.displayName = 'ChartBrushX'

export default ChartBrushX
export { ChartBrushX }
