// @flow
import React from 'react'
import type { Element } from 'react'

import Text from '../Text'

export type Props = {
  className: string,
  label: string,
  primary: boolean,
  disabled: boolean,
  size: 'small' | 'normal' | 'large',
  _margin: boolean,
  onClick: Function
}

const noop = () => {}

const sizes = {
  button: {
    small: 'h1',
    normal: 'h2',
    large: 'h2'
  },
  text: {
    small: 'extra-small',
    normal: 'small',
    large: 'normal'
  }
}

const Button = ({
  className,
  label,
  primary,
  disabled,
  size,
  _margin,
  onClick
}: Props): Element<any> => (
  <button
    className={[
      'pv0 ph2 bn outline-0 br0 text-normal-100',
      sizes.button[size],
      primary ? 'bg-primary-100' : 'bg-foreground-60',
      disabled ? 'o-50' : '',
      _margin ? 'mh2' : '',
      className
    ].join(' ')}
    onClick={disabled ? noop : onClick}
  >
    <Text size={sizes.text[size]} transform='uppercase'>{label}</Text>
  </button>
)

Button.defaultProps = {
  className: '',
  primary: false,
  disabled: false,
  size: 'normal',
  _margin: true,
  onClick: () => {}
}

Button.displayName = 'Button'

export default Button
export { Button }
