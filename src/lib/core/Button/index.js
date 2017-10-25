// @flow
import React from 'react'
import type { Element } from 'react'

export type Props = {
  className: string,
  icon: ?Function,
  label: string,
  primary: boolean,
  disabled: boolean,
  _margins: boolean,
  onClick: Function
}

const noop = () => {}

const Button = ({
  className,
  icon,
  label,
  primary,
  disabled,
  _margins,
  onClick
}: Props): Element<any> => (
  <button
    className={[
      'pv1 ph2 bn outline-0',
      'ttu f7 lh-solid',
      'text-normal-100 bg-foreground-60',
      primary ? 'bg-primary-100' : '',
      disabled ? 'text-normal-90 o-50' : '',
      _margins ? ' mh1' : '',
      className
    ].join(' ')}
    onClick={disabled ? noop : onClick}>
    {
      icon
        ? icon()
        : label
    }
  </button>
)

Button.defaultProps = {
  className: '',
  onClick: () => {},
  primary: false,
  disabled: false,
  _margins: true
}

Button.displayName = 'Button'

export default Button
export { Button }
