import React from 'react';
import icon from '../img/circled-user-icon-user-pro-icon-11553397069rpnu1bqqup.png';
const Profile=(props)=>{
   return(
    <section className="profile">
    <h1>My Profile</h1>
    <img src={icon} style={{width:"70px",height:"70px"}} />
    <section>
    <p>firstnaem:</p>
    <p>{props.firstname}</p>
    <p>lastname:</p>
    <p>{props.lastname}</p>
    <p>job:</p>
    <p>{props.job}</p>
    </section>
    </section>
   ) 
}
export default Profile;