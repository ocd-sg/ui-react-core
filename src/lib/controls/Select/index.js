// @flow
import React, { PureComponent } from 'react'
import fuzzysearch from 'fuzzysearch'

// const KEY_BACKSPACE = 8
// const KEY_ESC = 27
// const KEY_TAB = 9
const KEY_ENTER = 13
const KEY_UP = 38
const KEY_DOWN = 40

type Option = {
  label: string,
  value: string | number
}

export type Props = {
  className: '',
  placeholder: string,
  value: string | number | Array<string | number>,
  options: Array<Option>,
  onChange: Function
}

type State = {
  value: string,
  focused: boolean
}

class Select extends PureComponent<Props, State> {
  state = {
    value: '',
    options: null,
    highlighted: null
  }

  componentDidMount () {
    this.setValueFromProps()
  }

  componentWillUpdate (props) {
    if (this.props.value !== props.value) this.setValueFromProps()
  }

  setValueFromProps = () => {
    const { value, options } = this.props
    const option = options.find((option) => option.value === value)

    this.setState({
      value: option ? option.label : ''
    })
  }

  renderInput = () => {
    const { value } = this.state
    const { placeholder, options } = this.props

    return (
      <input
        ref='input'
        type='text'
        placeholder={placeholder}
        value={value}
        onKeyDown={this.handleInputKeyDown}
        onChange={this.handleInputChange}
        onFocus={this.handleInputFocus}
        onBlur={this.handleInputBlur}
      />
    )
  }

  renderList = () => {
    const { options } = this.state

    return (
      <div
        className='absolute bg-background-100 foreground-100 left-0 right-0'
        style={{top: '100%'}}
      >
        {options.map(this.renderListItem)}
      </div>
    )
  }

  renderListItem = (item, index) => {
    const { highlighted } = this.state
    const { label, value } = item

    return (
      <div
        key={value}
        className={[
          index === highlighted ? 'bg-background-70' : ''
        ].join(' ')}
        onMouseDown={this.handleListItemSelect(value)}
      >
        {label}
      </div>
    )
  }

  render () {
    const { options } = this.state
    const { className } = this.props
    return (
      <div className={[
        'dib relative',
        className
      ].join(' ')}>
        {this.renderInput()}
        {options && this.renderList()}
      </div>
    )
  }

  handleInputKeyDown = (evt) => {
    const { highlighted, options } = this.state
    const { onChange } = this.props
    const { keyCode } = evt
    if (keyCode === KEY_DOWN) {
      this.setState({highlighted: typeof highlighted === 'number' ? Math.min(highlighted + 1, options.length - 1) : 0})
      evt.stopPropagation()
      evt.preventDefault()
    }
    else if (keyCode === KEY_UP) {
      this.setState({highlighted: typeof highlighted === 'number' ? Math.max(highlighted - 1, 0) : 0})
      evt.stopPropagation()
      evt.preventDefault()
    }
    if (keyCode === KEY_ENTER) {
      if (options[highlighted]) {
        const { value } = options[highlighted]
        onChange(value)
        this.refs.input.blur()
      }
      evt.stopPropagation()
      evt.preventDefault()
    }
  }

  handleInputChange = (evt) => this.setState({
    value: evt.target.value,
    options: this.props.options.filter(({ label }) => fuzzysearch(evt.target.value, label))
  })

  handleInputFocus = () => this.setState({options: this.props.options})

  handleInputBlur = () => {
    this.setState({
      options: null,
      highlighted: null
    }, this.setValueFromProps)
  }

  handleListItemSelect = (value) => () => this.props.onChange(value)
}

Select.defaultProps = {
  className: '',
  placeholder: 'Search…',
  value: '',
  options: [],
  searchable: false,
  onChange: () => {}
}

Select.displayName = 'Select'

export default Select
export { Select }
