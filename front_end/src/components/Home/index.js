import './home.css';
import {Link} from 'react-router-dom'
import silhouette from '../../assets/images/basketball_silhouette.png';

const Home = () => {
  return(
    <>
     <div class="text">
      <img src={silhouette} alt="Sil"/>
      <h1>Welcome to Bucket Whiz!</h1>
      <p>Your Ultimate NBA Player Stats Hub!</p>
      <Link to="/teams" className='flat-button'>Get Started</Link>
     </div>
    </>
  )
};

export default Home;