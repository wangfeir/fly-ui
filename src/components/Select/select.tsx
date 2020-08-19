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

  const handFocus = (e:any) => {
    // console.log('handFocus',e,e.target.getElementTagName('input'))
    // console.log('handFocus',e)
    setOptionShow(true)
    console.log('e.target.getElementsByTagName("input)',e.target.getElementsByTagName('input'))
    e.target.getElementsByTagName('input')[0].focus()

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
        {mode === 'multiple' && 
        <div className="multiple-box" onClick={handFocus}  data-id="selectInput">
          <ul>
          <li>select1</li>
          <li className="multiple-input-box">
            <input type="text"  placeholder={placeholder}/>
          </li>
        </ul>
        </div>
        }
      </div>
      <ul className={optionClass}>
        <Option >aaaaaa</Option>
      </ul>
    </div>
  )
}
export default Select;