import { useState } from 'react';

export default function NewTask( { onAdd}) {

    const [enteredTask, setEnteredTask] = useState('');

    function handleChange(event) {
        setEnteredTask(event.target.value);
    }

    function handleSubmit() {

        if(enteredTask.trim() === '') {
            
        }
        onAdd(enteredTask);
        setEnteredTask('');
    }

    return (
        <div className="flex items-center">
            <input onChange={handleChange} value={enteredTask} className="w-80 py-1 rounded-sm bg-stone-200" type="text">
            </input>
            <button onClick={handleSubmit} className=" text-stone-50 border p-1 rounded-r-md bg-stone-500 focus:border-stone-800 hover:bg-stone-800 hover:text-stone-50">Add Task</button>
        </div>

    )
}