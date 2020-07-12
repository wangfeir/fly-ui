import React from 'react';
import Button,{ButtonType,ButtonSize} from './components/Button/button'
function App() {
  const a ='123'
  if(a==='123'){}
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
      <div>
      <Button disabled>ButtonSize.Middle</Button>
        <Button size={ButtonSize.Large}>ButtonSize.Large</Button>
        <Button size={ButtonSize.Small}>ButtonSize.Small</Button>
        <Button btnType={ButtonType.Danger}>ButtonType.Danger</Button>
        <Button btnType={ButtonType.Default}>ButtonType.Default</Button>
        <Button btnType={ButtonType.Primary}>ButtonType.Primary</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>Button Link disabled</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" >Button Link</Button>
      </div>
    </div>
  );
}

export default App;
