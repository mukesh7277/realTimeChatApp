import React, { useEffect } from 'react';
import './App.css';
import {BrowserRouter as Router ,Route} from 'react-router-dom'
import Homepage from './containers/HomePage';
import LoginPage from './containers/LoginPage';
import SignupPage from './containers/SignupPage';
import PrivateRoute from './components/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isLoggedInUser } from './actions';

function App() {

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch()


  useEffect(() => {
    if(!auth.authenticated){
      dispatch(isLoggedInUser())
    }
  }, []);

  return (
    <div className="App">
      <Router>
        <PrivateRoute path="/" exact component={Homepage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/signup" component={SignupPage}/>
      </Router>
    </div>
  );
}

export default App;
