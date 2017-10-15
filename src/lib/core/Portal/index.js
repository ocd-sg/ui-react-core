// @flow
import { PureComponent } from 'react'
import type { Node } from 'react'
import { createPortal } from 'react-dom'

export type Props = {
  children?: Node
}

type State = {
  mounted: boolean
}

class Portal extends PureComponent<Props, State> {
  state = {
    mounted: false
  }

  target: ?Object = null

  componentDidMount () {
    this.setState({mounted: true})
  }

  componentWillUnmount () {
    if (this.target) {
      this.target.remove()
    }
  }

  getTarget () {
    if (!this.target) {
      this.target = document.createElement('div')
      document.body.appendChild(this.target)
    }
    return this.target
  }

  render () {
    const { mounted } = this.state
    const { children } = this.props
    return mounted
      ? createPortal(children, this.getTarget())
      : null
  }
}

Portal.defaultProps = {
  children: null
}

export default Portal
export { Portal }
