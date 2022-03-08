import React, {useState} from "react";

const UserForm = props =>{
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");

    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");

    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");

    const [confirmPassword, setConfirmPassword] = useState("")

    const [hasSubmittedForm, setHasSubmittedForm] = useState(false);
    const [confirmPasswordError, setConfirmPasswordError] = useState("");


    function createUser(e){
        e.preventDefault();
        // You'd apply validations before creating a user, but in this case we won't :)
        const newUser = {firstName, lastName, email, password}
        console.log("Welcome " + newUser);

        setHasSubmittedForm(true);
    }

    function formMessage(){
        if(hasSubmittedForm){
            return "Thanks for submitting the silly form! 8}"
        } else{
            return "Please submit the silly form 8{"
        }
    }
    //You could also use ternary operators in the form to do the same operationm
    //I.E:
    // {
    // hasBeenSubmitted ?
    // <h3> Thanks for submitting the silly form </h3> :
    // <h3> Please submit the silly form </h3>
    // } - You'd put this in plcae of the <h3>{formMessage()}</h3>

    function handleFirstName(){
        if(firstName.length < 1){
            setFirstNameError("First Name is required!");
        } else if(firstName.length < 2){
            setFirstNameError("First Name must be 2 or more characters!");
        } else{
            setFirstNameError("");
        }
    }

    function handleLastName(){
        if(lastName.length < 1){
            setLastNameError("Last name is required!")
        } else if(lastName.length < 2){
            setLastNameError("Last name must be 2 or more characters!")
        } else{
            setLastNameError("");
        }
    }

    function handleEmail(){
        if(email.length < 1){
            setEmailError("Email is required!")
        } else if(email.length < 2){
            setEmailError("Email must be 2 or more characters!")
        } else{
            setEmailError("");
        }
    }

    function handlePassword(){
        if(password.length < 1){
            setPasswordError("Password is required!")
        } else if(password.length < 2){
            setPasswordError("Last name must be 2 or more characters!")
        } else{
            setPasswordError("");
        }
    }

    function handleConfirmPassword(){
        if(password != confirmPassword){
            console.log("*giggles*");
            setConfirmPasswordError("Passwords don't match 8-{ ")
        } else{
            setConfirmPasswordError("");
        }
    }


    return(
        <form /*onSubmit={createUser}*/ onSubmit={(e) => {
            createUser(e);
            handleFirstName();
            handleLastName();
            handleEmail();
            handlePassword();
            handleConfirmPassword();
            }
        }>
            <h3>{ formMessage() }</h3>
            <div>
                <label>First Name: </label>
                <input type="text" onChange={(e) => setFirstName(e.target.value)}/>
                {
                    firstNameError ? //Utilizing fact that empty strings are 'falsy'
                    <p style={{color:'red'}}>{firstNameError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Last Name: </label>
                <input type="text" onChange={(e) => setLastName(e.target.value)}/>
                {
                    lastNameError ? //Utilizing fact that empty strings are 'falsy'
                    <p style={{color:'red'}}>{lastNameError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Email: </label>
                <input type="email" onChange={(e) => setEmail(e.target.value)}/>
                {
                    emailError ? //Utilizing fact that empty strings are 'falsy'
                    <p style={{color:'red'}}>{emailError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="password" onChange={(e) => setPassword(e.target.value)}/>
                {
                    passwordError ? //Utilizing fact that empty strings are 'falsy'
                    <p style={{color:'red'}}>{passwordError}</p> :
                    ''
                }
                {
                    confirmPasswordError ? //Utilizing fact that empty strings are 'falsy'
                    <p style={{color:'red'}}>{confirmPasswordError}</p> :
                    ''
                }
            </div>
            <div>
                <label>Confirm Password: </label>
                <input type="password" onChange={(e) => setConfirmPassword(e.target.value)}/>
            </div>
            <input type="submit" value="Submit the form"/>

            <div>
            <p>First Name: {firstName}</p>
            <p>Last Name: {lastName}</p>
            <p>Email: {email}</p>
            <p>Password: {password}</p>
            <p>Confirm Password: {confirmPassword}</p>
        </div>
        </form>
    )
}


export default UserForm;