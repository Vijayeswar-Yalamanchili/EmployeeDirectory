import React from 'react'

function FilterSort({ onFilter, onSort }) {
  return <>
    <div className="flex flex-col sm:flex-row gap-4">
      <select onChange={(e) => onFilter(e.target.value)} className="p-2 border rounded w-full sm:w-auto">
        <option value="">All Departments</option>
        <option value="Engineering">Engineering</option>
        <option value="HR">HR</option>
        <option value="Marketing">Marketing</option>
      </select>

      <select onChange={(e) => onSort(e.target.value)} className="p-2 border rounded w-full sm:w-auto">
        <option value="">Sort By</option>
        <option value="name">Name</option>
        <option value="joiningDate">Joining Date</option>
      </select>
    </div>
  </>
}

export default FilterSort