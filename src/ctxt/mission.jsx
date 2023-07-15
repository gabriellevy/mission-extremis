import React, { useState, createContext } from 'react'

export const MissionContexte = createContext()

export const MissionProvider = ({ children }) => {
    const [mission, setMission] = useState({
        // valeurs de base des caracs
        tmp: 0,
    })

    return (
        <MissionContexte.Provider value={{ mission, setMission }}>
          {children}
        </MissionContexte.Provider>
      )
    }