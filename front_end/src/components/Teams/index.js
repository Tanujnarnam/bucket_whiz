import './teams.css';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import teamData from '../jsons/teams.json'


const Teams = () => {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    setTeams(teamData.teams)
  }, []
  )

  return(
    <>
      <h1 className='team-title'>Teams</h1>
      <div className="teams-div">
        {
          teams.map(team => (
            <div className='square-div'> 
              <img src={`../teams/${team.short}.png`} alt="team" className='team-images'/>
              <div className='overlay'>
                <h1 className="team-text">{team.team}</h1>
                <Link className="team-btn" to={`/data?team=${encodeURIComponent(team.short)}`}>GO</Link>
              </div>
            </div>
          ))
        }
      </div>
    </>
  )
};

export default Teams;