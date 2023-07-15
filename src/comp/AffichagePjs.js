import { useState, useEffect } from 'react'
import { useContext } from 'react'
import { MissionContexte } from '../ctxt/mission';
import Portrait from './Portrait';

function AffichagePjs() {
    const { mission } = useContext(MissionContexte)

    return (
        <div>
          <ul className="lstCoteries_ul">
            {mission.pjs.map(
              ({
                titre,
                portrait,
                fonds,
                page,
                niveau_richesse,
                affiche,
                voies,
                modifs_caracs,
                modifs_comps,
                objets,
                }) =>
                (
                  <Portrait
                    key={titre}
                    titre={titre}
                    portrait={portrait}
                    niveau_richesse={niveau_richesse}
                    fonds={fonds}
                    page={page}
                    voies={voies}
                    modifs_caracs={modifs_caracs}
                    modifs_comps={modifs_comps}
                    objets={objets}
                  />
                )
            )}
          </ul>
        </div>
      )
    }
    
    export default AffichagePjs