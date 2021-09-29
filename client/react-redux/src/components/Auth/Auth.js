import React, { useState } from 'react'
import { Container, Avatar, Paper, Grid, Button, Typography, Icon} from '@material-ui/core'
import { GoogleLogin } from 'react-google-login'

import LockOpenIcon from '@mui/icons-material/LockOpen';
import Input from './Input'

import useStyles from './styles'

const Auth = () => {
     const classes = useStyles()

     const [showPassword, setShowPassword] = useState(false)
     const [isSignup, setSignup] = useState(false)

     // const isSignup= true;

     const handleSubmit = (event) => {

     }
     
     const handleChange = (event) =>{

     }
     const handleShowPassword = () => setShowPassword((presShowPassword)=> !presShowPassword)


     const switchMode = () =>{ 
          setSignup((presIsSignup) => !presIsSignup) 
          handleShowPassword(false)
          }
     const googleSuccess = async (res) => {
               console.log(res)
     }

     const googleFailure = (error) => {
          console.log(error)
          console.log( "Google Sign In just failed. Please try later")
     }

     
     
     return (
          <Container className={classes.container} component="main" maxWidth="xs">
               <Paper className={classes.paper} elevation={3}>
                    <Avatar className={classes.avatar}>
                         <LockOpenIcon />

                    </Avatar>
                    <Typography variant="h5">
                         {isSignup ? 'Sign Up' : 'Sign In'}
                    </Typography>
                    <form className={classes.form} onSubmit={handleSubmit}>
                         <Grid container spacing={2}>
                                   { isSignup && (
                                        <div>                                      
                                             <Input name="firstname" label="First Name" handleChange={handleChange} autoFocus />
                                             <Input name="lastname" label="Last Name" handleChange={handleChange} />
                                  
                                             
                                        </div>
                                   )}
                                   <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                                   <Input name="password" label="Password" handleChange={handleChange} type={showPassword ? 'text': "password"} handleShowPassword={handleShowPassword}/>
                                   {isSignup && <Input name="confirmpassword" label="Confirm Password" handleChange={handleChange} type="password"/>}
                                   </Grid>
                                        {/* Google Login */}
                                        <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                                        {isSignup ? 'Sign Up' : 'Sign In'}
                                        </Button>
                                        <GoogleLogin
                                       
                                             clientId="462260349512-kusfs9tk6ejdnd5vkf3qflc5slieprfm.apps.googleusercontent.com"
                                             render={(renderProps) => (
                                                  <Button 
                                                  className={classes.googleButton} 
                                                  color="primary" 
                                                  onClick={renderProps.onClick} 
                                                  fullWidth 
                                                  disabled={renderProps.disabled}
                                                  startIcon={ <Icon />}
                                                  >
                                                       Google Sign In
                                                  </Button>
                                                  )
                                             
                                             }
                                             onSuccess={googleSuccess}
                                             onFailure={googleFailure}
                                                  // cookiepolicy="single_host_origin"
                                             cookiePolicy={'single_host_origin'}
                                        />

                                   
                                   
                                   <Grid container justifyContent="flex-end">
                                        <Grid item>

                                              <Button onClick={switchMode}>
                                                  { isSignup ? 'Already have an account? Sign in' : "Don't have an account? Sign up now" }
                                        </Button>
                                        </Grid>
                                       
                                   </Grid>
                       
                    </form>
               </Paper>
          </Container>
     )
}

export default Auth
