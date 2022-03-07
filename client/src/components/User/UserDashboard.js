import React, {useEffect} from 'react'
import getCurrentUser from './getCurrentUser'
import axios from 'axios';
import jwt_decode from "jwt-decode";


const UserDashboard = () => {
    
    const handleLogout = () => {
		localStorage.removeItem("token");
		window.location = "/Login";
	};

	

	var user= JSON.parse(localStorage.getItem("token"))
	console.log(localStorage)
	console.log(user)

	
		var decode = user;
		var decoded = jwt_decode(decode);
		
		console.log(decoded);
	
	

	// console.log(user)
	// console(user.firstName)

	return (
		<>

			hi {decoded.firstName}
			  
				<button onClick={handleLogout}>
					Logout
				</button>
                </>
	);
};

export default UserDashboard