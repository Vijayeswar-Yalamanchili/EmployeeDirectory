import React, { useState } from 'react'
import EmployeeList from './components/EmployeeList'
import EmployeeForm from './components/EmployeeForm'
import FilterSort from './components/FilterSort'
import SearchBar from './components/SearchBar'
import Footer from './components/Footer'

function App() {

  const initialEmployees = [
    { id: 1, name: "Alice Johnson", department: "HR", role: "Manager", email: "alice@gmail.com" },
    { id: 2, name: "Bob Smith", department: "Engineering", role: "Developer", email: "bob@gmail.com" },
    { id: 3, name: "Carol White", department: "Marketing", role: "Analyst", email: "carol@gmail.com" },
  ]
  
  const [employees, setEmployees] = useState(initialEmployees)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterDept, setFilterDept] = useState('')
  const [sortKey, setSortKey] = useState('')
  const [selected, setSelected] = useState(null)

  const handleSearch = (term) => setSearchTerm(term.toLowerCase())

  const handleFilter = (dept) => setFilterDept(dept)

  const handleSort = (key) => setSortKey(key)

  const handleSubmit = (formData) => {
    if (formData.id) {
      setEmployees(prev =>prev.map(emp => (emp.id === formData.id ? formData : emp)))
    } else {
      setEmployees(prev => [...prev,{ ...formData, id: Date.now() }])
    }
    setSelected(null)
  }

  const filtered = employees
    .filter(emp => emp.name.toLowerCase().includes(searchTerm))
    .filter(emp => !filterDept || emp.department === filterDept)
    .sort((a, b) => {
      if (sortKey === 'name') return a.name.localeCompare(b.name);
      if (sortKey === 'department') return a.department.localeCompare(b.department);
      if (sortKey === 'role') return a.role.localeCompare(b.role);
      return 0
    }
  )

  const handleDelete = (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this employee?");
    if (confirmDelete) {
      setEmployees(prev => prev.filter(emp => emp.id !== id));
    }
  }

  return <>
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-6 text-center text-indigo-700">Employee Directory</h1>
        <div className="flex flex-col gap-4 mb-6">          
          <div className="flex flex-row gap-32 mb-6">
            <SearchBar onSearch={handleSearch} />
            <FilterSort onFilter={handleFilter} onSort={handleSort} />            
          </div>
          <EmployeeForm onSubmit={handleSubmit} selected={selected} />
        </div>
        <EmployeeList employees={filtered} onEdit={setSelected} onDelete={handleDelete}/>
      </div>
      <Footer/>
    </div>
  </>
}

export default App