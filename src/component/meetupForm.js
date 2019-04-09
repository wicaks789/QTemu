import React , {Component} from 'react';
import MyButton from './reuse/myButton';
import { increment,decrement,reset,fetchUser } from '../action';
import {connect} from 'react-redux';

class MeetupForm extends Component {
    render(){              
        return(     
              <div>
                  <p>{this.props.match.params.name}</p> 
                  <p>{this.props.result.angka}</p>                    

              <MyButton variant="success" text="Increment" handleClick={()=>this.props.increment()}/>
              <MyButton variant="warning" text="Decrement" handleClick={()=>this.props.decrement(1)}/>
              <MyButton variant="danger" text="Reset" handleClick={()=>this.props.reset()}/> 
              <MyButton variant="danger" text="fetch" handleClick={()=>this.props.fetchUser()}/>               
              
            </div>            
        )
    }
}

const mapStateToProps =(state)=>{
  return {
    result:state
  }
}

const mapDispatchToProps = {increment,decrement,reset,fetchUser}

export default connect(mapStateToProps,mapDispatchToProps)(MeetupForm);  