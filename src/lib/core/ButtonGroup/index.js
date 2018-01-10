// @flow
import React from 'react'
import type { Node, Element } from 'react'

export type Props = {
  children: Node,
  className: string
}

const ButtonGroup = ({
  children,
  className
}: Props): Element<any> => (
  <div className={className}>
    {children}
  </div>
)

ButtonGroup.defaultProps = {
  children: [],
  className: ''
}

ButtonGroup.displayName = 'ButtonGroup'

export default ButtonGroup
export { ButtonGroup }
