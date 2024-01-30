import Button from "./Button";

export default function Sidebar( {onStartAddProject, projects, onSelectProject, selectedProjectId}) {


    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject} dark label="+ Add Project" />
            </div>
            <ul className="list-disc pl-5 mt-5">
               {projects.map(project => {

                let style = "w-full text-left hover:text-stone-400 my-2 rounded-md";

                if (project.id === selectedProjectId) {
                    style += " bg-stone-800 text-stone-200"
                }
                else {
                    style += " text-stone-200"
                }
                return (
                    <li key={project.id}>
                        <button 
                        onClick={() => onSelectProject(project.id)}
                        className={style}> 
                        {project.title}
                        </button>
                    </li>

                )
               })}
            </ul>
        </aside>
    )
}