import React, { PureComponent } from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Select from './index'
import { Card, CardContent } from '../../core/Card'

const options = [
  {label: 'Item One', value: 1},
  {label: 'Another Item Two', value: 2},
  {label: 'Last Item Three', value: 3}
]

storiesOf('controls.Select', module)
  .add('searchable, controlled', () => (
    <Select
      options={options}
      value={1}
      onChange={action('onChange')}
      onFocus={action('onFocus')}
      onHighlight={action('onHighlight')}
      onBlur={action('onBlur')}
    />
  ))
  .add('focused', () => (
    <Select
      options={options}
      value={1}
      focused
      onChange={action('onChange')}
      onFocus={action('onFocus')}
      onHighlight={action('onHighlight')}
      onBlur={action('onBlur')}
    />
  ))
  .add('searchable, no options', () => (
    <Select
      onChange={action('onChange')}
      onFocus={action('onFocus')}
      onHighlight={action('onHighlight')}
      onBlur={action('onBlur')}
    />
  ))
  .add('long list of options', () => (
    <Select
      className='w5'
      options={Array(20).fill(0).map((_, index) => ({ value: index, label: `Item ${index}`, description: `Some description for Item ${index}.` }))}
      value={1}
      onChange={action('onChange')}
      onFocus={action('onFocus')}
      onHighlight={action('onHighlight')}
      onBlur={action('onBlur')}
    />
  ))
  .add('options with descriptions', () => (
    <Select
      className='w5'
      options={options.map((option) => ({ ...option, description: `Some description for ${option.label}.` }))}
      value={1}
      onChange={action('onChange')}
      onFocus={action('onFocus')}
      onHighlight={action('onHighlight')}
      onBlur={action('onBlur')}
    />
  ))
  .add('stretch', () => (
    <div className='ma4'>
      <Select
        className='w-100'
        options={options.map((option) => ({ ...option, description: `Some description for ${option.label}.` }))}
        value={1}
        stretch
        onChange={action('onChange')}
        onFocus={action('onFocus')}
        onHighlight={action('onHighlight')}
        onBlur={action('onBlur')}
      />
    </div>
  ))
  .add('stretch & block', () => (
    <Card className='ma4'>
      <CardContent>
        <Select
          className='w-100'
          options={Array(20).fill(0).map((_, index) => ({ value: index, label: `Item ${index}`, description: `Some description for Item ${index}.` }))}
          value={1}
          stretch
          block
          onChange={action('onChange')}
          onFocus={action('onFocus')}
          onHighlight={action('onHighlight')}
          onBlur={action('onBlur')}
        />
      </CardContent>
    </Card>
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
          <Select
            className='w5'
            options={options.map((option) => ({ ...option, description: `Some description for ${option.label}.` }))}
            value={1}
            focused={focused}
            onChange={action('onChange')}
            onFocus={action('onFocus')}
            onHighlight={action('onHighlight')}
            onBlur={action('onBlur')}
          />
        )
      }
    }

    return <DelayedFocus />
  })
  .add('interactive', () => {
    class Stateful extends PureComponent {
      state = {
        value: null
      }

      render () {
        return (
          <Select
            className='w5'
            options={options.map((option) => ({ ...option, description: `Some description for ${option.label}.` }))}
            value={this.state.value}
            onChange={this.handleChange}
          />
        )
      }

      handleChange = (value) => this.setState({ value })
    }

    return (
      <Stateful />
    )
  })
