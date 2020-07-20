import React, { useContext, useState, createContext } from 'react'
import classNames from 'classnames'

type MenuMode = "vertical" | "horizontal" | "inline" // 支持垂直、水平、和内嵌模式
type SelectCallBack = (selectedIndex: number) => void
interface MenuProps {
  className?: string;
  mode?: MenuMode;
  style?: React.CSSProperties;
  defaultIndex: number;
  onSelect?: SelectCallBack;
}

interface IMenuContext {
  index: number;
  onSelect?: SelectCallBack;

}
// 创建Context 用来向子元素传递参数
export const MenuConetxt = createContext<IMenuContext>({ index: 0 })
const Menu: React.FC<MenuProps> = (props) => {
  const {
    className,
    mode,
    style,
    defaultIndex,
    onSelect,
    children
  } = props
  const classes = classNames('fly-menu', className, { [`menu-${mode}`]: mode });
  const [currentActive, setActive] = useState(defaultIndex)
  
  // 子元素点击时触发的回调函数
  const handleClick = (index: number) => {
    setActive(index);
    if (onSelect) {
      onSelect(index);
    }
  }
  // 向子元素传递的值
  const passContext: IMenuContext = {
    index: currentActive ? currentActive : 0,
    onSelect: handleClick,
  }
  return (
    // 使用 .Provider 向子元素传递参数
    <MenuConetxt.Provider value={passContext}>
      <ul style={style} className={classes}>
        {children}
      </ul>
    </MenuConetxt.Provider>

  )
}
Menu.defaultProps = {
  defaultIndex: 0,
  mode: 'horizontal'
}
export default Menu;