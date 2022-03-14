import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import styles from "./Styles.module.css";
import Navbar from "../Navbar/Navbar"
import jwt_decode from 'jwt-decode'



const PostJob = () => {
	const [error, setError] = useState("");
	const navigate = useNavigate()


    var user= localStorage.getItem("token")
	var decode = user;
	var decoded = jwt_decode(decode);


	const [job, setJob] = useState({
		jobName: "",
		price: '',
		category: "",
        details: "",
        pid:decoded._id,
        hirerName:decoded.firstName
	});
   
                

	const handleChange = e => {
        const { name, value } = e.target
        
        setJob({
            ...job,
            [name]: value
        })
    }

	const handleSubmit = async (e) => {

		e.preventDefault();
		try {
			const url = "http://localhost:5000/api/post/postJob";

           

            
			await axios.post(url, job);  
			
			navigate("/UserDashboard");
			console.log("success");
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.job.message);
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
		<>
		<Navbar/>
		<div className={styles.signup_container}>
			<div className={styles.signup_form_container}>
				<div className={styles.left}>
					<h1>Post Job</h1>
					
				</div>
				<div className={styles.right}>
					<form className={styles.form_container} onSubmit={handleSubmit}>
						<h1>Enter Job Details</h1>
						<input
            type="text"
            placeholder="Job Name"
            name="jobName"
            onChange={handleChange}
            value={job.jobName}
            required
            className={styles.input}
          />
        
                      <input
            type="text"
            placeholder="Job Category"
            name="category"
            onChange={handleChange}
            value={job.category}
            required
            className={styles.input}
          />

<input
            type="text"
            placeholder="Job Details"
            name="details"
            onChange={handleChange}
            value={job.details}
            required
            className={styles.input}
          />

                       <input
            type="number"
            placeholder="Price"
            name="price"
            onChange={handleChange}
            value={job.price}
            required
            className={styles.input}
          />

          
						{/* <button type="submit" className={styles.green_btn} onClick={register}>
							Sign Up
						</button> */}

						<input type="submit" value="Submit" className={styles.green_btn} />
					</form>
				</div>
			</div>
		</div>
		</>
	);
};

export default PostJob;