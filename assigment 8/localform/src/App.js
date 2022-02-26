
import './App.css';
import UserForm from './components/UserForm';
import UserTable from './components/UserTable';
import { useEffect, useState } from 'react';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';
 const getDatafromLs=()=>{
  const data=localStorage.getItem('books');
  if(data){
    return JSON.parse(data)
  }
  else{
    return []
  }
}

function App() {
const [actualUserDetails,setActualUserDetails]=useState(getDatafromLs())
  const [userDetails, setUserDetails] = useState({ firstName: '', lastName: '', age: '', phoneNo: '', email: '', password: '', gender: '', terms: false })
useEffect(()=>{
  localStorage.setItem("books",JSON.stringify(actualUserDetails))
},[actualUserDetails])
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
