import React from 'react'
import jwt_decode from 'jwt-decode'
import ProfileData from './ProfileData'

const Profile = () => {
    var user= localStorage.getItem("token")			
	var decode = user;
	var decoded = jwt_decode(decode);
				
  return (
    
   <ProfileData value={decoded}/>
  )
}

export default Profile