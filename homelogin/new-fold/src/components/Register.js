import { useState } from "react"

function Register(props) {

    const moveToSignInPage = () => {
        props.history.push('/signin')
    }

    const [userDetails, setUserDetails] = useState({ firstName: '', lastName: '', age: '', phoneNo: '', email: '',
     password: '', gender: '', terms: false })

    //for First Name
    const [isValidFirstName, setIsValidFirstName] = useState(true)
    const [firstNameError, setFirstNameError] = useState('')

    //for LastName
    const [isValidLastName, setIsValidLastName] = useState(true)
    const [lastNameError, setLastNameError] = useState('')
    //for age
    const [isValidAge, setIsValidAge] = useState(true);
    const [ageError, setAgeError] = useState('');
    //for phone Number
    const [isPhoneNoValid, setIsPhoneNoValid] = useState(true)
    const [phoneNoError, setPhoneNoError] = useState('')
    //for email 
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [emailError, setEmailError] = useState('')
    // for password 
    const [isValidPassword, setIsValidPassword] = useState(true)
    const [passwordError, setPasswordError] = useState('')
    //for gender
    const [isValidGender, setIsValidGender] = useState(true)
    const [genderError, setGenderError] = useState('')
    //for terms and condition
    const [isValidTerms, setIsValidTerms] = useState(true)
    const [termsError, setTermsError] = useState('')

    //update userDetails value with input value

    const updateUserDetails = (event) => {
        const userDetailsCopy = { ...userDetails }
        userDetailsCopy[event.target.name] = event.target.value
        setUserDetails(userDetailsCopy)
        //console.log(userDetails);
    }

    //validation of firstName
    const validateFirstName = (firstName) => {
        if (firstName) {
            if (/^[a-zA-Z]+$/.test(firstName)) {
                setIsValidFirstName(true)
                setFirstNameError('')
                return true
            } else {
                setIsValidFirstName(false)
                setFirstNameError('Name should contain only alphabet')
                return false
            }
        } else {
            setIsValidFirstName(false)
            setFirstNameError('First name cannot be empty')
            return false
        }
    }

    //validation of LastName
    const validateLastName = (lastName) => {
        if (lastName) {
            if (/^[a-zA-Z]+$/.test(lastName)) {
                setIsValidLastName(true)
                setLastNameError('')
                return true
            } else {
                setIsValidLastName(false)
                setLastNameError('Name should contain only alphabet')
                return false
            }
        } else {
            setIsValidLastName(false)
            setLastNameError('Last name cannot be empty')
            return false
        }
    }

    //validation of age
    const validateAge = (age) => {
        if (age) {
            if (age > 0 && age < 150) {
                setIsValidAge(true)
                setAgeError('');
                return true
            } else {
                setIsValidAge(false)
                setAgeError('Invalid age');
                return false
            }
        } else {
            setIsValidAge(false)
            setAgeError('Age cannot be empty');
            return false
        }
    }

    //validate Phone Number
    const validatePhoneNumber = (phoneNo) => {
        if (phoneNo) {
            if (/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(phoneNo)) {
                setIsPhoneNoValid(true)
                setPhoneNoError('')
                return true
            } else {
                setIsPhoneNoValid(false)
                setPhoneNoError('Invalid phone number')
                return false
            }
        } else {
            setIsPhoneNoValid(false)
            setPhoneNoError('Phone number cannot be empty')
            return false
        }
    }

    const validateEmail = (email) => {
        if (email) {
            if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
                setIsValidEmail(true)
                setEmailError('')
                return true
            } else {
                setIsValidEmail(false)
                setEmailError('Incorrect email id')
                return false
            }
        } else {
            setIsValidEmail(false)
            setEmailError('Please enter email id')
            return false
        }
    }


    const validatePassword = (password) => {
        if (password) {
            if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password)) {
                setIsValidPassword(true)
                setPasswordError('')
                return true;
            } else {
                setIsValidPassword(false)
                setPasswordError('Enter a combination of atleast eight numbers,letters and punctuation marks(such as! and &) ')
                return false;
            }
        } else {
            setIsValidPassword(false)
            setPasswordError('Enter password')
            return false;
        }
    }

    //update user details with terms and condition
    const updateUserDetailsWithTerms = (event) => {
        const userDetailsCopy = { ...userDetails }
        userDetailsCopy.terms = event.target.checked
        setUserDetails(userDetailsCopy);
    }

    //validate Terms and condition
    const validateTerms = (terms) => {
        if (terms === true) {
            setTermsError('')
            setIsValidTerms(true)
            return true
        } else {
            setTermsError('Accept terms and condition')
            setIsValidTerms(false)
            return false
        }
    }

    const validateGender=(gender)=>{
        if(gender==='Male'||gender==='Female'){
            setIsValidGender(true)
            setGenderError('')
            return true
        }else{
            setIsValidGender(false)
            setGenderError('Please select gender')
            return false
        }
    }

    const validate = (event) => {
        event.preventDefault();
        const validFirstName = validateFirstName(userDetails.firstName)
        const validLastName = validateLastName(userDetails.lastName)
        const validAge = validateAge(userDetails.age)
        const validPhoneNo = validatePhoneNumber(userDetails.phoneNo)
        const validEmail = validateEmail(userDetails.email)
        const validPassword = validatePassword(userDetails.password)
        const validTerms=validateTerms(userDetails.terms)
        const validGender=validateGender(userDetails.gender)


        if (validFirstName && validLastName && validAge && validPhoneNo && validPassword && validEmail && validTerms && validGender) {
            props.history.push('/signin')
        } 
        // } else {
        //     // console.error('not valid');
        //     console.log(userDetails);
        // }
    }


    return (
        <div>
            <div className="container mt-5">
                <div className="col-md-6 offset-md-3">
                    <div className="card border-primary border-2">
                        <div className="card-header bg-warning">
                            <h1 style={{ color: 'white' }}>Register</h1>
                        </div>
                        <form onSubmit={validate}>
                            <div className="card-body bg-white">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label>First Name</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type='text' name="firstName" value={userDetails.firstName}placeholder="First name" className="form-control" onChange={(event) => { updateUserDetails(event) }} />
                                        {isValidFirstName ? null : <span>{firstNameError}</span>}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <label>Last Name</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type='text' name="lastName" value={userDetails.lastName} placeholder="Last name" className="form-control" onChange={(event) => { updateUserDetails(event) }} />
                                        {isValidLastName ? null : <span>{lastNameError}</span>}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <label>Age</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type='number'placeholder="Age" name="age" value={userDetails.age} className="form-control" onChange={(event) => { updateUserDetails(event) }} />
                                        {isValidAge ? null : <span>{ageError}</span>}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <label>Phone no.</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type='number'placeholder="Phone number" name="phoneNo" value={userDetails.phoneNo} className="form-control" onChange={(event) => { updateUserDetails(event) }} />
                                        {isPhoneNoValid ? null : <span>{phoneNoError}</span>}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <label>Email Id</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type='email'placeholder="Email address" name="email" value={userDetails.email} className="form-control" onChange={(event) => { updateUserDetails(event) }} />
                                        {isValidEmail ? null : <span>{emailError}</span>}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <label>Password</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type='password'placeholder="New password" name="password" value={userDetails.password} className="form-control" onChange={(event) => { updateUserDetails(event) }} />
                                        {isValidPassword ? null : <span>{passwordError}</span>}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <label>Gender</label>
                                    </div>
                                    <div className="col-md-5">
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="gender" id="male" value='Male' onChange={(event) => { updateUserDetails(event) }} />Male
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="gender" value='Female' id="female" onChange={(event) => { updateUserDetails(event) }} />Female
                                                </div>
                                            </div>
                                            {isValidGender?null:<span>{genderError}</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">

                                    <div className="col-md-6">
                                        <input className="form-check-input" type="checkbox" name="term" onChange={(event) => { updateUserDetailsWithTerms(event) }} />
                                           Terms And Condition
                                           <br/>
                                        {isValidTerms?null:<span>{termsError}</span>}
                                    </div>

                                </div>

                                <br />
                                <button type="submit" className="register-btn" value="Register" >Submit</button>
                            </div>
                        </form>
                        <div>
                            <p style={{ color: 'blueviolet' }}>You Register previously? Then SignIn here</p>
                            <button className="btn btn-primary mb-3" onClick={() => { moveToSignInPage() }}>Sign In</button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Register
