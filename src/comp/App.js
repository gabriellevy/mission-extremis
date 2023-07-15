import '../styles/App.css';
import { useContext, useEffect } from 'react'
import { MissionContexte } from '../ctxt/mission';

function App() {
  const { mission } = useContext(MissionContexte)

  useEffect(() => {
    document.title = 'Mission Extrémis'
  }, [])

  return (
    <div className="App">
      <span mission={mission} />
    </div>
  );
}

export default App;
