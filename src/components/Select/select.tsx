import React, { useState } from 'react'
import classNames from 'classnames'
import Option from './option'

export type SelectSize = 'large' | 'default' | 'small';
export type SelectMode = 'multiple' | 'tags';

export interface SelectProps {
  size?: SelectSize
  mode?: SelectMode
  disabled?: boolean
  defaultValue?: string
  placeholder?: string
  style?: React.CSSProperties;

}


const Select: React.FC<SelectProps> = (props) => {
  const { mode, placeholder,style } = props
  const [optionShow, setOptionShow] = useState(false);

  const classnames = classNames('fly-select', {
    [`select-${mode}`]: mode,
  })
  const optionClass = classNames('select-option-list', {
    ['option-show']: optionShow
  })

  const handFocus = () => {
    console.log('handFocus')
    setOptionShow(true)
  }
  const handBlur = () => {
    // setOptionShow(false)

  }
  window.onclick= (e:any)=>{
    console.log('eeee123',e)
    console.log('eeee455',e.target.dataset.id)
    if((e.target.name&&e.target.name==="selectInput")||e.target.dataset.id==="selectInput"){
      return false
    }
    setOptionShow(false)
  }
  const handleClick = () =>{

  }
  return (
    <div className={classnames} style={style}  data-id="selectInput">
      <div >
        {!mode && <div className="select-input">
          <span className="select-placeholder">
            {placeholder}
          </span>
        </div>}
        {mode === 'multiple' && <ul>
          <li>select1</li>
          <li>
            <input type="text" name="selectInput"  placeholder={placeholder} onFocus={handFocus} />
          </li>
        </ul>}
      </div>
      <ul className={optionClass}>
        <Option >aaaaaa</Option>
      </ul>
    </div>
  )
}
export default Select;