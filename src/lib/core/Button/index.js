// @flow
import React from 'react'
import type { Element } from 'react'

export type Props = {
  className: string,
  icon: ?Function,
  label: string,
  primary: boolean,
  disabled: boolean,
  _margin: boolean,
  onClick: Function
}

const noop = () => {}

const Button = ({
  className,
  icon,
  label,
  primary,
  disabled,
  _margin,
  onClick
}: Props): Element<any> => (
  <button
    className={[
      'h2 ph2 bn outline-0 br0',
      'text-normal-100',
      'ttu f7 lh-solid',
      primary ? 'bg-primary-100' : 'bg-foreground-60',
      disabled ? 'o-50' : '',
      _margin ? 'mh2' : '',
      className
    ].join(' ')}
    onClick={disabled ? noop : onClick}
  >
    {
      icon
        ? icon()
        : label
    }
  </button>
)

Button.defaultProps = {
  className: '',
  primary: false,
  disabled: false,
  _margin: true,
  onClick: () => {}
}

Button.displayName = 'Button'

export default Button
export { Button }
