import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import {PieChartOutlined } from '@ant-design/icons';

import Menu from './menu'
import MenuItem from './menuItem'
import SubMenu from './subMenu'

const defaultMenu = () => (
  <Menu defaultIndex="1">
    <MenuItem >
    itme 1
  </MenuItem>
    <MenuItem >
      itme 2
  </MenuItem >
    <MenuItem disabled>
      itme 3
  </MenuItem>
  </Menu>
)

const subMenuMenu = () =>(
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
)
const verticalMenu = () =>(
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
)
// const buttonWithSize = () => (
//   <>
//     <Button size={ButtonSize.Large}> large button </Button>

//     <Button size={ButtonSize.Middle}> middle button </Button>

//     <Button size={ButtonSize.Small}> small button </Button>
//   </>
// )

// const buttonWithType = () => (
//   <>
//     <Button btnType={ButtonType.Primary}> primary button </Button>
//     <Button btnType={ButtonType.Danger}> danger button </Button>
//     <Button btnType={ButtonType.Link} href="https://google.com"> link button </Button>
//   </>
// )
// const buttonDisabledStatus = () => (
//   <>
//     <Button btnType={ButtonType.Primary} disabled> primary button </Button>
//     <Button btnType={ButtonType.Danger} disabled> danger button </Button>
//     <Button btnType={ButtonType.Link} href="https://google.com" disabled> link button </Button>
//   </>
// )

storiesOf('Menu Component', module)
  .add('Menu', defaultMenu)
  .add('subMenu', subMenuMenu)
  .add('verticalMenu', verticalMenu)
  
  // .add('不同尺寸的 Button', buttonWithSize)
  // .add('不同类型的 Button', buttonWithType)
  // .add('disabled Button', buttonDisabledStatus)