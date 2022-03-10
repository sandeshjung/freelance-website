import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import jwt_decode from 'jwt-decode'
import "./Navbar.css"
import { useNavigate,Link } from 'react-router-dom';



export default function Navbar() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();
  const handleChange = (event) => {
    setAuth(event.target.checked);
    
      localStorage.removeItem("token");
      window.location = "/Login";
    
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleHirer = () => {
    navigate('/BecomeHirer')
  };

  const handleProfile = () => {
    navigate('/Profile')
  }

  const sendHome = () => {
    navigate('/UserDashboard')
  }

  var user= JSON.parse(localStorage.getItem("token"))
	// console.log(localStorage)
	// console.log(user)

	
		var decode = user;
		var decoded = jwt_decode(decode);


  return (
    <div style={{backgroundColor:"#004c3f"}}>
    

      {/* <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="login switch"
            />
          }
          label={auth ? 'Logout' : 'Login'}
        />
      </FormGroup> */}
      <AppBar position="static" color="transparent">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color:"white" }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1, color:"white", cursor: 'pointer' }} onClick={sendHome}>
            Merolancer
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
                sx={{ size:'large', color:"white" }}
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                
                <MenuItem onClick={handleProfile}>{decoded.firstName}</MenuItem>
                <MenuItem onClick={handleHirer}>Become hirer</MenuItem>
                <MenuItem onClick={handleChange}>Logout</MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
}
