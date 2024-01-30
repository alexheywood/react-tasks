import Button from "./Button";
import Input from "./Input";
import { useRef, useEffect } from 'react';
import Modal from "./Modal";
import Select from "./Select";

export default function NewProject({ onAdd, onCancel }) {

    const title = useRef();
    const description = useRef();
    const date = useRef();
    const modal = useRef();
    const user = useRef();

    const handleSave = () => {
        const enteredTitle = title.current.value;
        const enteredDesc = description.current.value;
        const enteredDate = date.current.value;
        const enteredUser = user.current.value;

        if (
            enteredTitle.trim() === '' ||
            enteredDesc.trim() === '' ||
            enteredDate.trim() === '' ||
            enteredUser.trim() === ''
        ) {
            // open modal
            modal.current.open();
        }
        else {
            onAdd({
                title: enteredTitle,
                description: enteredDesc,
                date: enteredDate,
                user: enteredUser
            });
        }
    }

    return (
        <div className="w-[35rem] mt-16">
            <Modal ref={modal}>
                <h2 className="text-xl font-bold text-stone-600 my-4">Invalid input!</h2>
                <p>Oops... looks like you forgot something important?</p>
                <p>Please ensure you have entered valid details in your submission.</p>
            </Modal>
            <menu className="flex gap-4 items-center justify-end my-4">
                <li>
                    <Button onClick={onCancel} label="Cancel" dark />
                </li>
                <li>
                    <Button onClick={handleSave} label="Save" />
                </li>
            </menu>
            <div>
                <Input type="text" ref={title} label="Title" />
                <Input ref={description} label="Description" textarea />
                <Input type="date" ref={date} label="Date" />
                <Select ref={user} label="Assign User" />
            </div>
        </div>
    )
}