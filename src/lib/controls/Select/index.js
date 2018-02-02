// @flow
import React, { PureComponent } from 'react'
import fuzzysort from 'fuzzysort'

import Input from '../../core/Input'

// const KEY_BACKSPACE = 8
// const KEY_ESC = 27
// const KEY_TAB = 9
const KEY_ENTER = 13
const KEY_UP = 38
const KEY_DOWN = 40

type Option = {
  label: string,
  description?: string,
  value: string | number
}

export type Props = {
  className: '',
  placeholder: string,
  value: string | number | Array<string | number>,
  options: Array<Option>,
  focused: boolean,
  block: boolean,
  onFocus: Function,
  onHighlight: Function,
  onBlur: Function,
  onChange: Function,
  onCreate: Function
}

type State = {
  focused: boolean,
  value: string,
  options: Array<Option>,
  highlighted: string
}

class Select extends PureComponent<Props, State> {
  state = {
    focused: false,
    value: '',
    options: null,
    highlighted: null
  }

  items = {}

  componentDidMount () {
    if (this.props.block) this.setState({ options: this.props.options })
    this.setFocusedFromProps()
    this.setValueFromProps()
  }

  componentDidUpdate (prevProps: Props) {
    if (this.props.focused !== prevProps.focused) this.setFocusedFromProps()
    if (this.props.value !== prevProps.value) this.setValueFromProps()
  }

  setFocusedFromProps = () => {
    const { focused } = this.props
    this.setState({ focused })
  }

  setValueFromProps = () => {
    const { value, options } = this.props
    const option = options.find((option) => option.value === value)

    this.setState({
      value: option ? option.label : ''
    })
  }

  renderInput = () => {
    const { focused, value } = this.state
    const { className, placeholder } = this.props

    return (
      <Input
        className={[
          'relative',
          className
        ].join(' ')}
        ref='input'
        type='text'
        focused={focused}
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
    const { block } = this.props
    const { options } = this.state

    return block
      ? (
        <div
          className='h5 bg-background-100 left-0 right-0 overflow-auto'
        >
          {(options || []).map(this.renderListItem)}
        </div>
      )
      : (
        <div
          className='absolute bg-background-100 left-0 right-0 overflow-auto'
          style={{
            top: '100%',
            maxHeight: '16rem'
          }}
        >
          {(options || []).map(this.renderListItem)}
        </div>
      )
  }

  renderListItem = (item, index) => {
    const { highlighted } = this.state
    const { label, description, value, highlight } = item

    return (
      <div
        key={value}
        ref={(item) => { this.items[value] = item }}
        className={[
          'pa3 sans-serif f7 lh-solid bb br bl b--background-80',
          index === highlighted ? 'bg-primary-100 text-reversed-100' : 'bg-background-90 text-normal-100'
        ].join(' ')}
        onMouseOver={this.handleListItemHover(value)}
        onMouseOut={this.handleListItemHover(null)}
        onMouseDown={this.handleListItemSelect(value)}
      >
        <div
          className={typeof description === 'string' ? 'pb1 fw6' : ''}
        >
          {
            highlight
              ? highlight.split('>')
                .map((d, index) => {
                  const parts = d.split('<')
                  return [
                    parts[0],
                    <span key={index} className='underline'>{parts[1]}</span>
                  ]
                })
                .reduce((memo, d) => memo.concat(d), [])
              : label
          }
        </div>
        {
          description
            ? <div className='fw4 lh-title'>{description}</div>
            : null
        }
      </div>
    )
  }

  render () {
    const { className } = this.props
    const { focused, options } = this.state
    return (
      <div
        className={[
          className,
          'dib relative',
          focused ? 'z-1' : ''
        ].join(' ')}
      >
        {this.renderInput()}
        {options && this.renderList()}
      </div>
    )
  }

  handleInputKeyDown = (evt) => {
    const { highlighted, options } = this.state
    const { onChange, onCreate } = this.props
    const { keyCode } = evt
    if (keyCode === KEY_DOWN && options && options.length) {
      this.setState({
        highlighted: typeof highlighted === 'number' ? Math.min(highlighted + 1, options.length - 1) : 0
      }, () => {
        const value = options[this.state.highlighted].value
        this.handleHighlight(value)
        this.items[value].scrollIntoView()
      })
      evt.stopPropagation()
      evt.preventDefault()
    } else if (keyCode === KEY_UP && options && options.length) {
      this.setState({
        highlighted: typeof highlighted === 'number' ? Math.max(highlighted - 1, 0) : 0
      }, () => {
        const value = options[this.state.highlighted].value
        this.handleHighlight(value)
        this.items[value].scrollIntoView()
      })
      evt.stopPropagation()
      evt.preventDefault()
    } else if (keyCode === KEY_ENTER) {
      if (options[highlighted]) {
        const { value } = options[highlighted]
        onChange(value)
      } else {
        onCreate(this.refs.input.value)
      }
      this.setState({ focused: false })
      evt.stopPropagation()
      evt.preventDefault()
    }
  }

  handleInputChange = (value) => this.setState({
    value: value,
    options: value
      ? fuzzysort
        .go(
          value,
          this.props.options,
          {key: 'label'}
        )
        .map((result) => ({
          ...result.obj,
          highlight: fuzzysort.highlight(result, '<', '>')
        }))
      : this.props.options
  })

  handleInputFocus = () => this.setState({ options: this.props.options, focused: true }, () => this.props.onFocus())

  handleInputBlur = () => {
    this.setState({
      focused: false,
      options: this.props.block ? this.props.options : null,
      highlighted: null
    }, () => {
      this.setValueFromProps()
      this.props.onBlur()
    })
  }

  handleHighlight = (value) => {
    this.props.onHighlight(value)
  }

  handleListItemHover = (value) => () => {
    const { options } = this.state
    this.setState(
      {highlighted: value === null ? null : options.map(({ value }) => value).indexOf(value)},
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
  searchable: false,
  focused: false,
  stretch: false,
  block: false,
  onFocus: () => {},
  onHighlight: () => {},
  onBlur: () => {},
  onChange: () => {},
  onCreate: () => {}
}

Select.displayName = 'Select'

export default Select
export { Select }
