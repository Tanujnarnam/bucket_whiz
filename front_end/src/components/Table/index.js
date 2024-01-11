import './table.css'
import axios from 'axios'
import {useState,useEffect} from 'react'


const Table = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [players, setPlayers] = useState([]);

  useEffect(()=>{

    const params = new URLSearchParams(window.location.search);
    const teamValue = params.get('team');
    const positionValue = params.get('pos');
    const searchValue = params.get('search');

    if(teamValue){
      axios.get(`https://bucket-whiz-backend.onrender.com/api/v1/buckets/team/${encodeURIComponent(teamValue)}`)
        .then(res => {
          setPlayers(res.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        })
    }
    else if(positionValue){
      axios.get(`https://bucket-whiz-backend.onrender.com/api/v1/buckets/pos/${encodeURIComponent(positionValue)}`)
        .then(res => {
          setPlayers(res.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        })
    }
    else if(searchValue){
      axios.get(`https://bucket-whiz-backend.onrender.com/api/v1/buckets/search/${encodeURIComponent(searchValue)}`)
        .then(res => {
           setPlayers(res.data);
           setLoading(false);
         })
         .catch(error => {
           setError(error);
           setLoading(false);
         })
    }
    else{
      axios.get(`https://bucket-whiz-backend.onrender.com/api/v1/buckets`)
        .then(res => {
          setPlayers(res.data);
          setLoading(false);
        })
        .catch(error => {
          setError(error);
          setLoading(false);
        })
    }
  }
  , []);

  if (loading) {
    return <p className='optional-text'>Loading...</p>;
  }

  if (error) {
    return <p className='optional-text'>Error: {error.message}</p>;
  }

  if (players.length === 0){
    return <p className='optional-text'>No such player in the NBA</p>;
  }

  return(
    <div className='table'>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Position</th>
            <th>Team</th>
            <th>MPG</th>
            <th>PPG</th>
            <th>RPG</th>
            <th>APG</th>
            <th>SPG</th>
            <th>TO</th>
            <th>BPG</th>
          </tr>
        </thead>
        <tbody>
          {
            players.map(player => (
              <tr key={player.player_name}>
                <td>{player.player_name}</td>
                <td>{player.player_position}</td>
                <td>{player.player_team}</td>
                <td>{player.player_minutes}</td>
                <td>{player.player_points}</td>
                <td>{player.player_rebounds}</td>
                <td>{player.player_assists}</td>
                <td>{player.player_steals}</td>
                <td>{player.player_turnovers}</td>
                <td>{player.player_blocks}</td>
              </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
};

export default Table;

