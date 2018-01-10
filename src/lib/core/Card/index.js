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

const Card = ({
  children,
  className,
  header,
  footer,
  _margin,
  ...props
}: Props): Element<any> => (
  <div
    className={[
      'text-normal-100 bg-background-90',
      'br1',
      _margin ? 'ma2' : '',
      className
    ].join(' ')}
    {...props}
  >
    {
      header
        ? (
          <div className='text-normal-50 bb b--background-80 pa2 f7'>
            { header }
          </div>
        )
        : null
    }
    <div className='w-100 h-100 pa2 f6'>
      { children }
    </div>
    {
      footer
        ? (
          <div className='text-normal-50 bt b--background-80 pa2 f7'>
            { footer }
          </div>
        )
        : null
    }
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
export { Card }
