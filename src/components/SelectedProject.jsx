import Tasks from "./Tasks"

export default function SelectedProject({project, onAddTask, onDelete, onDeleteTask, tasks}) {

    const formattedDate = new Date(project.date).toLocaleDateString('en-uk', {

        year: 'numeric',
        month: 'short',
        day: 'numeric'
    })


    return (
        <div className="w-[35rem] mt-16">
            <header className=" mb-4 border-b-2 border-stone-300">
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-bold text-stone-600 mb-2">{project.title}</h1>
                    <button 
                    onClick={onDelete}
                    className="text-stone-600 border rounded-md p-1.5 hover:bg-stone-800 hover:text-stone-50">Delete</button>
                </div>
                <p className="mb-2 text-stone-400">
                    {formattedDate}
                </p>
                <p className="text-stone-600 whitespace-pre-wrap">
                    {project.description}
                </p>
                <p className="mb-4 text-sm mt-3 text-stone-900">
                    Assigned to: {project.user}
                </p>
            </header>
           <Tasks tasks={tasks} onAdd={onAddTask} onDelete={onDeleteTask}/>
        </div>
    )
}