import './positions.css'
import PositionData from '../jsons/positions.json'

const Positions = () => {
  return(
    <>
    {
    PositionData.map(position => (
      <img src={position.cover}/>
    ))};
    </>
  )
}

export default Positions;