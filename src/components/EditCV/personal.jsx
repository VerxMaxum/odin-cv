//import Button from '../reusables/button'
import UserInput from '../reusables/input'
export default function PersonalInfo({onChange}) {
    return (
        <>
            <section className="edit-personal edit-section">
                <UserInput label="First Name" type="text" id="first-name" placeholder="First Name" onChange={onChange}/>
                <UserInput label="Last Name" type="text" id="last-name" placeholder="Last Name" onChange={onChange}/>
                <UserInput label="Job" type="text" id="job" placeholder="Your Job"
                 onChange={onChange}/>
                <UserInput label="Address" type="text" id="address" placeholder="Your Address" onChange={onChange}/>
                <UserInput label="Email" type="email" id="email" placeholder="Your Email Address" onChange={onChange}/>
                <UserInput label="Contact Number" type="text" id="contact-number" placeholder="Your Contact Number" onChange={onChange}/>
            </section>
        </>
    );
}