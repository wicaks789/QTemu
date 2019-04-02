import React, { Component } from 'react';
import './App.css';
import NavBar from './component/Navbar';
import Content from './component/Content';
import {BrowserRouter,Router, Route, Switch} from 'react-router-dom';
import MeetupForm from './component/meetupForm';

class App extends Component {
  render() {       
   
    return (
      <BrowserRouter>
      <div className="App">     
        <NavBar />                
          <Switch>
            <Route exact path="/" component={Content}></Route>
            <Route exact path="/meetup/" component={MeetupForm}></Route> 
            <Route path="/meetup/:name" component={MeetupForm}></Route> 
          </Switch>  
               
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
