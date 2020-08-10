import React from 'react'
import classNames from 'classnames'

export interface AutoSizeType {
  minRows?: number;
  maxRows?: number;
}
interface TextareaProps {
  placeholder?:string;
  autoSize?:AutoSizeType;
  value?:string;
  defaultValue?:string;
  onPressEnter?:(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void,
}

const Textarea: React.FC<TextareaProps> = (props) => {
  const {defaultValue,placeholder,autoSize,onPressEnter} = props
  const classnames = classNames('fly-input', { })
  const styleHeight = () => {
    if(autoSize){
      const {minRows,maxRows} = autoSize;
      const minHeight=minRows?`${minRows*25}px`:undefined;
      const maxHeight=maxRows?`${maxRows*25}px`:undefined;
      return {
        height:minHeight,
        maxHeight:maxHeight,
        minHeight:minHeight,
      }
    }
  }
  
  const handleEnter = (e:any)=>{
    if(onPressEnter){
      onPressEnter(e)
    }
  }
  const cc = "123123"
  return(
    <textarea className={classnames} onPointerEnter={handleEnter} style={styleHeight()} defaultValue={defaultValue} placeholder={placeholder}/>
  
    )
}
export default Textarea;
