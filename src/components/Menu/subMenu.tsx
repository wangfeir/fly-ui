import React, { useContext,ReactComponentElement,useState } from 'react';
import classNames from 'classnames';
import MenuItem, { MenuItemProps } from './menuItem'
import { MenuConetxt,MenuMode } from './menu';
import {UpOutlined,DownOutlined } from '@ant-design/icons';

export interface SubMenuProps {
  index?: string;
  className?: string;
  style?: React.CSSProperties
  title: string;
  disabled?:boolean;
  mode?: MenuMode;
  icon?:React.ReactNode;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, className, title, children,disabled,style,mode,icon, ...restProps } = props;
  const context = useContext(MenuConetxt) 
  const [openStatus,setOpenStatus] = useState(false)
  // console.log('SubMenuProps',mode)
    const childSelectStatus = ()=>{
    
      if(index&&context.index.indexOf(index)===0){
        return true
      }
      return false
    }
    // 创建 class
  const classes = classNames('menu-item menu-submenu', className, {
    // 'active':activeClass(),
    [`is-disabled`]: disabled,
    [`menu-submenu-open`]:openStatus&&context.mode==='vertical',
    [`menu-submenu-vertical`]:context.mode==='vertical',
    [`menu-submenu-select`]:childSelectStatus(),


  })
  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      // console.log('index222',index,context.index)

      if (displayName === 'MenuItem'||displayName === 'SubMenu') {
        // 计算当前的层级数
        const stratumNum = index?.split('-')?.length;
        // console.log('stratumNum',stratumNum)
        // 根据层级数生成child距离左侧的padding
        const childStyle = {paddingLeft:stratumNum?stratumNum*24+'px':'0px'};
        return React.cloneElement(childElement, { index: `${index}-${i}`,style:childStyle})

      } else {
        console.error('warning:SubMenu child is not MenuItem | SubMenu!')
      }
    })
    return (
      <ul className='fly-submenu'>

        {childrenComponent}
      </ul>
    )
  }
  const handleClick = (e:any) => {
    e.stopPropagation();
    console.log(mode,'openStatus',index)
    if(context.mode==='vertical'){
      console.log('openStatus',openStatus)
      setOpenStatus(!openStatus)
    }

    // if (context.onSelect && !disabled&&typeof index ==='string') {
    //   context.onSelect(index)
    // }
  }
  return (
    <li className={classes}  key={index}  { ...restProps }>
      <div className='submenu-title' style={style} onClick={handleClick}>
      <span className="menuitem-icon">{icon}</span>
      <span className="menuitem-text">{title}</span>
        <div className="submenu-title-icon">
		    {openStatus&&context.mode==='vertical'&&<UpOutlined style={{ fontSize: '10px'}}/>}
        {!openStatus&&context.mode==='vertical'&&<DownOutlined style={{ fontSize: '10px'}}/>}
        </div>
      </div>
   
   {renderChildren()}
    </li>
  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu;