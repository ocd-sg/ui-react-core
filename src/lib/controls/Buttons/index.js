// @flow
import React from 'react'
import type { Element } from 'react'

import Button from '../../core/Button'
import ButtonGroup from '../../core/ButtonGroup'

type Option = {
  label: string,
  value: string | number
}

export type Props = {
  className: '',
  value: string | number | Array<string | number>,
  options: Array<Option>,
  multiple: boolean,
  onChange: Function
}

const handleClickSingle = (callback) => (value) => (v) => () => {
  value === v
    ? callback()
    : callback(v)
}

const handleClickMultiple = (callback) => (value = []) => (v) => () => {
  const newValue = value.includes(v)
    ? value.filter((d) => d !== v)
    : value.concat(v)

  callback(
    newValue.length === 0
      ? undefined
      : newValue
  )
}

const Buttons = ({ className, value, options, multiple, onChange }: Props): Element<any> => (
  <ButtonGroup className={className}>
    {options.map(({ label, value: v }, index) => (
      <Button
        key={v || index}
        primary={value && multiple ? value.includes(v) : value === v}
        label={label}
        onClick={multiple ? handleClickMultiple(onChange)(value)(v) : handleClickSingle(onChange)(value)(v)}
      />
    ))}
  </ButtonGroup>
)

Buttons.defaultProps = {
  className: '',
  value: null,
  options: [],
  onChange: () => {}
}

Buttons.displayName = 'Buttons'

export default Buttons
export { Buttons }
