import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import Form from '../todo/todoForm'

// import Nave from './component/nave'
// import Matrix from './component/matrix'

export default class AppB extends Component {


    render() {
        return (
            <div>
                <AppBar
                    title="Sonda"
                />
                <Form/>
                {/* <Matrix/> */}
            </div>
        )
    }
}
