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
      'bg-black-50 white-90',
      primary ? 'bg-blue' : '',
      disabled ? 'white-50 o-50' : '',
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
