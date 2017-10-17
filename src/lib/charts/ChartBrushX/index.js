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
    const domains = {
      x: xScale.domain(),
      y: yScale.domain()
    }
    const offset = xScale.bandwidth ? xScale.bandwidth() : 0
    const start = [xScale(domains.x[0]), yScale(domains.y[domains.y.length - 1])]
    const end = [xScale(domains.x[domains.x.length - 1]) + offset, yScale(domains.y[0])]

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
    return this.props.xScale.bandwidth
      ? this.handleBrushOrdinal()
      : this.handleBrushLinear()
  }

  // FIXME: we actually don’t need `data` to do this, we should be able to resolve it from the scales alone
  handleBrushLinear = () => {
    const { data, xScale } = this.props
    const x = data.map(({ x }) => x).concat(xScale.domain()[1])
    const extent = d3.event.selection.map(xScale.invert)
    const selection = extent.map((d) =>
      x.reduce((a, b) =>
        Math.abs(a - d) < Math.abs(b - d) ? a : b
      )
    )

    d3.select(this.refs.brush).call(d3.event.target.move, selection.map(xScale))
  }

  handleBrushOrdinal = () => {
    const { xScale } = this.props
    const bandwidth = xScale.bandwidth()
    const extent = d3.event.selection.map((x) => x - bandwidth / 2)
    const selection = xScale.domain().filter((x) => xScale(x) > extent[0] && xScale(x) < extent[1])

    d3.select(this.refs.brush).call(
      d3.event.target.move,
      selection.length
        ? [
          xScale(selection[0]),
          xScale(selection[selection.length - 1]) + bandwidth
        ]
        : []
    )
  }

  handleBrushEnd = () => {
    const { xScale, onChange } = this.props
    if (!d3.event.sourceEvent) return
    if (!d3.event.selection) return onChange(null)
    return onChange(
      xScale.bandwidth
        ? xScale.domain().filter((x) =>
          xScale(x) > d3.event.selection[0] - xScale.bandwidth() / 2 &&
          xScale(x) < d3.event.selection[1] - xScale.bandwidth() / 2
        )
        : d3.event.selection.map(xScale.invert)
    )
  }
}

ChartBrushX.displayName = 'ChartBrushX'

export default ChartBrushX
export { ChartBrushX }
