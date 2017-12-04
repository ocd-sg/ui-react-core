import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Select from './index'

const options = [
  {label: 'one', value: 1},
  {label: 'two', value: 2},
  {label: 'three', value: 3}
]

storiesOf('controls.Select', module)
  .add('(WIP) searchable, controlled', () => (
    <Select
      options={options}
      value={1}
      onChange={action('onChange')}
      onHighlight={action('onHighlight')}
      onBlur={action('onBlur')}
    />
  ))
  .add('(WIP) interactive', () => {
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
