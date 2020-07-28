import React, { useState, createContext,useContext } from 'react';
import classNames from 'classnames';
import TabPane, { TabPaneProps } from './tabPane'

export type TabsSize = 'large' | 'default' | 'small'
export type TabsType = 'card' | 'editable-card' | 'line'

export interface TabsProps {
  size?: TabsSize;
  type?: TabsType;
  activeKey?: string;
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
    activeKey,
    defaultActiveKey,
    children,
    onTabClick
  } = props
  const classes = classNames('fly-tabs', { [`tabs-${size}`]: size, [`tabs-${type}`]: type, })
  const [active, setActive] = useState(defaultActiveKey)
  const handleClick = (select: string) => {
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
      let childrenActive = {}
      if (childrenKey===active) {
          childrenActive = { className: "active" }
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
    <div>
      <div className={classes}>
        <TabsContext.Provider value={passContext}>
          <ul>
            {renderChildren()}
          </ul>
          <ul>
            {childrenContext}
          </ul>
        </TabsContext.Provider>
      </div>
    </div>
  )
}
Tabs.defaultProps = {
  size: 'default',
  type: 'line',
  // defaultActiveKey:'1'
}

export default Tabs;