import React, { Component } from 'react';
import './hello.css';

class Hello extends Component{
    render() {
        return (
            <div>
                <h1 className="tc f1">Hello World!</h1>
                <p className="tc">Welcome to React</p>
            </div>
        )
    }

}

export default Hello;