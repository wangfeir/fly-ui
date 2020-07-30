import React from 'react';
import { render, fireEvent,RenderResult } from '@testing-library/react'
import Tabs, { TabsProps } from './tabs'
import TabPane from './tabPane'
import { PieChartOutlined } from '@ant-design/icons';

const testProps = {
  defaultActiveKey: '1'
}
const generateTabs = (props: TabsProps) => {
  return (
    <Tabs defaultActiveKey="1x" data-testid="defalutTabs">
      <TabPane tab="啊啊啊啊" key="1x" icon={<PieChartOutlined />} >
        <p>Content of Tab Pane 1</p>
      </TabPane>
      <TabPane tab="啊啊啊啊2" key="2x" disabled>
        <p>Content of Tab Pane 2</p>
      </TabPane>
      <TabPane tab="啊啊啊啊1" key="3x">
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
})