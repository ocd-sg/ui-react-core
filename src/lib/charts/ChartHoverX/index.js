// @flow
import React, { PureComponent } from 'react'

export type Props = {
  width: number,
  height: number,
  xScale: Function,
  yScale: Function,
  data: Array<number | Object>,
  onHover: Function
}

type State = {
  hovered: boolean
}

class ChartHoverX extends PureComponent<Props, State> {
  state = {
    hovered: false
  }

  render () {
    const { width, height, xScale, yScale } = this.props
    const transform = `translate(${xScale.range()[0]}, ${yScale.range()[1]})`

    return (
      <g className='o-0' transform={transform}>
        <rect
          width={width}
          height={height}
          onMouseEnter={this.handleMouseEnter}
          onMouseLeave={this.handleMouseLeave}
          onMouseMove={this.handleMouseMove}
        />
      </g>
    )
  }

  handleMouseEnter = () => this.setState({hovered: true})

  handleMouseLeave = () => {
    const { onHover } = this.props
    this.setState({hovered: false})
    onHover(null)
  }

  handleMouseMove = (evt) => {
    const { data, xScale, onHover } = this.props
    const { hovered } = this.state

    if (!hovered) return onHover(null)

    const dimensions = evt.target.getBoundingClientRect()
    const x = xScale.invert(evt.pageX - dimensions.left + xScale.range()[0])

    const _data = typeof (data[0]) === 'number'
      ? data.map((y, x) => ({x, y}))
      : data
    const nearest = _data
      .slice().reverse()
      .filter((d) => +d.x < +x)[0]

    return onHover(nearest)
  }
}

ChartHoverX.defaultProps = {
  onHover: () => {}
}

ChartHoverX.propTypes = {
}

export default ChartHoverX
export { ChartHoverX }
