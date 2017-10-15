// @flow
// TODO: add debounce to window resize listener
import React, { PureComponent } from 'react'
import type { Node } from 'react'
import * as d3 from 'd3'

export type Props = {
  className: string,
  children?: Node,
  padding: number | Array<number>,
  xDomain: Array<number> | Array<Date> | Array<string>,
  yDomain: Array<number> | Array<Date> | Array<string>,
  xScaleType: 'linear' | 'ordinal',
  yScaleType: 'linear' | 'ordinal'
}

type State = {
  width: number,
  height: number
}

// dataType, scaleType
const SCALES = {
  date: {
    linear: d3.scaleTime,
    ordinal: d3.scaleTime
  },
  string: {
    linear: d3.scaleBand,
    ordinal: d3.scaleBand
  },
  number: {
    linear: d3.scaleLinear,
    ordinal: d3.scaleBand
  }
}

class ChartFrame extends PureComponent<Props, State> {
  state = {
    width: 0,
    height: 0
  }

  componentDidMount () {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)
    this.refs.frame.addEventListener('resize', this.updateDimensions)
  }

  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions)
    this.refs.frame.removeEventListener('resize', this.updateDimensions)
  }

  getDataTypes () {
    const { xDomain, yDomain } = this.props
    const xDataType = xDomain[0] instanceof Date ? 'date'
      : typeof xDomain[0] === 'string'
        ? 'string'
        : 'number'
    const yDataType = yDomain[0] instanceof Date ? 'date'
      : typeof yDomain[0] === 'string'
        ? 'string'
        : 'number'
    return { xDataType, yDataType }
  }

  getPaddings () {
    const { padding: _padding } = this.props
    const padding = [].concat(_padding)
    return padding.length === 1
      ? Array(4).fill(padding[0])
      : padding.length === 2
        ? [padding[0], padding[1], padding[0], padding[1]]
        : padding.length === 3
          ? padding.concat(padding[1])
          : padding
  }

  render () {
    const { width, height } = this.state
    const { className, children: _children, xDomain, yDomain, xScaleType, yScaleType } = this.props
    const { xDataType, yDataType } = this.getDataTypes()
    const [ paddingTop, paddingRight, paddingBottom, paddingLeft ] = this.getPaddings()

    const xScale = SCALES[xDataType][xScaleType]()
      .domain(xDomain)
      .range([paddingLeft, width - paddingRight])
    const yScale = SCALES[yDataType][yScaleType]()
      .domain(yDomain)
      .range([height - paddingBottom, paddingTop])
    const wScale = SCALES[xDataType][xScaleType]()
      .domain(xDomain)
      .range([0, width - paddingLeft - paddingRight])
    const hScale = SCALES[yDataType][yScaleType]()
      .domain(yDomain)
      .range([0, height - paddingTop - paddingBottom])

    const children = React.Children.map(_children, (child) => (
      React.cloneElement(child, {
        width: width - paddingLeft - paddingRight,
        height: height - paddingTop - paddingBottom,
        xScale,
        yScale,
        wScale,
        hScale
      })
    ))

    return (
      <svg
        xmlns='http://www.w3.org/2000/svg'
        ref='frame'
        className={[
          'w-100 h-100 db',
          className
        ].join(' ')}
      >
        {width && height ? children : null}
      </svg>
    )
  }

  updateDimensions = () => {
    const { frame } = this.refs
    setTimeout(() => {
      this.setState({
        width: frame.clientWidth,
        height: frame.clientHeight
      })
    }, 0)
  }
}

ChartFrame.defaultProps = {
  className: '',
  padding: 0,
  xDomain: [0, 1],
  yDomain: [0, 1],
  xScaleType: 'linear',
  yScaleType: 'linear'
}

ChartFrame.displayName = 'ChartFrame'

export default ChartFrame
export { ChartFrame }
