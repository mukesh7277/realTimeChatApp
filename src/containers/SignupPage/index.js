import React, { useState } from 'react'
import { Link,Redirect } from 'react-router-dom';
import Layout from '../../components/Layout';
import Card from '../../components/Ui/Card';
import {signup} from '../../actions'
import { useDispatch, useSelector } from 'react-redux';

const SignupPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const dispatch = useDispatch();
    const auth = useSelector(state=>state.auth);

    const registerUser = (e) =>{
        e.preventDefault();
        const user= {
            firstName,lastName,email,password
        }
      dispatch(signup(user))
    }
    
    if(auth.authenticated){
      return <Redirect to={`/`}/>
  }
      return (
        <Layout>
            <div className="layoutContainer">
          <Card>
              <form onSubmit={registerUser}>
              <h2>Sign Up</h2>
                  <div style={{display: 'flex',flexDirection:'column'}}>
                  <input type="text" value={firstName} placeholder="Enter First Name" onChange={(e)=>setFirstName(e.target.value)} />
                  <input type="text" value={lastName} placeholder="Enter Last Name" onChange={(e)=>setLastName(e.target.value)} />
                  <input type="text" value={email} placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)} />
                  <input type="password" value={password} placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)} />
                  </div>
                  <div>
                      <button>SignUp</button>
                  </div>
                  <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                      <h5>Have a account ?</h5>
                      <Link to="/login">Log In</Link>
                  </div>
              </form>
          </Card>
          </div>
        </Layout>
      );
    };

export default SignupPage
