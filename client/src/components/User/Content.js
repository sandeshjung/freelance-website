import React, { Component, useState } from 'react'
import jwt_decode from 'jwt-decode'
// import card from './Card' 
import { Link } from 'react-router-dom'
import axios from 'axios'
import ListJobs from './ListJobs'
import ShowJobs from './ShowJobs'
import Button from '@mui/material/Button'




const Content = () => {
  const [jobs,setJobs] = useState()
 
  var user= JSON.parse(localStorage.getItem("token"))
	
	
		var decode = user;
		var decoded = jwt_decode(decode);
		
        var loggedIn = decoded.role;

       
    
        // const userId= decoded._id;
        // axios.get(`http://localhost:5000/api/post/${userId}`)
        // .then(resp => {
            
        //     const jobs =resp.data;
        //     console.log(jobs[0])
        //     console.log(userId)
        // })
     
  return (
    <div>
 <div>
          {(() => {
        if (loggedIn==='Hirer') {
          return (
            <div>
                <h3 className="titleFirst">Hire Freelancers</h3>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                {/* <Link to="/PostJob">
                <button className='btn btn-outline-success' >Post job</button> */}
                <Button variant="contained" color="success" href="/PostJob">
  Post Job
</Button>
                {/* </Link>  */}
               </div>
              
               {/* {(() => {
             if(jobs[0]){


            <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
            <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="div">
               hi
            </Typography>
            <Typography variant="body2" color="text.secondary">
              ho
            </Typography>
            </CardContent>
        </CardActionArea>
        </Card>
                }
            })
            } */}<ListJobs />
                </div>
                
          )
        } else  {
          return (
              <>
            <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Link to='/Freelancer'>
                <button className='btn btn-outline-success' >Choose Category</button>
                </Link>
            </div>
                <br/>
                {/* <card />  */}
                <ShowJobs/>
                </>
          )
        }
      })()}
      </div>
    </div>
  )
}

export default Content

