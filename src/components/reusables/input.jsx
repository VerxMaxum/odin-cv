export default function UserInput({label, type, id, placeholder}) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={placeholder} name={id}/>
        </>
    );
}