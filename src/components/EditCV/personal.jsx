//import Button from '../reusables/button'
import UserInput from '../reusables/input'
export default function PersonalInfo() {
    return (
        <>
            <section className="edit-personal edit-section">
                <UserInput label="First Name" type="text" id="first-name" placeholder="First Name"/>
                <UserInput label="Last Name" type="text" id="last-name" placeholder="Last Name"/>
                <UserInput label="Job" type="text" id="job" placeholder="Your Job"/>
                <UserInput label="Address" type="text" id="address" placeholder="Your Address"/>
                <UserInput label="Email" type="email" id="email" placeholder="Your Email Address"/>
                <UserInput label="Contact Numbe" type="text" id="contact-number" placeholder="Your Contact Number"/>
            </section>
        </>
    );
}