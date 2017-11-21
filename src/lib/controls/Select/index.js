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
  focused: boolean,
  onHighlight: Function,
  onBlur: Function,
  onChange: Function,
  onCreate: Function
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
    this.setFocus()
  }

  componentDidUpdate (props) {
    if (this.props.value !== props.value) this.setValueFromProps()
    if (this.props.focused || this.props.focused !== props.focused) this.setFocus()
  }

  setValueFromProps = () => {
    const { value, options } = this.props
    const option = options.find((option) => option.value === value)

    this.setState({
      value: option ? option.label : ''
    })
  }

  setFocus = () => {
    const { focused } = this.props
    if (focused) this.refs.input.focus()
    else this.refs.input.blur()
  }

  renderInput = () => {
    const { value } = this.state
    const { placeholder } = this.props

    return (
      <input
        className={[
          'w-100 pv2 ph2 outline-0 bn br0',
          'bg-background-100',
          'f5 lh-solid',
          'relative z-1'
        ].join(' ')}
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
        className='absolute bg-background-100 foreground-100 left-0 right-0 shadow-1 bt b--foreground-10'
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
          'pv2 ph2',
          'f5 lh-solid',
          index === highlighted ? 'bg-primary-100 text-reversed-100' : ''
        ].join(' ')}
        onMouseOver={this.handleListItemHover(value)}
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
    const { onChange, onCreate } = this.props
    const { keyCode } = evt
    if (keyCode === KEY_DOWN) {
      this.setState({
        highlighted: typeof highlighted === 'number' ? Math.min(highlighted + 1, options.length - 1) : 0
      }, () => {
        this.handleHighlight(options[this.state.highlighted].value)
      })
      evt.stopPropagation()
      evt.preventDefault()
    } else if (keyCode === KEY_UP) {
      this.setState({
        highlighted: typeof highlighted === 'number' ? Math.max(highlighted - 1, 0) : 0
      }, () => {
        this.handleHighlight(options[this.state.highlighted].value)
      })
      evt.stopPropagation()
      evt.preventDefault()
    } else if (keyCode === KEY_ENTER) {
      if (options[highlighted]) {
        const { value } = options[highlighted]
        onChange(value)
        this.refs.input.blur()
      } else {
        onCreate(this.refs.input.value)
      }
      evt.stopPropagation()
      evt.preventDefault()
    }
  }

  handleInputChange = (evt) => this.setState({
    value: evt.target.value,
    options: this.props.options.filter(({ label }) => fuzzysearch(evt.target.value, label.toLowerCase()))
  })

  handleInputFocus = () => this.setState({options: this.props.options})

  handleInputBlur = () => {
    this.setState({
      options: null,
      highlighted: null
    }, () => {
      this.setValueFromProps()
      this.props.onBlur()
    })
  }

  handleHighlight = (value) => this.props.onHighlight(value)

  handleListItemHover = (value) => () => {
    const { options } = this.state
    this.setState(
      {highlighted: options.map(({ value }) => value).indexOf(value)},
      () => this.handleHighlight(value)
    )
  }

  handleListItemSelect = (value) => () => this.props.onChange(value)
}

Select.defaultProps = {
  className: '',
  placeholder: 'Search…',
  value: '',
  options: [],
  focused: false,
  onHighlight: () => {},
  onBlur: () => {},
  onChange: () => {},
  onCreate: () => {}
}

Select.displayName = 'Select'

export default Select
export { Select }
