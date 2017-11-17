import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Form from '../todo/todoForm'
export default class AppB extends Component {




    render() {
        return (
            <div>
                <AppBar
                    title="Sonda"
                />
                <Form/>
            </div>
        )
    }
}
