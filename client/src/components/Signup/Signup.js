import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Styles.module.css";


const Signup = () => {
	const [error, setError] = useState("");
	const navigate = useNavigate()

	const [user, setUser] = useState({
		firstName: "",
		lastName: "",
		email: "",
		password: ""
	});
	

	const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

	const handleSubmit = async (e) => {

		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/users/register";
			const { data: res } = await axios.post(url, user);
			localStorage.setItem("token", JSON.stringify(user));
			window.location("/Login");
			console.log(res.message);
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
	
	// 	const { firstName,lastName, email, password } = user
    //     if( firstName && lastName && email && password){
    //         // fetch("http://localhost:5000/register", {method="POST", headers:{"Contain-Type":"application/json"} , body:JSON.stringify(user)}
			
	// 		axios.post("http://localhost:5000/api/users/register", user)
    //         .then( res => {
    //             alert(res.data.message)
    //             navigate.push("/Login")
    //         })
    //     } else {
    //         alert("invalid input")
    //     }
        
    // }

	return (
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Welcome Back</h1>
					<Link to="/Login">
						<button type="button" className={styles.white_btn}>
							Sign in
						</button>
					</Link>
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Create Account</h1>
						<input
							type="text"
							placeholder="First Name"
							name="firstName"
							onChange={handleChange}
							value={user.firstName}
							className={styles.input}
						/>
						<input
							type="text"
							placeholder="Last Name"
							name="lastName"
							onChange={handleChange}
							value={user.lastName}
							className={styles.input}
						/>
						<input
							type="email"
							placeholder="Email"
							name="email"
							onChange={handleChange}
							value={user.email}
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
							onChange={handleChange}
							value={user.password}
							className={styles.input}
						/>
						
						
						{/* <button type="submit" className={styles.green_btn} onClick={register}>
							Sign Up
						</button> */}

						<input type="submit" value="Sign Up" className={styles.green_btn} />
					</form>
				</div>
			</div>
		</div>
	);
};

export default Signup;