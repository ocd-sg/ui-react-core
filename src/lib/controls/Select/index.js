// @flow
import React, { PureComponent } from 'react'

import Autocomplete from 'react-autocomplete'

type Option = {
  label: string,
  value: string | number
}

export type Props = {
  className: '',
  placeholder: string,
  value: string | number | Array<string | number>,
  options: Array<Option>,
  searchable: boolean,
  multiple: boolean,
  onChange: Function
}

type State = {
  value: string
}

class Select extends PureComponent<Props, State> {
  state = {
    value: ''
  }

  componentWillMount () {
    this.setValueFromProps()
  }

  componentWillReceiveProps () {
    this.setValueFromProps()
  }

  setValueFromProps = () => {
    const { options } = this.props
    const option = options.find((option) => option.value === this.props.value) || null

    if (option) {
      this.setState({value: option.label})
    }
  }

  getItemValue = ({ label }) => label

  renderInput = (props) => (
    <input
      type='text'
      className={[
        'bg-foreground-60 pv1 ph2 bn f7 lh-solid outline-0',
        !this.props.searchable && this.state.value === '' ? 'text-transparent' : 'text-normal-100'
      ].join(' ')}
      placeholder={this.props.placeholder}
      {...props}
    />
  )

  renderMenu = (options) => (
    <div className='bg-foreground-60' children={options} />
  )

  renderItem = ({ label, value }: Option, isHighlighted) => (
    <div
      key={value}
      className={[
        'pv1 ph2 f7 ln-solid',
        isHighlighted ? 'bg-primary-100' : ''
      ].join(' ')}
    >
      {label}
    </div>
  )

  shouldItemRender = (option, value) =>
    this.props.searchable
      ? option.label.match(value)
      : true

  render () {
    const { value } = this.state
    const { className, options } = this.props
    return (
      <Autocomplete
        className={className}
        value={value}
        items={options}
        getItemValue={this.getItemValue}
        shouldItemRender={this.shouldItemRender}
        renderInput={this.renderInput}
        inputProps={{
          onBlur: this.handleBlur
        }}
        renderMenu={this.renderMenu}
        renderItem={this.renderItem}
        onChange={this.handleChange}
        onSelect={this.handleSelect}
      />
    )
  }

  handleBlur = () =>
    this.setValueFromProps()

  handleChange = (_, value) =>
    this.props.searchable
      ? this.setState({ value })
      : null

  handleSelect = (_, option) => {
    const { onChange } = this.props
    this.setValueFromProps()
    onChange(option.value)
  }
}

Select.defaultProps = {
  className: '',
  placeholder: 'Search…',
  value: null,
  options: [],
  searchable: false,
  onChange: () => {}
}

Select.displayName = 'Select'

export default Select
export { Select }
