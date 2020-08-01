import React, { useState, createContext,useContext } from 'react';
import classNames from 'classnames';
import TabPane, { TabPaneProps } from './tabPane'

export type TabsSize = 'large' | 'default' | 'small';
export type TabsType = 'card' | 'editable-card' | 'line';

export interface TabsProps {
  size?: TabsSize;
  type?: TabsType;
  // activeKey?: string;
  defaultActiveKey?: string;
  onTabClick?: (selectedIndex: string) => void
}
interface TabPaneContext {
  activeKey: string;
  tabClick?: (selectedIndex: string) => void
}
// 创建context
export const TabsContext = createContext<TabPaneContext>({ activeKey: '' })

const Tabs: React.FC<TabsProps> = (props) => {
  const {
    size,
    type,
    // activeKey,
    defaultActiveKey,
    children,
    onTabClick,
    ...restProps
  } = props
  const classes = classNames('fly-tabs', { [`tabs-${size}`]: size, [`tabs-${type}`]: type, })
  const [active, setActive] = useState(defaultActiveKey)
  const handleClick = (select: string) => {
    if(onTabClick){
      onTabClick(select)
    }
    setActive(select)
  }
  const passContext: TabPaneContext = {
    activeKey: active || '',
    tabClick: handleClick
  }
  const childrenContext: any = []
  
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childrenElement = child as React.FunctionComponentElement<TabPaneProps>;
      const childrenKey = childrenElement.key;
      const { displayName } = childrenElement.type;

      // 给内容元素添加active
      let childrenActive = {
        key:index,      // 如果不添加key回报错   Warning: Each child in a list should have a unique "key" prop.
        className:""
      }
      if (childrenKey===active) {
          childrenActive.className ="active"
      }
      if (displayName === 'TabPane') {
        childrenContext.push(React.createElement('li', {...childrenActive}, childrenElement.props.children))
        return React.cloneElement(childrenElement, { index: index.toString(), paneKey: childrenKey?.toString() })
      } else {
        console.error('warning:Tabs child is not TabPane')
      }
    })
  }
  // const 
  return (
      <div className={classes} {...restProps}>
        <TabsContext.Provider value={passContext}>
          <ul className="tabs-nav-box">
            {renderChildren()}
          </ul>
          <ul className='tabs-context'>
            {childrenContext}
          </ul>
        </TabsContext.Provider>
      </div>
  )
}
Tabs.defaultProps = {
  size: 'default',
  type: 'line',
  // defaultActiveKey:'1'
}

export default Tabs;