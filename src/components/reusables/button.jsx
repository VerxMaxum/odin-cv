export default function Button({text, type, onClick}) {
    return (
        <div className="button-container">
            <button type={type} onClick={onClick}>{text}</button>
        </div>
    );
}