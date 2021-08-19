import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRealTimeMessage, getRealTimeUsers, updateMessage } from "../../actions";
import Layout from "../../components/Layout";
import "./style.css";

const User =(props) => {

  const {user,onClick} = props;
  return (
    <div onClick={() => onClick(user)} className="displayName">
              <div className="displayPic">
                <img
                  src="https://img.icons8.com/bubbles/2x/user-male.png"
                  alt=""
                />
              </div>
              <div style={{display:'flex',flex:1,justifyContent:'space-between' ,margin: "0 10px" }}>
                <span style={{ fontWeight: 500 }}>{user.firstName} {user.lastName}</span>
                <span>{user.isOnline ? 'Online' : 'Ofline'}</span>
              </div>
            </div>
  )
}

const HomePage = (props) => {

  const dispatch =useDispatch();
  const auth = useSelector(state => state.auth);
  const user = useSelector(state => state.user);
  const [chatStarted,setChatStarted] = useState(false);
  const [chatUser,setChatUser] = useState('');
  const [message,setMessage] = useState('');
  const [userUid,setUserUid] = useState('');
  let unsubscribe;

useEffect(()=>{
  unsubscribe = dispatch(getRealTimeUsers(auth.uid))
 .then(unsubscribe =>{
  return unsubscribe;
 })
 .catch(err =>{
   console.log(err);
 })
},[]);

useEffect(()=>{
return () => {
  unsubscribe.then(func => func()).catch(error => console.log(error));
}
},[])

const initChat =(user)=>{
   setChatStarted(true);
   setChatUser(`${user.firstName} ${user.lastName}`)
   setUserUid(user.uid);
   console.log(user);
   dispatch(getRealTimeMessage({uid_1:auth.uid,uid_2:user.uid}))
}

const submitMessage = (e) =>{
  const msgObj = {
    user_uid_1:auth.uid,
    user_uid_2:userUid,
    message
  }
 if(message !== ""){
   dispatch(updateMessage(msgObj))
   .then(() => {
        setMessage('')
      });
 }

  // console.log(msgObj)
}

// console.log(user);
  return (
    <Layout>
      <section className="container">
        <div className="listOfUsers">

         {
           user.users.length > 0 ?
           user.users.map(user => {
             return (
              <User onClick={initChat} key={user.uid} user={user}/>
             )
           }) : null
         }

          
        </div>
        <div className="chatArea">
          <div className="chatHeader">
            {
              chatStarted ? chatUser : ''
            } </div>
          <div className="messageSections">
          {
              chatStarted ? 
              user.conversations.map(conv =>
                <div key={conv.createdAt} style={{ textAlign:conv.user_uid_1 == auth.uid ? "right":"left" }}>
              <p className="messageStyle">{conv.message}</p>
            </div> )
              : <h2 style={{textAlign: "center",marginTop:'20%',color:"blue"}}>Get Started</h2>
            }
            
          </div>
          {
              chatStarted ? 
              <div className="chatControls">
            <textarea value={message} onChange={(e)=>setMessage(e.target.value)} placeholder="Write a message..." />
            <button onClick={submitMessage}>Send</button>
          </div>
              : ''
            }
          
        </div>
      </section>
    </Layout>
  );
};

export default HomePage;
