// @flow
import React from 'react'
import type { Node, Element } from 'react'

export type Props = {
  children: Node,
  className: string,
  path: string
}

const Icon = ({ children, className, path, ...props }: Props): Element<any> => (
  <svg
    className={[
      'dib',
      className
    ].join(' ')}
    style={{width: '0.75em'}}
    viewBox='0 0 24 24'
    {...props}
  >
    <path d={path} />
  </svg>
)

Icon.defaultProps = {
  className: ''
}

Icon.displayName = 'Icon'

export default Icon
export { Icon }
