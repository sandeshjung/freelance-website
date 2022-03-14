import React, {useEffect, Component} from 'react'

import axios from 'axios';
import jwt_decode from "jwt-decode";
import Navbar from "../Navbar/Navbar"
import './UserDashboard.css'

import ActionAreaCard from './ActionAreaCard'
import { renderMatches } from 'react-router-dom';
import Content from './Content';

const UserDashboard = () => {
    
   

	

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
		<Navbar />
		<div className="container">
			<h1 className="titleFirst">Hi {decoded.firstName}, Welcome. </h1>
			
			<hr />

		{/* <h4>Recommended jobs for you</h4>
		<br />

		<Card/> */}


		<Content />
		
			  
				
				</div>
                </>
	);
};

export default UserDashboard