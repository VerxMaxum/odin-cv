import UserInput from '../reusables/input';

export default function Education({id, onClick, onChange, keyId}) {
    return (
        <>
            <section id={id} className="edit-education edit-section">
                <UserInput
                    label="School"
                    type="text"
                    id={"school-" + keyId}
                    placeholder="School"
                    onChange={onChange}
                />
                <UserInput
                    label="City"
                    type="text"
                    id={"city-" + keyId}
                    placeholder="City"
                    onChange={onChange}
                />
                <UserInput
                    label="College Program"
                    type="text"
                    id={"program-" + keyId}
                    placeholder="College Program"
                    onChange={onChange}
                />
                <UserInput
                    label="Start Year"
                    type="number"
                    id={"start-educ-" + keyId}
                    placeholder="Starting Year" start="1950" end="2020"
                    onChange={onChange}
                />
                <UserInput
                    label="End Year"
                    type="number"
                    id={"end-educ-" + keyId}
                    placeholder="Ending Year"
                    start="1950" end="2020"
                    onChange={onChange}
                />
                <button onClick={onClick}>Delete</button>
            </section>
        </>
    );
}