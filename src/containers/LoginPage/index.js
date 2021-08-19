import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import Layout from "../../components/Layout";
import Card from "../../components/Ui/Card";
import {signin} from '../../actions'


const LoginPage = () => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const dispatch = useDispatch();
const auth = useSelector(state=>state.auth);

 const userLogin = (e)=>{
     e.preventDefault();
     if(email == ""){
         alert("enter email");
         return;
     }
     if(password == ""){
        alert("enter password");
        return;
    }
    dispatch(signin({email,password}));
 }

 if(auth.authenticated){
     return <Redirect to={`/`}/>
 }

  return (
    <Layout>
        <div className="layoutContainer">
      <Card>
          <form onSubmit={userLogin}>
          <h2>Log In</h2>
              <div style={{display: 'flex',flexDirection:'column'}}>
              <input type="text" value={email} placeholder="Enter your Email" onChange={(e)=>setEmail(e.target.value)} />
              <input type="password" value={password} placeholder="Enter your Password" onChange={(e)=>setPassword(e.target.value)} />
              </div>
              <div>
                  <button>LogIn</button>
              </div>
              <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
                  <h5>Don't have a account ?</h5>
                  <Link to="/signup">Sign Up</Link>
              </div>
          </form>
      </Card>
      </div>
    </Layout>
  );
};

export default LoginPage;
