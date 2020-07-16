import React from 'react';
import Button,{ButtonType,ButtonSize} from './components/Button/button'
import Alert from './components/Alert/alert'
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
        <Button size={ButtonSize.Large} onClick={()=>{alert(123123213)}}>ButtonSize.Large</Button>
        <Button size={ButtonSize.Small}>ButtonSize.Small</Button>
        <Button btnType={ButtonType.Danger}>ButtonType.Danger</Button>
        <Button btnType={ButtonType.Default}>ButtonType.Default</Button>
        <Button btnType={ButtonType.Primary}>ButtonType.Primary</Button>
        <Button btnType={ButtonType.Link} href="http://www.baidu.com" disabled>Button Link disabled</Button>
        <Button btnType={ButtonType.Link} target="_blank" href="http://www.baidu.com" >Button Link</Button>
      </div>

      <div>
      <Alert message="Success Text" type="success"  closeText="close btn"/>
      <Alert message="Success Text" type="success" closable />
      <Alert showIcon message="Info Text" type="info"  />
      <Alert message="Warning Text" type="warning" />
      <Alert showIcon message="Error Text" type="error" />
      <Alert message="Error Text" description="Error contextError contextError contextError contextError contextError contextError context" type="error" />
      <Alert closable showIcon message="Error Text" description="Error contextError contextError contextError contextError contextError contextError context" type="error"/>
      <Alert closable message="Error Text" description="Error contextError contextError contextError contextError contextError contextError context" type="error" />
      
      <Alert showIcon message="Info Text" type="info"  />
      <Alert showIcon type="info" message="Info Text"  description="info context" />

      <Alert showIcon type="success" message="Success Text" closable />
      <Alert showIcon type="success"  message="Success Text" description="Success context" closable />
      
      <Alert showIcon type="error" message="error Text" closable />
      <Alert showIcon type="error"  message="error Text" description="error context" closable />
      
      <Alert showIcon type="warning" message="warning Text" closable />
      <Alert showIcon type="warning"  message="warning Text" description="warning context" closable />
      
      </div>
    </div>
  );
}

export default App;
