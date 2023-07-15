import '../styles/App.css';
import { useContext, useEffect } from 'react'
import { MissionContexte } from '../ctxt/mission';
import AffichagePjs from './AffichagePjs';

function App() {
  const { mission } = useContext(MissionContexte)

  useEffect(() => {
    document.title = 'Mission Extrémis'
  }, [])

  return (
    <div className="principal">
      <div className="deroulementMission">
        <AffichagePjs className="persosEnMission">
        </AffichagePjs>
      </div>
    </div>
  );
}

export default App;
