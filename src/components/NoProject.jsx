import image from '../assets/no-projects.png'
import Button from './Button'

export default function NoProject( {onStartAddProject} ) {
    return (
        <>
            <div className="mt-24 text-center w-2/3">
                <img src={image} alt="An empty task list." className="w-16 h-16 object-contain mx-auto"/>
                <h2 className="text-xl font-bold text-stone-600 my-4">
                    No project selected
                </h2>
                <p className="text-stone-400 mb-4">
                    Select a project or get started with a new one.
                </p>
                <p className="mt-8">
                    <Button onClick={onStartAddProject} label="Create a new project" />
                </p>

            </div>
        </>
    )
}