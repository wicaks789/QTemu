import React, { Component } from 'react';
import MyButton from './reuse/myButton';
import { Image,Row,Col,Jumbotron, Container } from 'react-bootstrap'
import BannerImage from '../img/training.jpg'

export default class Banner extends Component {
    render() {
        return (           
            <Jumbotron fluid style={{padding:'10px'}}>
                <Container style={{margin:'10px'}}>
                    <Row>
                        <Col sm={4}>
                            <Image src={BannerImage} fluid/>
                        </Col>
                        <Col sm={8} style={{ textAlign: 'left' }}>
                            <h3>Hacktiv8 Meetup</h3>
                            <p>Location    : Jakarta, Indonesia</p>
                            <p>Members     : 1078</p>
                            <p>Organizer   : Adhy Wiranata</p>
                            <MyButton variant="warning" text="Join Us"/>
                        </Col>
                    </Row>
                </Container>
            </Jumbotron>            
        );
    }
}