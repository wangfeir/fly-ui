import React from 'react'
import classNames from 'classnames'


export type InputSize = 'large' | 'default' | 'small';

export interface InputProps {
  defaultValue?: string
  placeholder?: string
  disabled?: boolean
  size?:InputSize,
  prefix?:React.ReactNode,
  suffix?:React.ReactNode,
  onChange?: (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}
// export enum ButtonSize {
//   Large = "large",
//   default = "default",
//   Small = "small",
// }
const Input: React.FC<InputProps> = (props) => {
  const { placeholder, defaultValue, size,onChange,prefix,suffix, ...restProps } = props
  const className = classNames('fly-input', { 
    ['input-disabled']: restProps.disabled, 
    [`input-${size}`]: size, 
    
  })
  const classnames = classNames({
    ['input-icon']:prefix||suffix,
  })

  const handChange = (e:any) =>{
    console.log('handChange',e.target.value)
    onChange?.bind(e)
    if(onChange){
      onChange(e)
    }
  }
  return (
    <div className={classnames}>
      {suffix&&<span className="suffix-icon">
        {suffix}
        </span>}
        {prefix&&<span className="prefix-icon">
        {prefix}
        </span>}
      <input className={className} type="text" onChange={handChange} defaultValue={defaultValue} placeholder={placeholder} {...restProps} />
    </div>
  )
}
Input.defaultProps={
  size:'default'
}
export default Input