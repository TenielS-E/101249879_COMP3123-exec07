import React, { Component } from "react";

export default class MyInfo extends Component {
    constructor(){
        super()
        this.props = {
            welcome: "Welcome",
            program: "ReactJS Programming",
            id: 101010101,
            fullName: "John Doe",
            school: "School Name"
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>{ this.props.welcome }</h1>
                <h2>{this.props.program}</h2>
                <h3>ID: {this.props.id}</h3>
                <h4>Name: {this.props.fullName}</h4>
                <h5>{this.props.school}</h5>
            </React.Fragment>
        );
    }
}