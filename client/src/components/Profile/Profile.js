import React from 'react'
import './Profile.css'
import jwt_decode from 'jwt-decode'
import Navbar from '../Navbar/Navbar'

const Profile = () => {
    var user= localStorage.getItem("token")
			
		
			
				var decode = user;
				var decoded = jwt_decode(decode);
				
  return (
    
   
<>
<Navbar/>
<div className="category_container">
    <div className="category_form_container">
        <div className="left">
        <header>
			<img src='./images/avatar.png' alt={decoded.firstName} className="avatar"/>
		</header>
        <h1 className="bold-text">
			{decoded.firstName} {decoded.lastName} 
		</h1>
	 		<div className="normal-text">{decoded.role} | {decoded.category} </div>
	 		<div className="social-container">
				
	 			<div className="likes">
	 				<h1 className="bold-text">{decoded.ratings}</h1>
	 				<h2 className="smaller-text">Likes</h2>
    </div>
    </div>
                
                
        </div>
        
        <div className="right">
        
        </div>
    </div>
</div>
</>
  )
}

export default Profile