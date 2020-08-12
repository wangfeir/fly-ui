import React from 'react'
import classNames from 'classnames'

export interface OptionProps {

}
const Option: React.FC<OptionProps> = (props) => {
  console.log("props",props)
  const classnames = classNames('select-option')
  return (
      <li className={classnames}>1</li>
  )
}
export default Option;