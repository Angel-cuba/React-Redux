import React, { useState, useEffect } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { useDispatch } from 'react-redux'

import { AppBar, Avatar, Typography, Toolbar, Button } from '@material-ui/core'
import memories from '../../image/angel.png'

import useStyles from './styles'



const Navbar = () => {
const classes = useStyles()
const dispatch = useDispatch()
const history = useHistory()
const location = useLocation()

const [ user, setUser ] = useState(JSON.parse(localStorage.getItem('profile')))

const logout = () => {
     dispatch({ type: 'LOGOUT' })

     history.push('/')
     setUser(null)
}

// console.log(user.profile.name);
useEffect(() => {
     // const token = user.tokenId
     // console.log(token)
     setUser(JSON.parse(localStorage.getItem('profile')))
}, [location])



     return (
          <AppBar className={classes.appBar} position="static" color="inherit">

               <div className={classes.brandContainer}>
  
                     <Typography component={Link} to="/" className={classes.typography} variant="h3" align="center">Memories</Typography>
                         <img className={classes.image} src={memories} alt="" height="60"/>
               </div>
         <Toolbar className={classes.toolbar}>
                    {user ? (
                         <div className={classes.profile}>
                              
                              <Typography className={classes.userName} variant="h6">Hello, {user.profile.name}</Typography>
                              <Avatar className={classes.purple} alt={user.profile.givenName} src={user.profile.imageUrl}></Avatar> 
                              <Button className={classes.logout} variant="contained" color="secondary" onClick={logout}>Logout</Button>
                         </div>
                               )
                         :
                         (
                             <Button component={Link} to="/auth" variant="contained" color="primary">Sign In</Button>
                         )
                         }
         </Toolbar>
        
      </AppBar>
     )
}

export default Navbar
