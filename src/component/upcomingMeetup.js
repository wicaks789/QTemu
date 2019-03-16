import React ,{Component} from 'react';
import {Jumbotron,Container,Row,Col} from 'react-bootstrap';

export default class UpcomingMeetup extends Component {
    render(){
        return (
            <Jumbotron style={{ padding: '10px',marginLeft:'30px',marginRight:'30px' }}>
            <Container style={{ margin: '10px' }}>
                <Row>
                    <Col sm={12} style={{ textAlign: 'left' }}>
                        <h6>Awesome meetup and event</h6>
                        <p style={{color:'grey'}}>25 January 2019</p>
                        <p>
                        Hello, Javascript & Mode.js Ninjas !<br />
                  Get ready for our monthly meetup JakartaJS! This will be our fifth meetup of 2018! <br />
                  The Meetup format will contain some short stories and technical Talks .<br />
                  If you have a short announcement you'd like to share with the audience, you may do so during open mic announcement.<br /><br />

                  Remember to bring a photo ID to get through building security .<br /><br />
                  ---------<br /><br />
                  See you there!
                  Best, Hengki , Giovanni , Sofian, Riza, Agung The Jakarta JS Organizers
                        </p>
                    </Col>
                </Row>
            </Container>
            </Jumbotron>     

        )
    }
}
