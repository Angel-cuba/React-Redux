import React from 'react'
import { Container } from '@material-ui/core'

import useStyles from './styles'
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth';
import PostDetails from './components/PostDetails/PostDetails';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material';



const App = () => {
    const classes = useStyles()
    const theme = createTheme({
        palette:{
          background:{
            default: '#29524a'
          },
          secondary:{
            main: '#90d5ec'
          }
        }
    })
 

 const user = JSON.parse(localStorage.getItem('profile'))
//  console.log(user);
   
  return (
    <ThemeProvider theme={theme}>
       <Router>
      <Container maxWidth="xl" className={classes.container}>
       <Navbar/>
       <Switch>
         <Route path="/"  exact component={() => <Redirect to="/posts" />}/>
         <Route path="/posts" exact component={Home}/>
         <Route path="/posts/search" exact component={Home}/>
         <Route path="/posts/:id" component={PostDetails}/>

         {/* component={Home} */}
         <Route path="/auth" component={() => (!user ? <Auth/> : <Redirect to="posts"/>)} exact/>
       </Switch>
    </Container>
    </Router>
    
    </ThemeProvider>
   
  );
}

export default App;
