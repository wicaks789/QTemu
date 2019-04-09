import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import UpcomingMeetup from './upcomingMeetup';
import AboutMeetup from './aboutMeetup';
import Members from './members';
import PastMeetup from './pastMeetup';
import Footer from './footer';

class ContentList extends Component {
    render() {       
        return (
            <Container style={{ margin: 0, padding: 0, maxWidth: '100%' }}>
                <UpcomingMeetup members={this.props.members} title="Next Meetup" />
                <AboutMeetup title="About Meetup"/>                
                <Members members={ this.props.members.length > 0 ? this.props.members[0].name : "" }  title="Members" link="#"/>   
                <PastMeetup title="Past Meetup" link="#"/>   
                <Footer/>   
            </Container>
        )
    }
}
 
export default ContentList;