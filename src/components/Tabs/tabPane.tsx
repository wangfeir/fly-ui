import React,{useContext} from 'react'
import classNames from 'classnames'
import {TabsContext} from './tabs'
export interface TabPaneProps {
  tab:string,
  key:string,
  index?:string,
  children?:React.ReactNode;
  paneKey?:string;
  className?: string;
}

const TabPane :React.FC<TabPaneProps> = (props)=>{
  const {tab,index,paneKey,children,className} = props;
  const {activeKey,tabClick} = useContext(TabsContext);
  console.log('activeKey',paneKey,activeKey)
  const classes = classNames(className,{
    'active':activeKey===paneKey
  })
  const handlClick =()=>{
    if(tabClick){
      tabClick(paneKey||'')
    }
  }
  return(
    <li className={classes} key={paneKey} onClick={handlClick}>
      {tab}
    </li>
  )
}
TabPane.displayName = 'TabPane'
export default TabPane; 

