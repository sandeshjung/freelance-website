import Navbar from '../Navbar/Navbar'
import React from 'react'
import './Profile.css'


const ProfileData = (value) => {
    // console.log(value.value)
  return (
    <>
        <Navbar/>
<div className="category_container">
    <div className="category_form_container">
        <div className="left">
        <header>
			<img src='./images/avatar.png' alt={value.value.firstName} className="avatar"/>
		</header>
        <h1 className="bold-text">
			{value.value.firstName} {value.value.lastName} 
		</h1>
	 		<div className="normal-text">{value.value.role} | {value.value.category} </div>
	 		<div className="social-container">
				
	 			<div className="likes">
	 				<h1 className="bold-text">{value.value.ratings}</h1>
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

export default ProfileData