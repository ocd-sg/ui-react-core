// @flow
import React from 'react'
import type { Node, Element } from 'react'

export type Props = {
  children: Node,
  className: string,
  _margin: boolean
}

const ButtonGroup = ({
  children,
  className,
  _margin
}: Props): Element<any> => (
  <div
    className={[
      'h2',
      _margin ? 'mh2' : '',
      className
    ].join(' ')}
  >
    {
      children.map((child, index) =>
        React.cloneElement(child, {key: index, _margin: false})
      )
    }
  </div>
)

ButtonGroup.defaultProps = {
  children: [],
  className: '',
  _margin: true
}

ButtonGroup.displayName = 'ButtonGroup'

export default ButtonGroup
export { ButtonGroup }
