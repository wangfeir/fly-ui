import React from 'react'
import classNames from 'classnames'

export interface TabPaneProps {
  tab:string,
  key?:string,
  index?:string,
  children?:React.ReactNode;
  className?: string;

}

const TabPane :React.FC<TabPaneProps> = (props)=>{
  const {tab,key,children,className} = props;
  return(
    <li className={className}>
      {tab}
    </li>
  )
}
TabPane.displayName = 'TabPane'
export default TabPane; 