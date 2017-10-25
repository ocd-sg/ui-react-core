// @flow
import React from 'react'
import type { Node, Element } from 'react'

export type Props = {
  className: string,
  children: Node,
  _margins: boolean
}

const ButtonGroup = ({
  className,
  children,
  _margins
}: Props): Element<any> => (
  <div
    className={[
      _margins ? 'mh1' : '',
      className
    ].join(' ')}
  >
    {
      children.map((child, index) =>
        React.cloneElement(child, {key: index, _margins: false})
      )
    }
  </div>
)

ButtonGroup.defaultProps = {
  className: '',
  children: [],
  _margins: true
}

ButtonGroup.displayName = 'ButtonGroup'

export default ButtonGroup
export { ButtonGroup }
