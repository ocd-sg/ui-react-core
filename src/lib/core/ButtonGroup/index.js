// @flow
import React from 'react'
import type { Node, Element } from 'react'

export type Props = {
  className: string,
  children?: Node
}

const ButtonGroup = ({
  className,
  children
}: Props): Element<any> => (
  <div
    className={[
      'mh1',
      className
    ].join(' ')}
  >
    {
      children.map((child) =>
        React.cloneElement(child, {_margins: false})
      )
    }
  </div>
)

ButtonGroup.defaultProps = {
  className: '',
  children: null
}

ButtonGroup.displayName = 'ButtonGroup'

export default ButtonGroup
export { ButtonGroup }
