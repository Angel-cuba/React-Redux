import React from 'react'
import { Container  } from '@material-ui/core'

import useStyles from './styles'
import Navbar from './components/Navbar/Navbar';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Auth from './components/Auth/Auth';

const App = () => {
    const classes = useStyles()
  
 
   
  return (
    <Router>
      <Container maxWidth="lg" className={classes.container}>
       <Navbar/>
       <Switch>
         <Route path="/" component={Home} exact/>
         <Route path="/auth" component={Auth} exact/>
       </Switch>
    </Container>
    </Router>
    
  );
}

export default App;
