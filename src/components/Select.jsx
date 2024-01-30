import userData from '../../users.json';
import {forwardRef, useState } from 'react';


const Select = forwardRef(function Input({label, textarea, ...props}, ref) {

    const [users, setUsers] = useState({ ...userData});

    const styles = "w-full p-1 border-b-2 rounded-md border-stone-300 bg-stone-200 text-stone-600 focus:outline-none focus:border-stone-600";
    return (
        <p className="flex flex-col gap-3 my-4">
        <label className="text-sm uppercase font-bold text-stone-800">{label}</label>
                        
        <select ref={ref} name={label} id={label} className="bg-stone-200 p-2 rounded-md">
                    {users.employees.map(user => {
                        return (

                            <option key={user.fullName} value={user.fullName}>{user.fullName}</option>
                        )
                    })}
        </select>
        </p>
    )
})

export default Select;