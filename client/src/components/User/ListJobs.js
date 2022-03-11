import axios from 'axios'
import React, {useState, useEffect} from 'react'
import jwt_decode from 'jwt-decode'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, chipClasses } from '@mui/material';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';



function ListJobs() {
    const [jobs,setJobs] = useState([])
    
   
    var user= localStorage.getItem("token")
	var decode = user;
	var decoded = jwt_decode(decode);

    var loggedIn = decoded.role;
    const userId= decoded._id;

    const handleClick = () => {
        axios.get(`http://localhost:5000/api/post/${userId}`)
        .then(resp => {
            console.log(resp.data)
            setJobs(resp.data);
            
            
        })
       
    }

  

 
    const [value, setValue] = React.useState(0);
      
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };

    // const handleImage = () => {
    //     if (value.category==="Web Development"){
    //         return(
    //         <CardMedia
    //         component="img"
    //         height="140"
    //         image="./images/Web-Development.jpg"
    //         alt="green iguana"
    //         />
    //         )
    //     }
    // }
   
    
  return (
    <div>
        <br/>
                <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
        <button onClick={handleClick} className="btn btn-outline-success">View your jobs</button>
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
                jobs.map((value)=>{
                    return(
                        <>
                             
                                <Tab label=
                                {
                                    <Card sx={{ width: '300px' }}>
                            <CardActionArea>
                                
                                { value.category==="Web Development"}{
                                <CardMedia
                                component="img"
                                height="140"
                                image="./images/Web-Development.jpg"
                                alt="green iguana"
                                />
                                }
                                {/* {handleImage} */}
                                <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {value.jobName}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    
                                    {value.details}
                                </Typography>
                                </CardContent>
                            </CardActionArea>
                            </Card> 
        }/> 
                        </>
                    )
                })
            }
            </Tabs>
        </div>
    </div>
  )
}

export default ListJobs



