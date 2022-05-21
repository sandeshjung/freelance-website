import axios from 'axios'
import React, {useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
import CardActions from '@mui/material/CardActions';
import SendRatings from './SendRatings'
import RequestJob from './RequestJob';


function ShowJobs() {
    

    var user= localStorage.getItem("token")
	var decode = user;
	var decoded = jwt_decode(decode);

    // const [jobs,setJobs] = useState([]); 
    const [filteredArray, setFilteredArray] = useState([])
    const [error,setError] = useState({})
    // var loggedIn = decoded.role; 
    const userCategory= decoded.category;
    // console.log(userCategory)

    // const handleClick = async () => 
    useEffect(async()=>
    {
       await axios.get(`http://localhost:5000/api/post/`)
        .then(resp => {
            // console.log(resp.data) 
            // setJobs(resp.data);
            console.log(resp.data)
            console.log(userCategory)
      
               setFilteredArray(resp.data.filter(
                (job) => 
                    job.category === userCategory

                    // let array = resp.data.filter(
                    //           (job) => 
                    //               job.category === userCategory && resp.data.filter != 0
        ))

            
        },[])
        .catch (function (error){
          console.log('Error')
        })

        
    },[])
    React.useEffect(()=>{console.log({filteredArray})},[filteredArray]) 
  // })

   const [value, setValue] = React.useState(0);
    
    // const [rValue, setRValue] = React.useState(0); 
      
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

  return (
      <>
    <div>
        <br/>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
      {/* <button onClick={handleClick} className="btn btn-outline-success">Show jobs</button> */}
      <h2 style={{ color:'rgb(97, 94, 94)'}}>Jobs of {decoded.category}</h2>
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
              
                filteredArray.map((value,ind)=>{
                    return(
                        
                             
                                <Tab label=
                                {
                                    <Card sx={{ width: 345 }} >
                                        
                                          <h5> {value.jobName}  </h5>
                                        
      
                                    <CardMedia
                                      component="img"
                                      height="194"
                                      image="/images/Web-Development.jpg"
                                      alt="Paella dish"
                                    />
                                    <CardContent>
                                      <Typography variant="body2" color="text.secondary">
                                        {value.category}
                                                                  <p>Post by {value.hirerName} </p>
                                      </Typography>

                                    </CardContent>

                                    <SendRatings value1={value._id} key={ind}/>
                                    <CardActions disableSpacing>
                              
                                  
                                  
                                    <RequestJob value2={value._id} key={ind}/> 
                                    </CardActions>
                                  
                                  </Card>
        }/> 
                        
                    )
                })
            }
            </Tabs>
        </div>
    </div>
    </>
  )

}

export default ShowJobs

// array.map(job=><Job job={job} key={job._id}></Job>)