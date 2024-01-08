import './search.css'
import {Link} from 'react-router-dom'


const Search = () => {
  return(
    <>
    <h1 className='search-title'>Search</h1>
    <div className='search'>
      <input type="text" placeholder='Search' className="search-bar"/>
      <Link to="/" className='go-button'>Go</Link>
    </div>
    </>
  )
}

export default Search;