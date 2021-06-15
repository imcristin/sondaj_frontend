import React, { Component } from "react";

import PollService from "../services/poll.service";

export default class Answers extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {}
    }

    componentDidMount() {
        PollService.getResponses(this.props.match.params.pollid).then(
            response =>{
                this.setState({
                    list:response.data
                })
                console.log(this.state.list)

            }
        )
    }
    render() {
        return (
            <div className="container">
                <header className="jumbotron">
                    123asd
                    {JSON.stringify(this.state.list)}
                </header>
            </div>
        )
    }
}
