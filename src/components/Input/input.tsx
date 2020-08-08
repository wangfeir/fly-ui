import React from 'react'
import classNames from 'classnames'


export type InputSize = 'large' | 'default' | 'small';

export interface InputProps {
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  size?:InputSize
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}
// export enum ButtonSize {
//   Large = "large",
//   default = "default",
//   Small = "small",
// }
const Input: React.FC<InputProps> = (props) => {
  const { placeholder, defaultValue, size, ...restProps } = props
  const className = classNames('fly-input', { 
    ['input-disabled']: restProps.disabled, 
    [`input-${size}`]: size, 
  })
  return (
    // <div >
      <input className={className} type="text" defaultValue={defaultValue} placeholder={placeholder} {...restProps} />
    // </div>
  )
}
Input.defaultProps={
  size:'default'
}
export default Input