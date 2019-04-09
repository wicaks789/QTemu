import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col, Image } from 'react-bootstrap';

class UpcomingMeetup extends Component {  
   
    render() {       
        const { title, link } = this.props;
        let showLink;

        if (link !== undefined) {
            showLink = <Col style={{ textAlign: 'right', marginRight: '30px' }}><h6><a href={link}>See All</a></h6></Col>;
        }
        return (
            <React.Fragment>
                <Row>
                    <Col style={{ textAlign: "left" }}><h5>{title}</h5></Col>
                    {showLink}
                </Row>
                <Row>
                    <Col sm={12}>
                        <Jumbotron style={{ padding: '10px', marginLeft: '30px', marginRight: '30px' }}>
                            <Container style={{ margin: '10px' }}>
                                <Row>
                                    <Col style={{ textAlign: 'left' }}>
                                        <div style={{ float: 'left', marginRight: '10px' }}>
                                            <Image src="https://randomuser.me/api/portraits/men/34.jpg"
                                                roundedCircle style={{ width: '70px', height: '70px', }} fluid />
                                        </div>
                                        <div style={{ display: "table cell", verticalAlign: "middle" }}>
                                            <h6>Organizer</h6>
                                            <p>{this.props.members} &nbsp;&nbsp;&nbsp;   <a href="https://facebook.com"><b>4 Others</b></a></p>
                                          
                                        </div>
                                    </Col>
                                </Row>
                            </Container>
                        </Jumbotron>
                    </Col>
                </Row>
            </React.Fragment>

        )
    }
}

export default UpcomingMeetup;
