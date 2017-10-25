// @flow
import React, { PureComponent } from 'react'
import * as d3 from 'd3'

export type Props = {
  xScale: Function,
  yScale: Function,
  wScale: Function,
  hScale: Function,
  position: 'top' | 'bottom' | 'left' | 'right',
  inset?: boolean,
  labeled?: boolean,
  ticked?: boolean,
  ticks?: number | Function,
  tickFormat?: string
}

const POSITIONS = {
  top: { direction: 'vertical', flow: 1 },
  bottom: { direction: 'vertical', flow: -1 },
  left: { direction: 'horizontal', flow: 1 },
  right: { direction: 'horizontal', flow: -1 }
}

const AXES = {
  vertical: {
    '1': d3.axisTop,
    '-1': d3.axisBottom
  },
  horizontal: {
    '1': d3.axisLeft,
    '-1': d3.axisRight
  }
}

class ChartAxis extends PureComponent<Props> {
  componentDidMount () { this.renderAxis() }

  componentDidUpdate () { this.renderAxis() }

  renderAxis () {
    const { xScale, yScale, wScale, hScale, position, inset, labeled, ticked, ticks, tickFormat } = this.props
    const { direction, flow } = POSITIONS[position]
    const node = this.refs.axis
    const axis = AXES[direction][inset ? flow * -1 : flow]()
      .tickFormat(tickFormat)

    switch (position) {
      case 'top':
      case 'bottom':
        axis.scale(xScale)
        axis.ticks(ticks || Math.min(wScale.domain()[1], wScale.range()[1] / 30))
        break
      case 'left':
      case 'right':
        axis.scale(yScale)
        axis.ticks(ticks || Math.min(hScale.domain()[1], hScale.range()[1] / 30))
        break
    }

    let transform
    switch (position) {
      case 'top':
        transform = `translate(0, ${yScale.range()[1]})`
        break
      case 'bottom':
        transform = `translate(0, ${yScale.range()[0]})`
        break
      case 'right':
        transform = `translate(${xScale.range()[1]}, 0)`
        break
      case 'left':
        transform = `translate(${xScale.range()[0]}, 0)`
        break
    }

    const g = d3.select(node)
      // .classed(styles.labeled, labeled)
      // .classed(styles.ticked, ticked)
      .attr('transform', transform)
      .call(axis)
    g.selectAll('.domain')
      .classed('stroke-foreground-30 sr-crispedges', true)
    g.selectAll('.tick line')
      .classed('stroke-foreground-30 sr-crispedges', true)
      .classed('dn', !ticked)
    g.selectAll('.tick text')
      .classed('fill-foreground-60', true)
      .classed('dn', !labeled)
  }

  render () {
    return <g className='f8' ref='axis' />
  }
}

ChartAxis.defaultProps = {
  xScale: () => 0,
  yScale: () => 0,
  wScale: () => 0,
  hScale: () => 0,
  position: 'right',
  inset: false,
  labeled: true,
  ticked: true,
  tickFormat: null
}

ChartAxis.displayName = 'ChartAxis'

export default ChartAxis
export { ChartAxis }
