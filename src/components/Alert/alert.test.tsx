import React from 'react';
import { render ,fireEvent} from '@testing-library/react'
import Alert,{AlertProps} from './alert'

const testDefaultProps:AlertProps={
  message:"Success Text",
  type:"success",
  closable:true,
  showIcon:true,
  closeText:'close btn text'
}
describe('test Alert component',()=>{
  it('should render the default alert',()=>{
    // 在元素上添加一个 data-testid
    const wrapper = render(<Alert data-testid="defalut" message="defalut Text"/>);
    // 使用 getByTestId 方法获取该 data-testid
    const element = wrapper.getByTestId('defalut');
    const elementText = wrapper.getByText('defalut Text');
    expect(element).toBeInTheDocument();
    expect(elementText).toBeInTheDocument();
    expect(element).toHaveClass('alert alert-info');

  })

  it('should render the default alert on different props',()=>{
    const wrapper = render(<Alert data-testid="diffProps" {...testDefaultProps}/>);
    const element = wrapper.getByTestId('diffProps');
    // 查找关闭按钮
    const closeElement = wrapper.getByText('close btn text');
    expect(element).toHaveClass('alert alert-success alert-close alert-close-text');
    // 点击关闭按钮
    fireEvent.click(closeElement)
    // 元素消失
    expect(element).not.toBeInTheDocument()
  })

})