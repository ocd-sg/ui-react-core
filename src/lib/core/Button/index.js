// @flow
import React from 'react'
import type { Element } from 'react'

import Text from '../Text'

export type Props = {
  className: string,
  label: string,
  primary: boolean,
  secondary: boolean,
  disabled: boolean,
  size: 'small' | 'normal' | 'large',
  onClick: Function
}

const noop = () => {}

const sizes = {
  button: {
    small: 'ph2 pv1',
    normal: 'h2 pv0 ph2',
    large: 'h2 pv0 ph3'
  },
  text: {
    small: 'small',
    normal: 'small',
    large: 'normal'
  }
}

const Button = ({
  className,
  label,
  primary,
  secondary,
  disabled,
  size,
  onClick,
  ...props
}: Props): Element<any> => (
  <button
    {...props}
    className={[
      'bn outline-0',
      sizes.button[size],
      primary || secondary ? 'text-reversed-100' : 'text-normal-100',
      primary ? 'bg-primary-100' : secondary ? 'bg-secondary-100' : 'bg-background-50',
      disabled ? 'o-20' : '',
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
  onClick: () => {}
}

Button.displayName = 'Button'

export default Button
export { Button }
