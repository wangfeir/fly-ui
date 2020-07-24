import React, { useContext,ReactComponentElement,useState } from 'react';
import classNames from 'classnames';
import MenuItem, { MenuItemProps } from './menuItem'
import { MenuConetxt,MenuMode } from './menu';


export interface SubMenuProps {
  index?: string;
  className?: string;
  style?: React.CSSProperties
  title: string;
  disabled?:boolean;
  mode?: MenuMode;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, className, title, children,disabled,style,mode, ...restProps } = props;
  const context = useContext(MenuConetxt) 
  const [openStatus,setOpenStatus] = useState(false)
  console.log('SubMenuProps',mode)

    // 创建 class
  const classes = classNames('menu-item menu-submenu', className, {
    // 'active':activeClass(),
    [`is-disabled`]: disabled,
    [`menu-submenu-open`]:openStatus&&context.mode==='vertical',
    [`menu-submenu-vertical`]:context.mode==='vertical'

  })
  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, i) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      console.log('index222',`${index}-${i}`)

      if (displayName === 'MenuItem'||displayName === 'SubMenu') {
        // 计算当前的层级数
        const stratumNum = index?.split('-')?.length;
        console.log('stratumNum',stratumNum)
        // 根据层级数生成child距离左侧的padding
        const childStyle = {paddingLeft:stratumNum?stratumNum*24+'px':'0px'};
        return React.cloneElement(childElement, { index: `${index}-${i}`, stratumNum:stratumNum,style:childStyle})

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
    console.log(mode,'openStatus',props)

    if(context.mode==='vertical'){
      console.log('openStatus',openStatus)
      setOpenStatus(!openStatus)
    }

    // if (context.onSelect && !disabled&&typeof index ==='string') {
    //   context.onSelect(index)
    // }
  }
  return (
    <li className={classes}  key={index}  onClick={handleClick} >
      <div className='submenu-title' style={style}  >
        {title}
      </div>
   
   {renderChildren()}
    </li>
  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu;