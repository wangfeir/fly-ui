import React from 'react'
import classNames from 'classnames'

export interface OptionProps {

}
const Option: React.FC<OptionProps> = (props) => {
  const {} = props
  console.log("props",props)
  const classnames = classNames('select-option')
  const handleClick = (e:any) =>{
    console.log('select',e)
  }
  return (
      <li className={classnames} data-id="selectInput" onClick={(e)=>{handleClick(e)}}>1</li>
  )
}
export default Option;