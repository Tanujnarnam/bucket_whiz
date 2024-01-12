import './positions.css'
import {useState, useEffect} from 'react'
import {Link} from 'react-router-dom'
import positionData from '../jsons/positions.json'

const Positions = () => {
  const [positions, setPositions] = useState([]);

  useEffect(() => {
    setPositions(positionData.positions)
  }, []
  )

  return(
    <>
      <h1 className='pos-title'>Positions</h1>
      <div className="positions-div">
      {
        positions.map((position) => (
          <div className='square-div'> 
            <img src={position.cover} alt="position" className='pos-images'/>
            <div className='overlay'>
              <h1 className="position-text">{position.full_name}</h1>
              <Link className="position-btn" to={`/data?pos=${encodeURIComponent(position.position)}`}>GO</Link>
            </div>
          </div>
        ))
      }
      </div>
    </>
  )
}

export default Positions;