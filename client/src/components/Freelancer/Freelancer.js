import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./Styles.module.css";
import Navbar from "../Navbar/Navbar"
import jwt_decode from 'jwt-decode'
import { useNavigate } from "react-router-dom";

const Freelancer = () => {
	// const [data, setData] = useState({_id:"", role:"", firstName:""}); 
	const [data, setData] = useState({ category:""});
	const [error, setError] = useState("");
	const navigate = useNavigate()
	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};


	const handleSubmit =  (e) => {
		e.preventDefault();
		
		
		
	  
		try {
			const url = "http://localhost:5000/api/category/freelancer"; 
			// localStorage.getItem("token");
			var user= localStorage.getItem("token")
			
		
			
				var decode = user;
				var decoded = jwt_decode(decode);
				console.log(data)
				
				console.log(Object.assign(decoded,data)) 
				axios(
					{method : 'POST',
					data : Object.assign(decoded,data),
					url : url}
				)
				.then(
					(response) => console.log(response)
				)
				
		navigate("/UserDashboard")
			
			// localStorage.setItem("token", res.data);
			// window.localStorage.setItem("token", JSON.stringify(res.data)); 
			// window.location = "/UserDashboard";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};

	return (
		<>
		<Navbar/>
		<div className={styles.category_container}>
			<div className={styles.category_form_container}>
				<div className={styles.left}>
				<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Enter category</h1>
						<input
							type="text"
							placeholder="Category"
							name="category"
							onChange={handleChange}
							value={data.category}
							className={styles.input}
						/>
						
						{error && <div className={styles.error_msg}>{error}</div>}
						<button type="submit" className={styles.green_btn}>
							Submit
						</button>
					</form>
				</div>
				
				<div className={styles.right}>
					
				</div>
			</div>
		</div>
		</>
	);
};

export default Freelancer;