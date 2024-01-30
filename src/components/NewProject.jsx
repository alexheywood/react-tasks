import Button from "./Button";
import Input from "./Input";
import { useRef } from 'react';

export default function NewProject({onAdd}) {

    const title = useRef();
    const description = useRef();
    const date = useRef();

    const handleSave = () => {
        const enteredTitle = title.current.value;
        const enteredDesc = description.current.value;
        const enteredDate = date.current.value;

        onAdd({
            title: enteredTitle,
            description: enteredDesc,
            date: enteredDate
        });
    }


    return (
        <div className="w-[35rem] mt-16">
            <menu className="flex gap-4 items-center justify-end my-4">
            <li>
                <Button label="Cancel" dark />
            </li>
            <li>
                <Button onClick={handleSave} label="Save" />
            </li>
            </menu>
            <div>
               <Input type="text" ref={title} label="Title" />
               <Input ref={description} label="Description" textarea />
               <Input type="date" ref={date} label="Date" />
            </div>
        </div>
    )
}