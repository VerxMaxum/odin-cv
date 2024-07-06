import UserInput from '../reusables/input'

export default function Work({id, onClick, onChange, keyId}) {
    return (
        <>
            <section id={id} className="edit-work edit-section">
                <UserInput
                    label="Company"
                    type="text"
                    id={"company-" + keyId}
                    placeholder="Company"
                    onChange={onChange}
                />
                <UserInput
                    label="City"
                    type="text"
                    id={"work-city-" + keyId}
                    placeholder="City"
                    onChange={onChange}
                />
                <UserInput
                    label="Job Role"
                    type="text"
                    id={"role-" + keyId}
                    placeholder="Job Role"
                    onChange={onChange}
                />
                <UserInput
                    label="Start Year"
                    type="number"
                    id={"start-work-" + keyId}
                    placeholder="Starting Year"
                    start="1950" end="2024"
                    onChange={onChange}
                />
                <UserInput
                    label="End Year"
                    type="number"
                    id={"end-work-" + keyId}
                    placeholder="Ending Year"
                    start="1950" end="2024"
                    onChange={onChange}
                />
                <button onClick={onClick}>Delete</button>
            </section>
        </>
    );
}