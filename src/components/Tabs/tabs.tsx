import React from 'react';
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
  const context: any = []
  const renderChildren = () => {
    const childrenContext: any = []
    const childrenComponent = React.Children.map(children, (child, index) => {
      const childrenElement = child as React.FunctionComponentElement<TabPaneProps>;
      const childrenKey = childrenElement.key;

      const { displayName } = childrenElement.type;
      console.log('childrenElement', childrenElement, childrenKey)
      if (displayName === 'TabPane') {
        // 判定显示哪个子元素的内容
        let childrenActive = {}
        // 如果有设置默认的 defaultActiveKey 则对比 否则 选择第一个
        if (defaultActiveKey) {
          if(defaultActiveKey === childrenKey){
            childrenActive = { className: "active" }
          }
        } else if (index === 0) {
          childrenActive = { className: "active" }
        } 
        childrenContext.push(React.createElement('li', childrenActive, childrenElement.props.children))

        return React.cloneElement(childrenElement, { index: index.toString(), ...childrenActive})

        //  将内容包裹进li标签里
      } else {
        console.error('warning:Tabs child is not TabPane')
      }

    })
    return (
      <div>
        {/* 存放tabs的title */}
        <ul className={classes}>
          {childrenComponent}
        </ul>
        {/* 存放tabs的内容 */}
        <ul className="tabs-context">
          {childrenContext}
        </ul>
      </div>


    )

  }
  // const 
  return (
    <div>
      <div className={classes}>
        {renderChildren()}
      </div>
      {/* {
        context.map((item:any,index:number)=>{
          if(item){
          return<div>{item.context}</div>
          }
        })
      }
      <div></div> */}
    </div>

  )
}
Tabs.defaultProps = {
  size: 'default',
  type: 'line',
  // defaultActiveKey:'1'
}

export default Tabs;