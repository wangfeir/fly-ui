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
  const { placeholder, defaultValue, size,onChange, ...restProps } = props
  const className = classNames('fly-input', { 
    ['input-disabled']: restProps.disabled, 
    [`input-${size}`]: size, 
  })

  const handChange = (e:any) =>{
    console.log('handChange',e.target.value)
    onChange?.bind(e)
    if(onChange){
      onChange(e)
    }
  }
  return (
    // <div >
      <input className={className} type="text" onChange={handChange} defaultValue={defaultValue} placeholder={placeholder} {...restProps} />
    // </div>
  )
}
Input.defaultProps={
  size:'default'
}
export default Input