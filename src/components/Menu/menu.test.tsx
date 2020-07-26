import React from 'react';
import { render, fireEvent, RenderResult, cleanup } from '@testing-library/react'
import Menu, { MenuProps } from './menu'
import SubMenu from './subMenu'
import MenuItem from './menuItem'
import {PieChartOutlined } from '@ant-design/icons';

const testProps: MenuProps = {
  defaultIndex: '0',
  onSelect: jest.fn(),
  className: 'test',
}
const testVerProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical'
}
const testVerticalMenuProps: MenuProps = {
  defaultIndex: '0',
  mode: 'vertical'
}

const generateMenu = (props: MenuProps) => {
  return (
    <Menu data-testid="defalutCont" {...props} onSelect={(index) => { console.log(index) }} defaultIndex="2" style={{ width: 856 }}>
        <SubMenu title='itme 1' icon={<PieChartOutlined />}>
          <MenuItem disabled>
            itme 1itme 1itme 1itme 1itme 1
          </MenuItem>
          <MenuItem icon={<PieChartOutlined />}>
            itme 2
          </MenuItem>
          <MenuItem>
            itme 3
          </MenuItem>
        </SubMenu>
        <MenuItem disabled >
          itme 1
          </MenuItem>
        <MenuItem data-testid="xyz" >
            xyz
          </MenuItem>
        <MenuItem >
          itme 3
          </MenuItem>
      </Menu>
  )
}
const verticalMenu = (props:MenuProps) =>{
  return(<Menu data-testid="verticalMenu"  {...props} onSelect={(index) => { console.log(index) }} style={{ width: 256 }}>
        <SubMenu title='itme 1' key="3" data-testid="verticalMenuSubMenu"  icon={<PieChartOutlined />}>
          <MenuItem disabled key="1">1-1</MenuItem>
          <MenuItem  key="2">1-2</MenuItem>
          <SubMenu title='1-3' data-testid="child1-3">
            <MenuItem disabled>
              1-3-1
            </MenuItem>
            <MenuItem >
              1-3-2
            </MenuItem>
            <SubMenu title='1-3-3' data-testid="child1-3-3">
              <MenuItem disabled data-testid="child1-3-3-1">
                1-3-3-1
              </MenuItem>
              <MenuItem data-testid="child1-3-3-2">
              1-3-3-2
              </MenuItem>
              <MenuItem>
              1-3-3-3
              </MenuItem>
            </SubMenu>
          </SubMenu>
        </SubMenu>
        <MenuItem key="1" icon={<PieChartOutlined />}>itme 2</MenuItem>
        <MenuItem key="2" >itme 3</MenuItem>
        {/* <p>aaa</p> */}
      </Menu>)
}
let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement;
describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    menuElement = wrapper.getByTestId('defalutCont');
    // activeElement = wrapper.getByText('active');
    // disabledElement = wrapper.getByText('disabled');
  })
  it('should render corrent Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('fly-menu menu-horizontal');
    // 判定元素下的子元素li的个数
    // expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    // expect(activeElement).toHaveClass('active');
    // expect(disabledElement).toHaveClass('is-disabled');
  })
  it('click item should change active and call the right callback', () => {
    const threeItem = wrapper.getByTestId('xyz');
    fireEvent.click(threeItem);
    expect(threeItem).toHaveClass('menu-item active');
        // toHaveBeenCalledWith 函数被调用时的参数
        // expect(testProps.onSelect).toHaveBeenCalledWith(2)


    // fireEvent.click(disabledElement);
    // expect(disabledElement).not.toHaveClass('active');
    expect(testProps.onSelect).not.toHaveBeenCalledWith(1)
  })
  it('should render vertical mode when mode is set to vertical', () => {
    // 清楚其他的html
    cleanup()
    const wrapper = render(generateMenu(testVerProps));
    const menuElement = wrapper.getByTestId('defalutCont');
    expect(menuElement).toHaveClass('menu-vertical')
  })
})
let newWrapper: RenderResult, newMenuElement: HTMLElement, newActiveElement: HTMLElement, newDisabledElement: HTMLElement;

describe('test Menu mode is vertical and SubMenu component',()=>{
  beforeEach(()=>{
    newWrapper = render(verticalMenu(testVerticalMenuProps));
    newMenuElement = newWrapper.getByTestId('verticalMenu');
    
  })
  it('should render corrent Menu、SubMenu、MenuItem props ',()=>{
    expect(newMenuElement).toBeInTheDocument()
    expect(newMenuElement).toHaveClass('fly-menu menu-vertical');

  })

  it('should test MenuItem select',()=>{
    const threeItem133 = newWrapper.getByTestId('child1-3-3');
    const threeItem13 = newWrapper.getByTestId('child1-3');
    const threeItem13Title = newWrapper.getByText('1-3');
    const threeItem1331 = newWrapper.getByTestId('child1-3-3-1');
    
    
    const threeItem1 = newWrapper.getByTestId('verticalMenuSubMenu');
    const threeItemChild = newWrapper.getByTestId('child1-3-3-2');
     // expect(threeItem).toHaveClass('menu-submenu-open')

    // fireEvent.click(threeItem);
    fireEvent.click(threeItemChild);
    // 检测子元素select以后 所有的 父元素的 submenu 是否添加选中样式
    expect(threeItem133).toHaveClass('menu-submenu-select')
    expect(threeItem13).toHaveClass('menu-submenu-select')
    expect(threeItem1).toHaveClass('menu-submenu-select')
    // 点击的menuItem添加选中效果
    expect(threeItemChild).toHaveClass('active')


    // 点击 submenu 展开效果
    fireEvent.click(threeItem13Title);
    expect(threeItem13).toHaveClass('menu-submenu-open')
    // 测试禁止点击
    fireEvent.click(threeItem1331);
    expect(threeItem1331).not.toHaveClass('active');

    

  })
})