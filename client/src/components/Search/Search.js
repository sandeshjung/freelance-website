// import { useState } from "react";
// import axios from "axios";
// import { Link } from "react-router-dom";
// import styles from "./Styles.module.css";
// import Navbar from "../Navbar/Navbar"
// import jwt_decode from 'jwt-decode'
// import { useNavigate } from "react-router-dom";

// const BecomeHirer = () => {
// 	// const [data, setData] = useState({_id:"", role:"", firstName:""}); 
// 	const [error, setError] = useState("");
// 	const navigate = useNavigate()

// 	const handleSubmit =  (e) => {
// 		e.preventDefault();
		
		
		
	  
// 		try {
// 			const url = "http://localhost:5000/api/update/becomehirer"; 
// 			// localStorage.getItem("token");
// 			var user= localStorage.getItem("token")
			
		
			
// 				var decode = user;
// 				var decoded = jwt_decode(decode);
				
// 				console.log(decoded)
// 				axios(
// 					{method : 'POST',
// 					data : decoded,
// 					url : url}
// 				)
// 				.then(
// 					(response) => console.log(response)
// 				)
		
// 		localStorage.removeItem("token")				
// 		navigate("/Login")
			
// 			// localStorage.setItem("token", res.data);
// 			// window.localStorage.setItem("token", JSON.stringify(res.data)); 
// 			// window.location = "/UserDashboard";
// 		} catch (error) {
// 			if (
// 				error.response &&
// 				error.response.status >= 400 &&
// 				error.response.status <= 500
// 			) {
// 				setError(error.response.data.message);
// 			}
// 		}
// 	};

// 	return (
// 		<>
// 		<Navbar/>
// 		<div className={styles.category_container}>
// 			<div className={styles.category_form_container}>
// 				<div className={styles.left}>
// 					<form className={styles.form_container} onSubmit={handleSubmit}>
// 						<h1>Become an Hirer</h1>
						
						
// 						{error && <div className={styles.error_msg}>{error}</div>}
// 						<button type="submit" className={styles.green_btn}>
// 							Confirm
// 						</button>
// 					</form>
// 				</div>
// 				<div className={styles.right}>
					
// 				</div>
// 			</div>
// 		</div>
// 		</>
// 	);
// };

// export default BecomeHirer;