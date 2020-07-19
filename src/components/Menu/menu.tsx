import React from 'react'
import classNames from 'classnames'

type MenuMode = "vertical" | "horizontal" | "inline" // 支持垂直、水平、和内嵌模式

interface MenuProps {
  className?: string,
  mode?: MenuMode,
  style?: React.CSSProperties,
  defaultIndex: number,
  onSelect?: (selectedIndex: number) => void
}


const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    mode,
    style,
    defaultIndex,
    onSelect,
    children
  } = props
  const classes = classNames('fly-menu', className, { [`menu-${mode}`]: mode })
  return (
    <ul style={style} className={classes}>
      {children}
    </ul>
  )
}
Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}
export default Menu;