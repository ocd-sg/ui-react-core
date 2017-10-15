// @flow
import { PureComponent } from 'react'

export type Props = {
  map: Object,
  onChange: Function
}

class Viewport extends PureComponent<Props> {
  componentDidMount () {
    const { map } = this.props
    map.on('moveend', this.handleChange)
  }

  componentWillUnmount () {
    const { map } = this.props
    map.off('moveend', this.handleChange)
  }

  render () {
    return null
  }

  handleChange = (): Array<Array<number>> => {
    const { map, onChange } = this.props
    const bounds = map.getBounds()
    onChange(bounds.toArray())
  }
}

Viewport.defaultProps = {
  onChange: () => {}
}

Viewport.displayName = 'Viewport'

export default Viewport
export { Viewport }
