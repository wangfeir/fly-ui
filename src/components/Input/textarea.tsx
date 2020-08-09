import React from 'react'
import classNames from 'classnames'

interface TextareaProps {
  placeholder?:string;
  autoSize?:object;
  value?:string;
  defaultValue?:string;
  onPressEnter?:(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

const Textarea: React.FC<TextareaProps> = (props) => {
  const {defaultValue,placeholder,onPressEnter} = props
  const classnames = classNames('fly-input', { })
  const handleEnter = (e:any)=>{
    if(onPressEnter){
      onPressEnter(e)
    }
  }
  return(
    <textarea className={classnames} onPointerEnter={handleEnter} defaultValue={defaultValue} placeholder={placeholder}/>
  )
}
export default Textarea;
