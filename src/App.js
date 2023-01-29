import logo from './logo.svg';
import './App.css';
import {useRef, useState} from 'react'

function App() {
  const Ref = useRef('OK')
  const [iV, iVC] = useState('')
  const oCH = (e) => {
    iVC(e.target.value)
  }
    
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> (not only) and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {iV === "Yes" ? null : <div className='modal-open'><input ref={Ref} onChange={oCH} value={iV} className='mod' placeholder='Do you like React?'/></div> }
    </div>
  );
}


export default App;
