import UserInput from '../reusables/input';

export default function Education({onClick}) {
    return (
        <>
            <section className="edit-education edit-section">
                <UserInput label="School" type="text" id="school" placeholder="School"/>
                <UserInput label="City" type="text" id="city" placeholder="City"/>
                <UserInput label="College Program" type="text" id="program" placeholder="College Program"/>
                <UserInput label="Start Year" type="number" id="start-educ" placeholder="Starting Year" start="1950" end="2020"/>
                <UserInput label="End Year" type="number" id="end-educ" placeholder="Ending Year" start="1950" end="2020"/>
                <button onClick={onClick}>Delete</button>
            </section>
        </>
    );
}