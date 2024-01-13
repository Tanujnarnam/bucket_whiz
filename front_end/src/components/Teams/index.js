import './teams.css';
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import teamData from '../jsons/teams.json'


const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [searchQuery, setQuery] = useState('');

  const handleSearchChange = (event) => {
    setQuery(event.target.value)
  }

  useEffect(() => {
    setTeams((teamData.teams).filter((el) => {
      return el.team.toLowerCase().startsWith(searchQuery.toLowerCase());
    }));
  }, [searchQuery]
  )

  return(
    <>
      <div className='team-search'>
        <input type="text" placeholder='Search for teams' value={searchQuery} onChange={handleSearchChange} className="search-bar"/>
      </div>
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