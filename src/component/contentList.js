import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import UpcomingMeetup from './upcomingMeetup';

class ContentList extends Component {
    render() {
        const {title,link} = this.props;
        return (
            <Container style={{ margin: 0, padding: 0, maxWidth: '100%' }}>
                <Row>
                    <Col style={{ textAlign: "left" }}><h5>{title}</h5></Col>
                    <Col style={{ textAlign: "right",marginRight:'30px' }}><h6><a href="{link}">See All</a></h6></Col>
                </Row>
                <Row>
                    <Col>
                        <UpcomingMeetup/>
                    </Col>
                    
                </Row>
            </Container>
        )
    }

}

export default ContentList;