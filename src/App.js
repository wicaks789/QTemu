import React, { Component } from 'react';
import './App.css';
import NavBar from './component/Navbar';
import Content from './component/Content';
import {BrowserRouter,Router, Route, Switch} from 'react-router-dom';
import MeetupForm from './component/meetupForm';
import {Provider}from 'react-redux';
import store from './store';

class App extends Component {
  render() {    
   
    return (
      <Provider store={store}>
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
      </Provider>
     
    );
  }
}

export default App;
