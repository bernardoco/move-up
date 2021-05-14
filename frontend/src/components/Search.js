const Search = ({ onClick }) => {
    return (
        <div className='form-control'>
            <input type='text' placeholder='Filter by Sport' onChange={(e) => onClick(e.target.value)}/>
        </div>
    )
}

export default Search
