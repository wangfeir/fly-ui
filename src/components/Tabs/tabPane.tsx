import React, { useContext } from 'react'
import classNames from 'classnames'
import { TabsContext } from './tabs'
export interface TabPaneProps {
  tab: string;
  key: string;
  index?: string;
  children?: React.ReactNode;
  disabled?: boolean;
  paneKey?: string;
  className?: string;
  icon?:React.ReactNode
}

const TabPane: React.FC<TabPaneProps> = (props) => {
  const { tab, index, paneKey, children, disabled, className,icon,...restProps } = props;
  const { activeKey, tabClick } = useContext(TabsContext);
  console.log('activeKey', paneKey, activeKey)
  const classes = classNames(className, {
    'active': activeKey === paneKey,
    'is-disabled': disabled
  })
  const handlClick = () => {
    if (disabled) return false;
    if (tabClick) {
      tabClick(paneKey || '')
    }

  }
  return (
    <li className={classes}  onClick={handlClick} {...restProps}>
      {/* {icon}{tab} */}
      {icon&&<span className="tabs-icon">{icon}</span>}
      <span className="tabs-text">{tab}</span>
    </li>
  )
}
TabPane.displayName = 'TabPane'
export default TabPane;

