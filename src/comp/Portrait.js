import '../styles/Portrait.css'
import { useContext } from 'react'
import { MissionContexte } from '../ctxt/mission';

function Portrait() {
    const { mission } = useContext(MissionContexte)
    const index = 0 // à récupéréer

    var portrait = mission.pjs[index].image
    
    return (
        <div>
            <img className="portrait_img" src={portrait} alt="portrait" />  
        </div>
      )
    }
    
export default Portrait