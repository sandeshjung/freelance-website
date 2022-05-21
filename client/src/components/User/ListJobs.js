import axios from 'axios'
import React, {useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode'

import Tabs from '@mui/material/Tabs';

import ActionAreaCard from './ActionAreaCard';
import Button from '@mui/material/Button'



function ListJobs() {
    const [jobs,setJobs] = useState([])
    
   
    var user= localStorage.getItem("token")
	var decode = user;
	var decoded = jwt_decode(decode);

    var loggedIn = decoded.role;
    const userId= decoded._id;
    useEffect(async()=>
    {
    // const handleClick = () => {
        axios.get(`http://localhost:5000/api/post/${userId}`)
        .then(resp => {
            // console.log(resp.data) 
            setJobs(resp.data);
            
            
        })
       
    
},[])
    React.useEffect(()=>{},[jobs]) 
 
  

 
    const [value, setValue] = React.useState(0);
      
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

   
   
    
  return (
    <div>
        <br/>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        {/* <button onClick={handleClick} className="btn btn-outline-success">View your jobs</button> */}

        {/* <Button variant="contained" color="success" onClick={handleClick}>
        View your jobs
        
</Button> */}
      <h2 style={{ color:'rgb(97, 94, 94)'}}>Your jobs</h2>
 
        </div>
        <div>
        <Tabs
                                value={value}
                                onChange={handleChange}
                                variant="scrollable"
                                scrollButtons
                                allowScrollButtonsMobile
                                aria-label="scrollable force tabs example"
                                        >
            {
                jobs.map((value,index)=>{
                    return(
                        
                             
                                <ActionAreaCard value={value} key={index}/>

                       
                    )
                })
            }
            </Tabs>
        </div>
    </div>
  )
}

export default ListJobs



