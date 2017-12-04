// @flow
import React from 'react'
import type { Node, Element } from 'react'

export type Props = {
  children: Node,
  className: string,
  size: 'extra-small' | 'small' | 'normal' | 'large' | 'extra-large',
  weight: 'normal' | 'bold',
  transform: 'lowercase' | 'normal' | 'uppercase' | 'capitalize'
}

const sizes = {
  'extra-small': 'f8',
  small: 'f7',
  normal: 'f6',
  large: 'f5',
  'extra-large': 'f4'
}

const weights = {
  normal: '',
  bold: 'b'
}

const transforms = {
  lowercase: 'ttl',
  normal: '',
  uppercase: 'ttu',
  capitalize: 'ttc'
}

const Text = ({
  children,
  className,
  size,
  weight,
  transform
}: Props): Element<any> => (
  <span
    className={[
      'lh-solid',
      sizes[size],
      weights[weight],
      transforms[transform],
      className
    ].join(' ')}
  >
    {children}
  </span>
)

Text.defaultProps = {
  children: [],
  className: '',
  size: 'normal',
  bold: 'normal',
  transform: 'normal'
}

Text.displayName = 'Text'

export default Text
export { Text }
