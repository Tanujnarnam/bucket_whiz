import './table.css'
import {useState, useEffect} from 'react'


const Table = () => {
  const [players, setPlayers] = useState([]);


  useEffect(() => {
    const url = 'https://bucket-whiz-backend.onrender.com/api/v1/buckets';
    fetch(url, {
        mode: 'no-cors',
    })
      .then((response)=>response.json())
      .then((data) => {
        console.log('This is your data', data);
        setPlayers(data);
      });
  }, []);
  const str = JSON.stringify(players);
  return(
    <h1>{str}</h1>
  )
};

export default Table;

