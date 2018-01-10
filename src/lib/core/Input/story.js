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
  .add('delayed focused', () => {
    class DelayedFocus extends PureComponent {
      state = {
        focused: false
      }

      componentDidMount () {
        this.timer = setTimeout(() => {
          this.setState({ focused: true })
        }, 2 * 1000)
      }

      componentWillUnmount () {
        clearTimeout(this.timer)
      }

      render () {
        const { focused } = this.state
        return (
          <Input
            value='Disabled'
            focused={focused}
            onChange={action('onChange')}
          />
        )
      }
    }

    return <DelayedFocus />
  })
  .add('disabled', () => (
    <Input
      value='Disabled'
      disabled
      onChange={action('onChange')}
    />
  ))
