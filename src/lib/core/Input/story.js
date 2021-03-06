import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Input from './index'

storiesOf('core.Input', module)
  .add('basic', () => (
    <Input
      placeholder='Placeholder Text…'
      onChange={action('onChange')}
    />
  ))
  .add('focused', () => (
    <Input
      value='Focused'
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
          <Input
            value={focused ? 'focused' : 'not focused'}
            focused={focused}
            onChange={action('onChange')}
          />
        )
      }
    }

    return <IntervalFocus />
  })
  .add('disabled', () => (
    <Input
      value='Disabled'
      disabled
      onChange={action('onChange')}
    />
  ))
