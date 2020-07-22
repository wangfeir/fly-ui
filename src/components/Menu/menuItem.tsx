import React, { useContext, useState } from 'react'
import classNames from 'classnames'
import Menu, { MenuConetxt } from './menu'
export interface MenuItemProps {
  index?: number,
  disabled?: boolean,
  className?: string,
  style?: React.CSSProperties
}

const MenuItem: React.FC<MenuItemProps> = (props) => {
  const { index, disabled, className, style, children } = props
  // 接收父元素传递进来的参数
  const context = useContext(MenuConetxt);

  const classes = classNames('menu-item', className,
    {
      [`is-disabled`]: disabled,
      [`active`]: context.index === index&&!disabled,
    })
    // 列表元素点击时触发父元素回调函数
  const handleClick = () => {
    if (context.onSelect && !disabled&&typeof index ==='number') {
      context.onSelect(index)
    }
  }
  // console.log('context', context, index)
  return (
    <li className={classes} style={style} onClick={handleClick}>
      {children}
    </li>
  )

}
MenuItem.displayName = 'MenuItem'

export default MenuItem