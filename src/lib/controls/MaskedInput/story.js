import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import MaskedInput from './index'

storiesOf('controls.MaskedInput', module)
  .add('basic', () => (
    <MaskedInput
      mask='11/11/1111'
      placeholder='DD/MM/YYYY'
      onChange={action('onChange')}
    />
  ))
  .add('focused', () => (
    <MaskedInput
      mask='11/11/1111'
      placeholder='DD/MM/YYYY'
      focused
      onChange={action('onChange')}
    />
  ))
  .add('interval focus', () => {
    class IntervalFocus extends PureComponent {
      state = {
        focused: false
      }

      componentDidMount () {
        this.timer = setInterval(() => {
          this.setState({ focused: !this.state.focused })
        }, 1000)
      }

      componentWillUnmount () {
        clearInterval(this.timer)
      }

      render () {
        const { focused } = this.state
        return (
          <MaskedInput
            value={focused ? '11/11/1111' : '00/00/0000'}
            mask='11/11/1111'
            placeholder='DD/MM/YYYY'
            focused={focused}
            onChange={action('onChange')}
          />
        )
      }
    }

    return <IntervalFocus />
  })
  .add('disabled', () => (
    <MaskedInput
      mask='11/11/1111'
      placeholder='DD/MM/YYYY'
      disabled
      onChange={action('onChange')}
    />
  ))
