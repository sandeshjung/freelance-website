import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

import Tab from '@mui/material/Tab';
import ShowRequests from './ShowRequests';



export default function ActionAreaCard({value}) {
   

return(  
      
<Tab label=
                                {
                                    <Card sx={{ width: '300px' }}>
                            <CardActionArea>
                                
                                {
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
                                <ShowRequests value1={value._id} />
                                </CardContent>
                            </CardActionArea>
                            </Card> 
        }/> 
        )
  
}
