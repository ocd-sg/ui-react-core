import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Select from './index'

const options = [
  {label: 'one', value: 1},
  {label: 'two', value: 2},
  {label: 'three', value: 3}
]

storiesOf('controls', module)
  .add('(WIP) Select: controlled', () => (
    <Select options={options} value={1} onChange={action('onChange')} />
  ))
  .add('(WIP) Select: interactive', () => {
    class Stateful extends PureComponent {
      state = {
        value: null
      }

      render () {
        return (
          <Select options={options} value={this.state.value} onChange={this.handleChange} />
        )
      }

      handleChange = (value) => this.setState({ value })
    }

    return (
      <Stateful />
    )
  })
