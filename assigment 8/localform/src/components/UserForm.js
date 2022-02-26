import React from 'react'
import {useState} from 'react'
function UserFom(props) {
     

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

     

    const updateUserDetails = (event) => {
        const userDetailsCopy = { ...props.userDetails }
        userDetailsCopy[event.target.name] = event.target.value
       props.setUserDetails(userDetailsCopy)
         
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
                setFirstNameError('name should contain only alphabet')
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
                setLastNameError('name should contain only alphabet')
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
            if (age > 0 && age < 110) {
                setIsValidAge(true)
                setAgeError('');
                return true
            } else {
                setIsValidAge(false)
                setAgeError('Are you a god');
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
                setPhoneNoError('please write a valid phone number')
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
                setEmailError('incorrect username')
                return false
            }
        } else {
            setIsValidEmail(false)
            setEmailError('please enter username')
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
                setPasswordError('password should contain atleast 1 special,Capital,number ')
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
        const userDetailsCopy = { ...props.userDetails }
        userDetailsCopy.terms = event.target.checked
        props.setUserDetails(userDetailsCopy);
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
            setGenderError('please select gender')
            return false
        }
    }

    const validate = (event) => {
        event.preventDefault();
        const validFirstName = validateFirstName(props.userDetails.firstName)
        const validLastName = validateLastName(props.userDetails.lastName)
        const validAge = validateAge(props.userDetails.age)
        const validPhoneNo = validatePhoneNumber(props.userDetails.phoneNo)
        const validEmail = validateEmail(props.userDetails.email)
        const validPassword = validatePassword(props.userDetails.password)
        const validTerms=validateTerms(props.userDetails.terms)
        const validGender=validateGender(props.userDetails.gender)


        if (validFirstName && validLastName && validAge && validPhoneNo && validPassword && validEmail && validTerms && validGender) {
            // props.history.push('/home')
            const actualUserDetailsCopy=[...props.actualUserDetails]
            actualUserDetailsCopy.push(props.userDetails)
           props.setActualUserDetails(actualUserDetailsCopy)
        } else {
            console.error('not valid');
           
        }
    }
    return (
        <div>
           <div className="container">
                <div className="">
                    <div className="card border-danger border-2">
                        <div className="card-header  bg-danger">
                            <h1 style={{ color: 'white' }}>Register Form</h1>
                        </div>
                        <form onSubmit={validate}>
                            <div className="card-body bg-white">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label>First Name</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type='text' name="firstName" value={props.userDetails.firstName} className="form-control" onChange={(event) => { updateUserDetails(event) }} />
                                        {isValidFirstName ? null : <span style={{color:'red',fontSize:'13px'}}>{firstNameError}</span>}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <label>Last Name</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type='text' name="lastName" value={props.userDetails.lastName} className="form-control" onChange={(event) => { updateUserDetails(event) }} />
                                        {isValidLastName ? null : <span style={{color:'red',fontSize:'13px'}}>{lastNameError}</span>}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <label>Age</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type='number' name="age" value={props.userDetails.age} className="form-control" onChange={(event) => { updateUserDetails(event) }} />
                                        {isValidAge ? null : <span style={{color:'red',fontSize:'13px'}}>{ageError}</span>}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <label>Phone no.</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type='number' name="phoneNo" value={props.userDetails.phoneNo} className="form-control" onChange={(event) => { updateUserDetails(event) }} />
                                        {isPhoneNoValid ? null : <span style={{color:'red',fontSize:'13px'}}>{phoneNoError}</span>}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <label>Email Id</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type='email' name="email" value={props.userDetails.email} className="form-control" onChange={(event) => { updateUserDetails(event) }} />
                                        {isValidEmail ? null : <span style={{color:'red',fontSize:'13px'}}>{emailError}</span>}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <label>Password</label>
                                    </div>
                                    <div className="col-md-8">
                                        <input type='password' name="password" value={props.userDetails.password} className="form-control" onChange={(event) => { updateUserDetails(event) }} />
                                        {isValidPassword ? null : <span style={{color:'red',fontSize:'13px'}}>{passwordError}</span>}
                                    </div>
                                </div>
                                <div className="row mt-3">
                                    <div className="col-md-3">
                                        <label>Gender</label>
                                    </div>
                                    <div className="col-md-8">
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
                                            {isValidGender?null:<span style={{color:'red',fontSize:'13px'}}>{genderError}</span>}
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-3">

                                    <div className="col-md-6" id='col1'>
                                        <input className="form-check-input" type="checkbox" name="term" onChange={(event) => { updateUserDetailsWithTerms(event) }} />
                                        <span> Terms and condition</span><br/>
                                        {isValidTerms?null:<span style={{color:'red',fontSize:'13px'}}>{termsError}</span>}
                                    </div>

                                </div>

                                <br />
                                <button type="submit" className="btn btn-success" value="Register" >Submit</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            
        </div>
    )
}

export default UserFom
