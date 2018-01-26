// @flow
import React, { PureComponent } from 'react'

export type Props = {
  className: string,
  disabled: boolean,
  size: 'none' | 'small' | 'normal' | 'large',
  focused: boolean,
  onChange: Function
}

const noop = () => {}

const sizes = {
  input: {
    none: '',
    small: 'h1',
    normal: 'h2',
    large: 'h2'
  },
  text: {
    none: '',
    small: 'f8',
    normal: 'f7',
    large: 'f6'
  }
}

class Input extends PureComponent<Props> {
  componentDidMount () {
    this.handleFocus()
  }

  componentDidUpdate (prevProps) {
    if (this.props.focused !== prevProps.focused) this.handleFocus()
  }

  render () {
    const {
      className,
      disabled,
      size,
      focused,
      onChange,
      ...props
    } = this.props
    return (
      <input
        {...props}
        ref={(input) => { this.input = input }}
        className={[
          'border-box pa2 outline-0 ba b--background-80 text-normal-100 bg-background-90',
          sizes.input[size],
          sizes.text[size],
          disabled ? 'o-20' : '',
          className
        ].join(' ')}
        disabled={disabled}
        onChange={disabled ? noop : this.handleChange}
      />
    )
  }

  handleChange = (evt) => this.props.onChange(evt.target.value)

  handleFocus = () =>
    this.props.focused
      ? this.focus()
      : this.blur()

  // propagate input methods
  focus = () => this.input.focus()
  blur = () => this.input.blur()
}

Input.defaultProps = {
  className: '',
  disabled: false,
  size: 'normal',
  value: '',
  focused: false,
  onClick: () => {}
}

Input.displayName = 'Input'

export default Input
export { Input }
