import Button from './Button'
import { FaSearch } from 'react-icons/fa'
import { useState } from 'react'

const Search = ({ onClick }) => {
    const [searchField, setSearch] = useState('')

    return (
        <div className='form-control'>
            <input type='text' placeholder='Filter by Sport' onChange={(e) => setSearch(e.target.value)}/>
            <Button 
                text={<FaSearch />}
                onClick={() => onClick(searchField)}
            />
        </div>
    )
}

export default Search
