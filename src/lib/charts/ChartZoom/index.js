// @flow
import React, { PureComponent } from 'react'
import type { Node } from 'react'
import * as d3 from 'd3'

export type Props = {
  children?: Node,
  pan: boolean,
  zoom: boolean,
  width: number,
  height: number,
  xScale: Function,
  yScale: Function,
  wScale: Function,
  hScale: Function,
  svg: Node
}

class ChartPanZoom extends PureComponent<Props> {
  componentDidMount () {
    const { svg } = this.props
    const _svg = d3.select(svg)
    const _wrapper = d3.select(this.refs.wrapper)
    this._wrapper = _wrapper

    const zoom = d3.zoom()
      .scaleExtent([1 / 2, 4])
      .on('zoom', this.handleTransform)

    _svg.call(zoom)
  }

  render () {
    const { children, width, height, xScale, yScale, wScale, hScale, svg } = this.props
    return (
      <g ref='wrapper'>
        {
          React.Children.map(children, (child) => (
            child ? React.cloneElement(child, { width, height, xScale, yScale, wScale, hScale, svg }) : null
          ))
        }
      </g>
    )
  }

  handleTransform = () => this._wrapper.attr('transform', d3.event.transform)
}

ChartPanZoom.defaultProps = {
  pan: false,
  zoom: false,
  children: null
}

ChartPanZoom.displayName = 'ChartPanZoom'

export default ChartPanZoom
export { ChartPanZoom }
