export default function Button({label, dark, children, ...props} ) {



    const styles = dark ? "px-4 text-stone-200 py-2 md:text-base rounded-md bg-stone-800 hover:bg-stone-200 hover:text-stone-800" : "px-4 text-stone-800 py-2 md:text-base rounded-md bg-stone-200 hover:bg-stone-800 hover:text-stone-50"
    return (
        <button {...props} className={styles}>
            {label}
        </button>
    )
}
