// @flow
import React from 'react'
import type { Node, Element } from 'react'

export type Props = {
  children: Node,
  className: string,
  header: Node,
  footer: Node,
  _margin: boolean
}

const CardHeader = ({
  children,
  className,
  ...props
}: {
  children: Node,
  className: string
}) => (
  <div
    {...props}
    className={[
      'text-normal-50 bg-background-90 bb b--background-50 pa3 f7',
      className
    ].join(' ')}
  >
    {children}
  </div>
)

const CardFooter = ({
  children,
  className,
  ...props
}: {
  children: Node,
  className: string
}) => (
  <div
    {...props}
    className={[
      'text-normal-50 bg-background-90 bt b--background-50 pa3 f7',
      className
    ].join(' ')}
  >
    {children}
  </div>
)

const CardContent = ({
  children,
  className,
  ...props
}: {
  children: Node,
  className: string
}) => (
  <div
    {...props}
    className={[
      'pa3 f6',
      className
    ].join(' ')}
  >
    {children}
  </div>
)

const CardBleed = ({
  children,
  className,
  ...props
}: {
  children: Node,
  className: string
}) => (
  <div
    {...props}
    className={className}
  >
    {children}
  </div>
)

const Card = ({
  children,
  className,
  ...props
}: Props): Element<any> => (
  <div
    {...props}
    className={[
      'text-normal-100 ba b--background-50 br1 overflow-hidden',
      className
    ].join(' ')}
  >
    {children}
  </div>
)

Card.defaultProps = {
  children: [],
  className: '',
  header: null,
  footer: null,
  _margin: true
}

Card.displayName = 'Card'

export default Card
export { Card, CardHeader, CardFooter, CardContent, CardBleed }
