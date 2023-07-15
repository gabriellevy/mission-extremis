import logo from './logo.svg';
import './App.css';
import { useContext, useEffect } from 'react'
import { MissionContexte } from './ctxt/mission';

function App() {
  const { mission } = useContext(MissionContexte)

  useEffect(() => {
    document.title = 'Mission Extrémis'
  }, [])

  return (
    <div className="App">
      <span mission={mission} />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;
