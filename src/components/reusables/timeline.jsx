export default function Timeline({start, end, place, programRole, city}) {
    return (
        <>
            <div className="date-time">
                <p>{start} - {end}</p>
            </div>
            <div className="company-position">
                <p>{place}</p>
                <p>{programRole}</p>
                <p>{city}</p>
            </div>
        </>
    );
}