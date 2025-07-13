import React from 'react'

function SearchBar({onSearch}) {
    return <>
        <input type="text" placeholder="Search by name..." onChange={(e) => onSearch(e.target.value)} className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"/>
    </>
}

export default SearchBar