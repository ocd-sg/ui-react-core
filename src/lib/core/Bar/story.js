// @flow
import React from 'react'
import { storiesOf } from '@storybook/react'

import { Bar, BarLeft, BarRight } from './index'
import Text from '../Text'
import Button from '../Button'
import ButtonGroup from '../ButtonGroup'

storiesOf('core.Bar', module)
  .add('basic', () => (
    <Bar className='bb b--background-50'>
      <BarLeft>
        <Text className='ph2 fw6 ttu tracked' size='small'>Left Text</Text>
      </BarLeft>
      <BarRight>
        <ButtonGroup>
          <Button label='Right' />
          <Button label='Button' primary />
        </ButtonGroup>
      </BarRight>
    </Bar>
  ))
  .add('size', () => (
    <Bar className='ma4 pa3 shadow-1' size='large'>
      <BarLeft>
        <Text className='ph2 fw6 ttu tracked' size='large'>Some Title</Text>
      </BarLeft>
      <BarRight>
        <ButtonGroup className='br2 overflow-hidden'>
          <Button size='large' label='Right' />
          <Button size='large' label='Button' primary />
        </ButtonGroup>
      </BarRight>
    </Bar>
  ))
