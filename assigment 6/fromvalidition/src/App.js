
import './App.css';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import { useState } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

function App() {
const [actualUserDetails,setActualUserDetails]=useState([])
  const [userDetails, setUserDetails] = useState({ firstName: '', lastName: '', age: '', phoneNo: '', email: '', password: '', gender: '', terms: false })

  return (

    <div className="App">
      <div className='container-fluid mt-5'>
        <div className='row'>
<div className='col-md-5'>
<UserForm userDetails={userDetails} setUserDetails={setUserDetails} actualUserDetails={actualUserDetails} setActualUserDetails={setActualUserDetails} />
</div>
<div className='col-md-7'>
<UserTable actualUserDetails={actualUserDetails}/>
</div>
        </div>
      </div>
    </div>
  );
}

export default App;
