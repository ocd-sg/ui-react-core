// @flow
import React, { PureComponent } from 'react'
import type { Node } from 'react'
import * as d3 from 'd3'

export type Props = {
  children?: Node,
  fit: Array<Array<number>>,
  zoomExtent: Array<number>,
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
    const { fit, zoomExtent, width, height, svg } = this.props
    const _svg = d3.select(svg)
    const _wrapper = d3.select(this.refs.wrapper)
    this._wrapper = _wrapper

    const zoom = d3.zoom()
      .scaleExtent(zoomExtent)
      .on('zoom', this.handleTransform)
    _svg.call(zoom)

    if (fit) {
      const [[x0, y0], [x1, y1]] = fit
      const w = x1 - x0
      const h = y1 - y0
      const mx = x0 + w / 2
      const my = y0 + h / 2
      const scale = 0.95 / Math.max(w / width, h / height)
      const translate = [width / 2 - scale * mx, height / 2 - scale * my]

      _svg
        .call(zoom.transform, d3.zoomIdentity.translate(...translate).scale(scale))
    }
  }

  render () {
    const { children, width, height, xScale, yScale, wScale, hScale, svg } = this.props
    return (
      <g ref='wrapper'>
        {
          React.Children.map(children, (child) => (
            child ? React.cloneElement(child, { width, height, xScale, yScale, wScale, hScale, svg, ...child.props }) : null
          ))
        }
      </g>
    )
  }

  handleTransform = () => this._wrapper.attr('transform', d3.event.transform)
}

ChartPanZoom.defaultProps = {
  fit: null,
  zoomExtent: [1 / 2, 4],
  children: null
}

ChartPanZoom.displayName = 'ChartPanZoom'

export default ChartPanZoom
export { ChartPanZoom }
