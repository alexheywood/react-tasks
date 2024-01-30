import Button from "./Button";

export default function Sidebar( {onStartAddProject}) {


    return (
        <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
            <h2 className="mb-8 uppercase font-bold md:text-xl text-stone-200">Your Projects</h2>
            <div>
                <Button onClick={onStartAddProject} dark label="+ Add Project" />
            </div>
            <ul>
                <li>Project One</li>
            </ul>
        </aside>
    )
}