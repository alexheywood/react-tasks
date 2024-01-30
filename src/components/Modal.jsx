import {createPortal} from 'react-dom';
import {forwardRef, useImperativeHandle, useRef } from 'react';
import Button from './Button';


const Modal = forwardRef(function Modal({children}, ref)
{
    const dialog = useRef();

    useImperativeHandle(ref, () =>
    {
        return {
            open() {
                dialog.current.showModal();
            }
        }
    });



    return (
         createPortal(
         <dialog className="backdrop:bg-stone-900/90 p-5 rounded-md shadow-md" ref={dialog}>
            {children}
            <form method="dialog" className="mt-4 text-right">
                <Button label="Close" dark />
            </form>
        </dialog>,
        document.getElementById('modal-root'))
    )
});

export default Modal;