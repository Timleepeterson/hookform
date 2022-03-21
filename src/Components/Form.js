import { useState } from "react";


const Form = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [passConfirm, setPassConfirm] = useState("");

    return (
        <div>    
            <form>
                <div>
                    <label htmlFor="firstName">First Name</label>
                    <input type="text" id="firstName" onChange={(e) => setFirstName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="lastName">Last Name</label>
                    <input type="text" id="lastName" onChange={(e) => setLastName(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <input type="text" id="email" onChange={(e) => setEmail(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" onChange={(e) => setPassword(e.target.value)}/>
                </div>
                <div>
                    <label htmlFor="passConfirm">Confirm Password</label>
                    <input type="password" id="passConfirm" onChange={(e) => setPassConfirm(e.target.value)}/>
                </div>
                </form>

            <h4>First Name: {firstName}</h4>
            <h4>Last Name: {lastName}</h4>
            <h4>Email: {email}</h4>
            <h4>Password: {password}</h4>
            <h4>Confirm Password: {passConfirm}</h4>
        </div>
    )
}

export default Form;