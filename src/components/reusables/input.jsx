export default function UserInput({label, type, id, placeholder, start, end, onChange}) {
    if(start && end) {
        return (
            <>
                <label htmlFor={id}>{label}</label>
                <input id={id} type={type} placeholder={placeholder} name={id} min={start} max={end} onChange={onChange}/>
            </>
        );
    }
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input id={id} type={type} placeholder={placeholder} name={id}
            onChange={onChange}/>
        </>
    );
}