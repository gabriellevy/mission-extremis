import React, { useState, createContext } from 'react'
import { lstPjs } from '../donnees/lstPjs'

export const MissionContexte = createContext()

export const MissionProvider = ({ children }) => {
    const [mission, setMission] = useState({
        // valeurs de base des caracs
        pjs: lstPjs,
    })

    return (
        <MissionContexte.Provider value={{ mission, setMission }}>
          {children}
        </MissionContexte.Provider>
      )
    }