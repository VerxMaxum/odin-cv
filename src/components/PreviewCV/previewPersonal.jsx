export default function PreviewPersonal({fname, lname, job, address, email, contact}) {
    return (
        <>
            <section className="section-preview">
                <div className="pi-1">
                    <p>{fname + " "  + lname}</p>
                    <p>{job}</p>
                    <p>{address}</p>
                </div>
                <div className="pi-2">
                    <p>{email}</p>
                    <p>{contact}</p>
                </div>
            </section>
        </>
    );
}