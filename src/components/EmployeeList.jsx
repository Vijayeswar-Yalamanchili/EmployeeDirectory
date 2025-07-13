import React from 'react'

function EmployeeList({ employees, onEdit, onDelete }) {
    return <>
        <div>
            <h2 className="text-xl font-semibold mb-4">Employee List</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {employees.map(emp => (
                <div key={emp.id} className="bg-white p-4 shadow rounded-lg border">
                    <h3 className="text-lg font-bold text-gray-800">{emp.name}</h3>
                    <p className="text-gray-600">Dept: {emp.department}</p>
                    <p className="text-gray-500">Email: {emp.email}</p>
                    <p className="text-gray-500">Role: {emp.role}</p>
                    <div className='justify-between flex gap-2 max'>
                        <button onClick={() => onEdit(emp)} className="mt-3 bg-gray-500 hover:bg-indigo-600 text-white px-3 py-1 rounded">Edit</button>
                        <button onClick={() => onDelete(emp.id)} className="mt-3 bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded">Delete</button>
                    </div>
                </div>
            ))}
            </div>
        </div>
    </>
}

export default EmployeeList