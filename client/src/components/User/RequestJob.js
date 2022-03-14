import axios from 'axios';
import React from 'react'
import jwt_decode from 'jwt-decode'
const RequestJob = ({value2}) => {
    var user= localStorage.getItem("token")
	var decode = user;
	var decoded = jwt_decode(decode);
  // console.log(value2) 
    const handleClick = () => {
         const toSend={
            jobId:value2,
            fId: decoded._id
        }
        // console.log(toSend)
        axios.post(`http://localhost:5000/api/request/requests`, toSend)
    }
  return (
    <div sx={{display:'flex', justify:'center', align:'center'}}>
         <button onClick={handleClick} className="btn btn-outline-success">Request Job</button>

    </div>
  )
}

export default RequestJob
