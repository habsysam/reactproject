import { useState } from "react";
import classNames from "classnames"; 

function SignIn(props) {

    const changeToRegister = () => {
        // console.log(props);
        props.history.push('/register')
    }

    const [userDetails, setUserDetails] = useState({ email: '', password: '' })
    // for email validation
    const [isValidEmail, setIsValidEmail] = useState(true)
    const [emailError, setEmailError] = useState('')
    // for password validation
    const [isValidPassword, setIsValidPassword] = useState(true)
    const [passwordError, setPasswordError] = useState('')


    //storing the value of email and password
    //or like this

    const valueOfInput = (event) => {
        // console.log(event);
        const userDetailsCopy = { ...userDetails }
        userDetailsCopy[event.target.name] = event.target.value
        setUserDetails(userDetailsCopy)
    }
    //validate email

    //const validEmail = validateEmail(userDetails.email)
    const validateEmail = (email) => {
        if (email) {
            if (/^[a-zA-Z]+$/.test(email)) {
                setIsValidEmail(true)
                setEmailError('')
                return true
            } else {
                setIsValidEmail(false)
                setEmailError('The user name you entered is not connected to an account')
                return false
            }
        } else {
            setIsValidEmail(false)
            setEmailError('Please Enter Username')
            return false
        }
    }

    // const validPassword=validatePassword(userDetails.password)
    const validatePassword = (password) => {
        if (password) {
            if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password)) {
                setIsValidPassword(true)
                setPasswordError('')
                return true;
            } else {
                setIsValidPassword(false)
                setPasswordError('The password that you have entered is incorrect ')
                return false;
            }
        } else {
            setIsValidPassword(false)
            setPasswordError('Enter password')
            return false;
        }
    }

    //both password and email validataion
    const validate = () => {
        const validPassword = validatePassword(userDetails.password)
        const validEmail = validateEmail(userDetails.email)
        if (validPassword && validEmail) {
            props.history.push('/home')
        } 
    }



    return (
        <div>
            <div className="container m-5">
                <div className="col-md-6 offset-md-3">
                    <div className="card border-primary border-2 " >
                        <div className="card-header bg-warning " >
                            <h1>SignIn</h1>
                        </div>
                        <div className="card-body bg-white " >
                            <div className="row" >
                                <div className="col-3">
                                    <label>User Name</label>
                                </div>
                                {/* what ever you will take from input it will store as event bcs you are taking as onChange event so
                                 when you will do some action then it will store all the information about it.
                                    but here you have to take name as state and value as state value bcs when you will
                                     write in input it will not show bcs of onChange of event */}
                                <div className="col-6">
                                    <input className="form-control"
                                    placeholder="User name" type='text' name="email" value={userDetails.email}
                                        onChange={(event) => { valueOfInput(event) }} />
                                    {!isValidEmail ? <span>{emailError}</span> : null}
                                </div>

                            </div>
                            <div className="row mt-3" >
                                <div className="col-3">
                                    <label>password</label>
                                </div>
                                <div className="col-6">
                                    <input className="form-control" placeholder="Password" type='password' name="password" value={userDetails.password} onChange={(event) => { valueOfInput(event) }} />
                                    {!isValidPassword ? <span style={{ color: 'red' }}>{passwordError}</span> : null}
                                </div>

                            </div>
                            <button className="btn btn-primary mt-3" onClick={() => { validate() }}>SignIn</button>
                            <div>
                                <br />
                                {/* <Router>
                                <p>If you did not SignUp click here </p>
                                <Link to='/register' style={{textDecoration:'none'}}>Register</Link>
                                <Route exact path='/register' component={Register}/>
                                </Router>
                                 */}

                                <p style={{ color: 'blue' }}>Click here to Register</p>
                                <button onClick={() => { changeToRegister() }} className='register-btn'>Register</button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SignIn
