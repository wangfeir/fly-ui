import React, { useContext,ReactComponentElement } from 'react';
import classNames from 'classnames';
import MenuItem, { MenuItemProps } from './menuItem'
import { MenuConetxt } from './menu';


export interface SubMenuProps {
  index?: number;
  className?: string;
  title: string;
  disabled?:boolean;
}

const SubMenu: React.FC<SubMenuProps> = (props) => {
  const { index, className, title, children,disabled, ...restProps } = props;
  const context = useContext(MenuConetxt) 

  const classes = classNames('menu-item','menu-submenu', className,
    {
      [`is-disabled`]: disabled,
      [`active`]: context.index === index&&!disabled,
    })
  const renderChildren = () => {
    const childrenComponent = React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<MenuItemProps>;
      const { displayName } = childElement.type;
      if (displayName === 'MenuItem') {
        return React.cloneElement(childElement, { index })
      } else {
        console.error('warning:SubMenu child is not MenuItem!')
      }
    })
    return (
      <ul className='fly-submenu'>
        {childrenComponent}
      </ul>
    )
  }
  const handleClick = () => {
    if (context.onSelect && !disabled&&typeof index ==='number') {
      context.onSelect(index)
    }
  }
  return (
    <li className={classes}  key={index}  onClick={handleClick}>
      <div className='submenu-title'>
        {title}
      </div>
      {renderChildren()}
    </li>
  )
}
SubMenu.displayName = 'SubMenu'
export default SubMenu;