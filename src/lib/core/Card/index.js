// @flow
import React from 'react'
import type { Node, Element } from 'react'

export type Props = {
  className: string,
  children: Node,
  header: Node,
  footer: Node
}

const Card = ({
  className,
  children,
  header,
  footer
}: Props): Element<any> => (
  <div
    className={[
      'text-normal-100 bg-background-90',
      'ma2 br1',
      className
    ].join(' ')}
  >
    {
      header
        ? (
          <div className='text-normal-60 bb b--background-80 pa2 f7'>
            { header }
          </div>
        )
        : null
    }
    <div className='pa2 f6'>
      { children }
    </div>
    {
      footer
        ? (
          <div className='text-normal-60 bt b--background-80 pa2 f7'>
            { footer }
          </div>
        )
        : null
    }
  </div>
)

Card.defaultProps = {
  className: '',
  children: [],
  header: null,
  footer: null,
  _margins: true
}

Card.displayName = 'Card'

export default Card
export { Card }
