import React from 'react'
import {render,fireEvent} from '@testing-library/react'
import Button ,{ ButtonProps,ButtonType,ButtonSize }from './button'


// test('our first react test case',()=>{
//   const warapper = render(<Button>Nice</Button>)
//   const element =warapper.queryByText('Nice')
//   // toBeTruthy 是否为true
//   expect(element).toBeTruthy()
//   // toBeInTheDocument 判定元素是否存在
//   expect(element).toBeInTheDocument()
// })
const testProps :ButtonProps = {
  btnType:ButtonType.Primary,
  size:ButtonSize.Large,
  className:'custom'
} 
const testLink :ButtonProps ={
  btnType:ButtonType.Link,
  size:ButtonSize.Small,
  href:'http://www.baidu.com'
} 
const testDisabled :ButtonProps ={
  btnType: ButtonType.Danger,//'danger',
  size:ButtonSize.Middle,   //'middle',
  disabled:true,
  onClick:jest.fn()
} 
describe('tes Button component',()=>{
  it('should render the correct default button',()=>{
    const wrapper = render(<Button>Nice</Button>);
    const element = wrapper.getByText('Nice');
    expect(element).toBeInTheDocument();
    // 判定element的标签名是否是Button 这里必须全部是大写
    expect(element.tagName).toEqual('BUTTON');
    // 判定元素上包含的class
    expect(element).toHaveClass('btn btn-default')
  })

  it('should render the correct component based on different props',()=>{
    const wrapper = render(<Button {...testProps}>Nice</Button>)
    const element = wrapper.getByText('Nice');
    // 判定该元素是否存在
    expect(element).toBeInTheDocument()
    // 判定元素是否包含以下class
    expect(element).toHaveClass('btn btn-primary btn-large custom')
  
  })
  // 检测一个link的btn并且存在href
  it('should render a link  when benType equals link and href is provided',()=>{
    const wrapper = render(<Button {...testLink}>Link</Button>)
    const element = wrapper.getByText('Link');

    expect(element).toBeInTheDocument();
    expect(element.tagName).toEqual('A');
    // 判定元素是否包含href的属性的两种方式
    expect(element).toHaveAttribute('href');
    expect(element.href).toBeTruthy()
    expect(element).toHaveClass('btn btn-link')
  })

  it('should render disabled button when disabled set to true',()=>{
    const wrapper = render(<Button {...testDisabled}>disabled</Button>)
    const element = wrapper.getByText('disabled');
    expect(element).toBeInTheDocument();
    expect(element).toHaveClass('btn btn-middle  btn-danger')

    // 判定disabled是否生效 两种方式都可以
    expect(element).toBeDisabled();
    expect(element.disabled).toBeTruthy();
    fireEvent.click(element)
    // toHaveBeenCalled 判定事件是否被执行 
    expect(testDisabled.onClick).not.toHaveBeenCalled();

  })


})