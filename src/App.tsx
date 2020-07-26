import React from 'react';
import Button, { ButtonType, ButtonSize } from './components/Button/button'
import Alert from './components/Alert/alert'
import MenuItem from './components/Menu/menuItem'
import Menu from './components/Menu/menu';
import SubMenu from './components/Menu/subMenu'
import {PieChartOutlined } from '@ant-design/icons';

function App() {
  const a = '123'
  if (a === '123') { }
  return (
    <div className="App">
      <header className="App-header">
        <h1>H1标签</h1>
        <h2>H2标签</h2>
        <h3>H3标签</h3>
        <h4>H4标签</h4>
        <h5>H5标签</h5>
        <h6>H6标签</h6>
        <code>
          我是code标签
          const code = '123'
        </code>
        {/* <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}


      </header>
      <Menu onSelect={(index) => { console.log(index) }} defaultIndex="2" style={{ width: 856 }}>
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
        <MenuItem >
          itme 2
          </MenuItem>
        <MenuItem >
          itme 3
          </MenuItem>
      </Menu>
      <Menu mode="vertical" onSelect={(index) => { console.log(index) }} style={{ width: 256 }}>
        <SubMenu title='itme 1' key="3"  icon={<PieChartOutlined />}>
          <MenuItem disabled key="1">1-1</MenuItem>
          <MenuItem  key="2">1-2</MenuItem>
            <SubMenu title='1-3' data-testid="child1-3">
              <MenuItem disabled>
                1-3-1
              </MenuItem>
              <MenuItem >
                1-3-2
              </MenuItem>
              <SubMenu title='1-3-3' >
              <MenuItem disabled>
                1-3-3-1
              </MenuItem>
              <MenuItem >
              1-3-3-1
              </MenuItem>
              <MenuItem>
              1-3-3-1
              </MenuItem>
            </SubMenu>
            </SubMenu>
        </SubMenu>
        <MenuItem key="1" icon={<PieChartOutlined />}>itme 2</MenuItem>
        <MenuItem key="2" >itme 3</MenuItem>
        {/* <p>aaa</p> */}
      </Menu>




      <div>


        <Button disabled>ButtonSize.Middle</Button>
        <Button size={ButtonSize.Large} onClick={() => { alert(123123213) }}>ButtonSize.Large</Button>
        <Button size={ButtonSize.Small}>ButtonSize.Small</Button>
        <Button btnType={ButtonType.Danger}>ButtonType.Danger</Button>
        <Button btnType={ButtonType.Default}>ButtonType.Default</Button>
        <Button btnType={ButtonType.Primary}>ButtonType.Primary</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>Button Link disabled</Button>
        <Button btnType={ButtonType.Link} target="_blank" href="http://www.baidu.com" >Button Link</Button>
      </div>

      <div>
        <Alert message="Success Text" id="11111" type="success" closeText="close btn" />
        <Alert message="Success Text" type="success" closable />
        <Alert showIcon message="Info Text" type="info" />
        <Alert message="Warning Text" type="warning" />
        <Alert showIcon message="Error Text" type="error" />
        <Alert closeText="close btn" message="Error Text" description="Error contextError contextError contextError contextError contextError contextError context" type="error" />
        <Alert closable showIcon message="Error Text" description="Error contextError contextError contextError contextError contextError contextError context" type="error" />
        <Alert closable message="Error Text" description="Error contextError contextError contextError contextError contextError contextError context" type="error" />

        <Alert showIcon message="Info Text" type="info" />
        <Alert showIcon type="info" message="Info Text" description="info context" />

        <Alert showIcon type="success" message="Success Text" closable />
        <Alert showIcon type="success" message="Success Text" description="Success context" closable />

        <Alert showIcon type="error" message="error Text" closable />
        <Alert showIcon type="error" message="error Text" description="error context" closable />

        <Alert showIcon type="warning" message="warning Text" closable />
        <Alert showIcon type="warning" message="warning Text" description="warning context" closable />

      </div>
    </div>
  );
}

export default App;
