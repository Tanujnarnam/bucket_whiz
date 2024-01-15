import { useState } from 'react'
import {Link} from 'react-router-dom'
import './search.css'


const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = event => {
    setSearchValue(event.target.value)
  }

  return(
    <>
    <h1 className='search-title'>Search</h1>
    <div className='search'>
      <input type="text" placeholder='Search for players' value={searchValue} onChange={handleSearchChange} className="search-bar"/>
      <Link to={`/data?search=${encodeURIComponent(searchValue)}`} className='go-button'>Go</Link>
    </div>
    </>
  )
}

export default Search;