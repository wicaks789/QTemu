import React, { Component } from 'react';
import { Navbar,Nav} from 'react-bootstrap';
import MyButton from './reuse/myButton';
import {Link} from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <Navbar bg="primary" expand="lg" variant="dark">
            <Link to="/" className="navbar-brand"><b>QTemu</b></Link>                  
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Link to="/meetup/" className="nav-link">Create Meetup</Link>
                        <Link to="/meetup/location/" className="nav-link">Past Meetup</Link>                         
                                             
                    </Nav> 
                    <MyButton variant="warning" text="Login"></MyButton>                                     
                   
                </Navbar.Collapse>                
            </Navbar>
        )
    }
}

export default NavBar;