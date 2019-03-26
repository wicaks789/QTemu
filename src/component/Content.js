import React, { Component } from 'react';
import Banner from './Banner';
import ContentList from './contentList';
import axios from 'axios';

class Content extends Component {
    constructor(props){
        super(props);
        this.state ={
            members:null                     
        }      
    }          
    componentDidMount(){
        axios.get('https://swapi.co/api/people/')
            .then(response=> {
                this.setState({
                    members: response.data.results,
                });              
        })
    }


    render() {
        return (
            <React.Fragment>
                <div className="content">
                <Banner members={this.state.members}/>
                <ContentList members={this.state.members}/>                
                </div>
            </React.Fragment>
        )
    }
}
export default Content;


