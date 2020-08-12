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

}


const Select: React.FC<SelectProps> = (props) => {
  const { mode, placeholder } = props
  const [optionShow, setOptionShow] = useState(false);

  const classnames = classNames('fly-select', {
    [`select-${mode}`]: mode,
  })
  const optionClass = classNames('select-option', {
    ['option-show']: optionShow
  })

  const handFocus = () => {
    setOptionShow(true)
  }
  const handBlur = () => {
    setOptionShow(false)

  }
  return (
    <div className={classnames}>
      <div className="select-input">
        {!mode && <div >
          asdasdsads
          <span className="select-placeholder">
            {placeholder}
          </span>
        </div>}
        {mode === 'multiple' && <input type="text" placeholder={placeholder} onFocus={handFocus} onBlur={handBlur} />}
      </div>
      <ul className={optionClass}>
        <Option>aaaaaa</Option>
      </ul>
    </div>
  )
}
export default Select;