import { useState } from 'react'
import './search.css'
import {Link} from 'react-router-dom'


const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = event => {
    setSearchValue(event.target.value)
  }

  const handleClick = () => {
    window.location.href = `/data?search=${encodeURIComponent(searchValue)}`;
  }

  return(
    <>
    <h1 className='search-title'>Search</h1>
    <div className='search'>
      <input type="text" placeholder='Search for players' value={searchValue} onChange={handleSearchChange} className="search-bar"/>
      <button onClick={handleClick} className='go-button'>Go</button>
    </div>
    </>
  )
}

export default Search;