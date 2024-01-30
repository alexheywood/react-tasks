import NewTask from "./NewTask"

export default function Tasks({ tasks, onAdd, onDelete}) {

    return (
        <section>
            <h2 className="text-2xl font-bold text-stone-700">Tasks</h2>
            <NewTask onAdd={onAdd} />
            {tasks?.length === 0 && (
                <p className="mb-4 text-stone-600">This project does not have any tasks yet.
                </p>
            )
            }
            {tasks?.length > 0 && (

                <ul className="rounded-md mt-4">
                    {tasks.map((task) => 
                    <li className="flex p-3 my-3 justify-between bg-stone-200 rounded-md" key={task.id}>
                        <span>
                            {task.text}
                        </span>
                        <button onClick={() => onDelete(task.id)} className="text-stone-700 hover:text-red-500">
                            Clear
                        </button>
                    </li>)}

                </ul>
            )}
        </section>
    )
}