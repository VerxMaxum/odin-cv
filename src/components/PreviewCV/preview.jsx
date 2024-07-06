import PreviewPersonal from './previewPersonal';
import PreviewSections from './previewSections'

export default function Preview({fname, lname, job, address, email, contact, timelines1, timelines2}) {
    return (
        <>
            <h1>About Me</h1>
            <PreviewPersonal
                fname={fname}
                lname={lname}
                job={job}
                address={address}
                email={email}
                contact={contact}
            />
            <h1>Education</h1>
            <PreviewSections timeline={timelines1}/>
            <h1>Work Experiences</h1>
            <PreviewSections timeline={timelines2}/>
        </>
    );
}