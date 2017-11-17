// @flow
import React from 'react'
import type { Element } from 'react'

export type Props = {
  className: string,
  icon: ?Function,
  label: string,
  primary: boolean,
  disabled: boolean,
  onClick: Function
}

const noop = () => {}

const Button = ({
  className,
  icon,
  label,
  primary,
  disabled,
  onClick
}: Props): Element<any> => (
  <button
    className={[
      'pv1 ph2 bn outline-0 br0',
      'text-normal-100 bg-foreground-60',
      'ttu f7 lh-solid',
      primary ? 'bg-primary-100' : '',
      disabled ? 'text-normal-90 o-50' : '',
      className.match(/mh/) ? '' : 'mh1',
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
  onClick: () => {}
}

Button.displayName = 'Button'

export default Button
export { Button }
