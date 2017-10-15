// @flow
import type { Node } from 'react'

export type Props = {
  children: ?Node
}

const Wrapper = ({ children }) => children

Wrapper.defaultProps = {
  children: null
}

Wrapper.displayName = 'Wrapper'

export default Wrapper
export { Wrapper }
