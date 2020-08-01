import React from 'react';
import { render, fireEvent,RenderResult } from '@testing-library/react'
import Tabs, { TabsProps } from './tabs'
import TabPane from './tabPane'
import { PieChartOutlined } from '@ant-design/icons';

const testProps = {
  defaultActiveKey: '1'
}
const testSizeProps:TabsProps = {
  size:'large',
  defaultActiveKey: '1x',
}
const generateTabs = (props: TabsProps) => {
  return (
    <Tabs defaultActiveKey="1x" data-testid="defalutTabs">
      <TabPane tab="啊啊啊啊" key="1x" icon={<PieChartOutlined />} data-testid="tabPane1">
        <p>Content of Tab Pane 1</p>
      </TabPane>
      <TabPane tab="啊啊啊啊2" key="2x" disabled  data-testid="tabPane2">
        <p>Content of Tab Pane 2</p>
      </TabPane>
      <TabPane tab="啊啊啊啊1" key="3x"  data-testid="tabPane3">
        <p>Content of Tab Pane 3</p>
      </TabPane>
    </Tabs>
  )
}
const generateSizeTabs = (props: TabsProps) => {
  return (
    <Tabs data-testid="defalutTabs" {...props}>
      <TabPane tab="啊啊啊啊" key="1x" icon={<PieChartOutlined />} data-testid="tabPane1">
        <p>Content of Tab Pane 1</p>
      </TabPane>
      <TabPane tab="啊啊啊啊2" key="2x" disabled  data-testid="tabPane2">
        <p>Content of Tab Pane 2</p>
      </TabPane>
      <TabPane tab="啊啊啊啊1" key="3x"  data-testid="tabPane3">
        <p>Content of Tab Pane 3</p>
      </TabPane>
    </Tabs>
  )
}
let warapper:RenderResult,menuElement:HTMLElement;
describe('test Tabs and TabPane component',()=>{
  beforeEach(()=>{
    warapper = render(generateTabs(testProps));
    menuElement = warapper.getByTestId('defalutTabs');
  })
  it('should render Tabs and TabPane on default props',()=>{
    expect(menuElement).toBeInTheDocument();
    expect(menuElement).toHaveClass('fly-tabs')
  })
  it('test TabPane and defaultActive',()=>{
   const childrenElement = warapper.getByTestId('tabPane1');
   expect(childrenElement).toBeInTheDocument();
  // 测试默认选中功能
   expect(childrenElement).toHaveClass('active')
  })
  it('test TabPane click disabled',()=>{
    const childrenElement = warapper.getByTestId('tabPane2');
    expect(childrenElement).toHaveClass('is-disabled');
    fireEvent.click(childrenElement);
    expect(childrenElement).not.toHaveClass('active');
  })

})

describe('test Tabs size component',()=>{
  it('should render Tabs on props',()=>{
    warapper = render(generateSizeTabs(testSizeProps));
    menuElement = warapper.getByTestId('defalutTabs');
    
    expect(menuElement).toHaveClass('tabs-large')
  })
})