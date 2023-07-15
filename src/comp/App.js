import '../styles/App.css';
import { useContext, useEffect } from 'react'
import { MissionContexte } from '../ctxt/mission';

function App() {
  const { mission } = useContext(MissionContexte)

  useEffect(() => {
    document.title = 'Mission Extrémis'
  }, [])

  return (
    <div className="principal">
      <div className="deroulementMission">
        <div className="persosEnMission">
        </div>
      </div>
    </div>
  );
}

export default App;
