export default function Timeline({dates, details}) {
    return (
        <>
            <div className="date-time">
                {dates}
            </div>
            <div className="company-position">
                {details}
            </div>
        </>
    );
}