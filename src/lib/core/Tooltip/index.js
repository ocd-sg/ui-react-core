// @flow
import React, { PureComponent } from 'react'
import type { Node } from 'react'

import Portal from '../Portal'

export type Props = {
  children: ?Node,
  opened: boolean
}

type State = {
  x: number,
  y: number
}

class Tooltip extends PureComponent<Props, State> {
  state = {
    x: 0,
    y: 0
  }

  componentDidMount () {
    window.addEventListener('mousemove', this.handleMouseMove)
  }

  componentWillUnmount () {
    window.removeEventListener('mousemove', this.handleMouseMove)
  }

  render () {
    const { children, opened } = this.props
    const { x, y } = this.state
    const width = window.innerWidth
    const height = window.innerHeight
    const vertical = y > height / 2 ? 'top' : 'bottom'
    const horizontal = x > width / 2 ? 'left' : 'right'

    return (
      <Portal>
        <div
          className={[
            'fixed top-0 left-0 h0 w0',
            'z-999',
            opened ? 'db' : 'dn'
          ].join(' ')}
          style={{transform: `translate(${x}px, ${y}px)`}}
        >
          <div
            className={[
              'absolute pa1 shadow-1',
              'bg-background-90 foreground-80',
              vertical === 'top' ? 'bottom-1' : 'top-1',
              horizontal === 'left' ? 'right-1' : 'left-1'
            ].join(' ')}
          >
            {children}
          </div>
        </div>
      </Portal>
    )
  }

  handleMouseMove = (evt) => {
    const {opened} = this.props
    const {pageX: x, pageY: y} = evt

    if (!opened) {
      return null
    }

    this.setState({x, y})
  }
}

Tooltip.defaultProps = {
  opened: false
}

export default Tooltip
export { Tooltip }
