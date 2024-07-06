import UserInput from '../reusables/input'

export default function Work({onClick}) {
    return (
        <>
            <section className="edit-work edit-section">
                <UserInput label="Company" type="text" id="company" placeholder="Company"/>
                <UserInput label="City" type="text" id="work-city" placeholder="City"/>
                <UserInput label="Job Role" type="text" id="role" placeholder="Job Role"/>
                <UserInput label="Start Year" type="number" id="start-work" placeholder="Starting Year" start="1950" end="2024"/>
                <UserInput label="End Year" type="number" id="end-work" placeholder="Ending Year" start="1950" end="2024"/>
                <button onClick={onClick}>Delete</button>
            </section>
        </>
    );
}