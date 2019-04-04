import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

class MyButton extends Component {   
    render() {
        const { variant, text, handleClick } = this.props;
        return (
            <Button variant={variant} onClick={handleClick}>{text}</Button>
        )
    }
}

export default MyButton;