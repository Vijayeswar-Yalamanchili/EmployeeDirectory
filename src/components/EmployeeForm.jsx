import React, { useEffect, useState } from 'react'

function EmployeeForm({ onSubmit, selected }) {

    const [form, setForm] = useState({ id: null, name: '', department: '', role: '', email : '' })

    useEffect(() => {
        if (selected) setForm(selected)
    }, [selected])

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onSubmit(form)
        setForm({ id: null, name: '', department: '', role: '', email : ''  })
    }
    
    return <>
      <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded-lg border space-y-3">
        <h2 className="text-lg font-semibold">{form.id ? 'Edit Employee' : 'Add New Employee'}</h2>
        <div className='justify-between flex gap-4'>
          <input name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input name="department" placeholder="Department" value={form.department} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div className='justify-between flex gap-4'>
          <input name="role" placeholder="Role" value={form.role} onChange={handleChange} className="w-full p-2 border rounded" required />
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        {/* <input name="joiningDate" type="date" value={form.joiningDate} onChange={handleChange} className="w-full p-2 border rounded" require /> */}
        <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded" > {form.id ? 'Update' : 'Add'} </button>
      </form>
    </>
}

export default EmployeeForm