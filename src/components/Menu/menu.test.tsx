import React from 'react';
import { render, fireEvent, RenderResult, cleanup } from '@testing-library/react'
import Menu, { MenuProps } from './menu'
import MenuItem from './menuItem'

const testProps: MenuProps = {
  defaultIndex: 0,
  onSelect: jest.fn(),
  className: 'test',
}
const testVerProps: MenuProps = {
  defaultIndex: 0,
  mode: 'vertical'
}

const generateMenu = (props: MenuProps) => {
  return (
    <Menu {...props} data-testid="defalutCont">
      <MenuItem index={0}>
        active
      </MenuItem>
      <MenuItem disabled index={1}>
        disabled
      </MenuItem>
      <MenuItem index={2}>
        xyz
      </MenuItem>
    </Menu>
  )
}

let wrapper: RenderResult, menuElement: HTMLElement, activeElement: HTMLElement, disabledElement: HTMLElement;
describe('test Menu and MenuItem component', () => {
  beforeEach(() => {
    wrapper = render(generateMenu(testProps));
    menuElement = wrapper.getByTestId('defalutCont');
    activeElement = wrapper.getByText('active');
    disabledElement = wrapper.getByText('disabled');
  })
  it('should render corrent Menu and MenuItem based on default props', () => {
    expect(menuElement).toBeInTheDocument()
    expect(menuElement).toHaveClass('fly-menu menu-horizontal test');
    // 判定元素下的子元素li的个数
    expect(menuElement.getElementsByTagName('li').length).toEqual(3)
    expect(activeElement).toHaveClass('active');
    expect(disabledElement).toHaveClass('is-disabled');
  })
  it('click item should change active and call the right callback', () => {
    const threeItem = wrapper.getByText('xyz');
    fireEvent.click(threeItem);
    expect(threeItem).toHaveClass('menu-item active');
        // toHaveBeenCalledWith 函数被调用时的参数
        expect(testProps.onSelect).toHaveBeenCalledWith(2)


    fireEvent.click(disabledElement);
    expect(disabledElement).not.toHaveClass('active');
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