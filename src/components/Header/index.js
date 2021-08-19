import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
import './style.css'
import {logout} from '../../actions'

const Header = (props) => {
    const auth = useSelector(state=>state.auth);
    const dispatch = useDispatch();


    // const logout = () => {
    //   dispatch(logout());
    // }


    return (
        <div>
            <header className="header">
              <div className="logo">Messenger</div>
              <div style={{color:'white'}}>
              {auth.authenticated ? `Hi ${auth.firstName}` : null}
              </div>
              {
                  auth.authenticated ? <Link to={'#'}><button className="button" onClick={()=>{dispatch(logout(auth.uid))}}>Logout</button></Link> : null
              } 
            </header>
        </div>
    )
}

export default Header
