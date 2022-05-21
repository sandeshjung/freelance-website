// import React from 'react'
// import Rating from '@mui/material/Rating';
// import jwt_decode from 'jwt-decode'
// import axios from 'axios';

// const SendRatings = ({value1}) => {
//     const [value, setValue] = React.useState(0);
//     var user= localStorage.getItem("token")
// 	var decode = user;
// 	var decoded = jwt_decode(decode);
//     const handleRatings = 
//         (event, newValue) => {
//             setValue(newValue);
//             console.log(value)
//             const toSend={
//                 		ratings:value,
//                         jobId:value1,
//                         fId: decoded._id
//                 	}
//                     console.log(toSend)
//                     axios.post(`http://localhost:5000/api/rating/ratings`, toSend)
                    
//                     console.log('success')
                  
//                 }
          
          

//   return (
//     <Rating
//     name="simple-controlled"
//     value={value}
//     onChange={handleRatings}
//   />
//   )
// }

// export default SendRatings



import React from 'react'
import Rating from '@mui/material/Rating';
import jwt_decode from 'jwt-decode'
import axios from 'axios';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';

const labels = {
    0.5: 'Not Interested',
    1: 'Not Interested',
    1.5: 'Not Interested',
    2: 'Not Interested',
    2.5: 'Not Interested',
    3: 'Interested',
    3.5: 'Interested',
    4: 'Interested',
    4.5: 'Very Interested',
    5: 'Very Interested',
  };

const SendRatings = ({value1}) => {
    
  const [hover, setHover] = React.useState(-1);
    const [value, setValue] = React.useState(0);
    var user= localStorage.getItem("token")
	var decode = user;
	var decoded = jwt_decode(decode);
    const handleRatings = 
        (event, newValue) => {
            setValue(newValue);
            
            const toSend={
                		ratings:newValue,
                        jobId:value1,
                        fId: decoded._id
                	}
                    console.log(toSend)
                    axios.post(`http://localhost:5000/api/rating/ratings`, toSend)
                    
                    console.log('success')
                  
                }
          
    // React.useEffect(()=>{console.log({value})},[value])
            
          

  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        onChange={handleRatings}
        onChangeActive={(event, newHover) => {
          setHover(newHover);
        }}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
      )}
    </Box>
  )
}

export default SendRatings