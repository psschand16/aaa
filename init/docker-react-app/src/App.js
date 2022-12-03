import logo from './logo.svg';
import './App.css';
import * as React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
   
        <p>
        <div>{process.env.REACT_APP_name && <>The name is {process.env.REACT_APP_name}</>}</div>
        <div>{process.env.REACT_APP_url && <>The url is {process.env.REACT_APP_url}</>}</div>
          
           -------------
           I was changed! 
           -------------
    
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React <br></br>
          {process.env.REACT_APP_URL_HOST}

        </a>

        <div>{process.env.REACT_APP_count && <>The count is {process.env.REACT_APP_count}</>}</div>
         <div>{process.env.REACT_APP_word && <>The word is {process.env.REACT_APP_word}</>}</div>
        {/* <div>
          {process.env.REACT_APP_word == null ? <>No word at all</> : <>word of {process.env.REACT_APP_word}</>}
        </div> */}


        <p> O’er all the hilltops<br></br>
            Is quiet now,<br></br>
            In all the treetops<br></br>
            Hearest thou<br></br>
            Hardly a breath;<br></br>
            The birds are asleep in the trees:<br></br>
            Wait, soon like these<br></br>
            Thou too shalt rest.
        </p>
      </header>
    </div>
  );
}

export default App;
