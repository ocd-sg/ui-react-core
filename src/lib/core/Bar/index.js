// @flow
import React from 'react'
import type { Element, Node } from 'react'

export type Props = {
  children: Node,
  className: string,
  size: 'small' | 'normal' | 'large'
}

const sizes = {
  small: 'h1',
  normal: 'h2',
  large: 'h3'
}

const Bar = ({
  children,
  className,
  size
}: Props): Element<any> => (
  <div
    className={[
      'bg-foreground-30',
      sizes[size],
      className
    ].join(' ')}
  >
    {children}
  </div>
)

Bar.defaultProps = {
  className: '',
  size: 'normal'
}

Bar.displayName = 'Bar'

export default Bar
export { Bar }
