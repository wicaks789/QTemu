import React , {Component} from 'react';
import {connect} from 'react-redux';
import MyButton from './reuse/myButton';
import { increment,decrement,reset } from '../action'

class MeetupForm extends Component {
    render(){        
        return(     
              <div>
                  <p>{this.props.match.params.name}</p> 
                  <p>{this.props.result.angka}</p>           
              <MyButton variant="success" text="Increment" handleClick={()=>this.props.increment()}/>
              <MyButton variant="warning" text="Decrement" handleClick={()=>this.props.decrement(1)}/>
              <MyButton variant="danger" text="Reset" handleClick={()=>this.props.reset()}/>
            </div>            
        )
    }
}

const mapStateToProps =(state)=>{
  return {
    result:state
  }
}

const mapDispatchToProps = {increment,decrement,reset}

export default connect(mapStateToProps,mapDispatchToProps)(MeetupForm);  