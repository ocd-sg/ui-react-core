// @flow
import React from 'react'
import type { Element, Node } from 'react'

export type Props = {
  children: Node,
  className: string,
  size: 'small' | 'normal' | 'large' | 'auto'
}

const sizes = {
  small: 'h1',
  normal: 'h2',
  large: 'h3',
  auto: ''
}

const BarLeft = ({
  children,
  className
}: {
  children: Node,
  className: string
}) => (
  <div className='flex flex-none items-center order-1'>{children}</div>
)

const BarRight = ({
  children,
  className
}: {
  children: Node,
  className: string
}) => (
  <div className='flex flex-none items-center order-3'>{children}</div>
)

const Bar = ({
  children,
  className,
  size,
  ...props
}: Props): Element<any> => (
  <div
    {...props}
    className={[
      'flex flex-row',
      className,
      sizes[size]
    ].join(' ')}
  >
    {children}
    <div className='flex-auto order-2' />
  </div>
)

Bar.defaultProps = {
  className: '',
  size: 'auto'
}

Bar.displayName = 'Bar'

export { Bar, BarLeft, BarRight }
