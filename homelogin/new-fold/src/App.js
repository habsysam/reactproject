import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import SignIn from './components/SignIn';
import Home from './components/Home';
import Register from './components/Register';
import bootstrap from 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <Router>
      <div className="App">
        <div >
          <nav className='navbar navbar-light'style={{height:'70px',backgroundColor:'purple'}}>
            <div className='container navRow' >
              <div>
              <Link to='/home' style={{textDecoration:'none',color:'white'}} >Home</Link>
            </div>
            <div>
              <Link to='/signin' style={{marginRight:'25px',textDecoration:'none',color:'B'}} >MEN</Link>
              <Link to='/register' style={{textDecoration:'none',color:'white'}}>Register</Link>
            </div>
            </div>
          </nav>
        </div>
        <Route exact path='/home' component={Home}/>
        <Route exact path='/signin' component={SignIn}/>
        <Route exact path='/register' component={Register}/>
      </div>
    </Router>
  );
}

export default App;