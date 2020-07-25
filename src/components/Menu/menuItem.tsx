import React, { useContext, useState } from 'react'
import classNames from 'classnames'
import Menu, { MenuConetxt,MenuMode } from './menu'
export interface MenuItemProps {
  index?: string,
  disabled?: boolean,
  mode?: MenuMode;
  className?: string,
  stratumNum?: number,  // 当前的层级数
  style?: React.CSSProperties,
  icon?:React.ReactNode;
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children, icon,stratumNum } = props
  // 接收父元素传递进来的参数
  const context = useContext(MenuConetxt);
  // const [hoverStatus,setHoverStatus] = useState(false)
  const classes = classNames('menu-item menu-item-li', className,
    {
      [`is-disabled`]: disabled,
      [`active`]: context.index === index && !disabled,
      // [`menu-item-hover`]:hoverStatus
    })

  // 列表元素点击时触发父元素回调函数
  // console.log('index', index)
  const handleClick = () => {
    if (context.onSelect && !disabled && typeof index === 'string') {
      console.log('index-click',index)
      context.onSelect(index)
    }
  }
  // console.log('context', context, index)
  // onmouseenter
  return (
    <li className={classes} style={style} onClick={handleClick}>
      <span className="menuitem-icon">{icon}</span>
      <span className="menuitem-text">{children}</span>
    </li>
  )

}
MenuItem.displayName = 'MenuItem'

export default MenuItem