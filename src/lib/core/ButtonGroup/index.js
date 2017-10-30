// @flow
import React from 'react'
import type { Node, Element } from 'react'

export type Props = {
  className: string,
  children: Node
}

const ButtonGroup = ({
  className,
  children
}: Props): Element<any> => (
  <div
    className={[
      className.match(/mh/) ? '' : 'mh1',
      className
    ].join(' ')}
  >
    {
      children.map((child, index) =>
        React.cloneElement(child, {key: index, className: 'mh0'})
      )
    }
  </div>
)

ButtonGroup.defaultProps = {
  className: '',
  children: []
}

ButtonGroup.displayName = 'ButtonGroup'

export default ButtonGroup
export { ButtonGroup }
