import React, { Component } from 'react';
import Banner from './Banner';
import ContentList from './contentList';
import { fetchUser }from '../action';
import { connect } from 'react-redux';

class Content extends Component {
    componentDidMount(){
        this.props.fetchUser();       
        }
              
    // componentWillMount(){
    //     axios.get('https://swapi.co/api/people/')
    //         .then(response=> {
    //             this.setState({
    //                 members: response.data.results,
    //             });              
    //     })
    //}

    render() {
        return (
            <React.Fragment>
                <div className="content">
                <Banner members={this.props.result.people.length > 0 ? this.props.result.people : ""}/>
                <ContentList members={this.props.result.people.length > 0 ? this.props.result.people : ""}/>                
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps =(state)=>{
    return {
      result:state
    }
  }
  
  const mapDispatchToProps = {fetchUser}
  
  export default connect(mapStateToProps,mapDispatchToProps)(Content); 


