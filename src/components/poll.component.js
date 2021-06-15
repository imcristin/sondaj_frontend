import React, { Component } from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";


import CheckBox from "./pollcomp/checkbox.component"
import Radio from "./pollcomp/radio.component"
import Text from "./pollcomp/text.component"

import PollService from "../services/poll.service";

export default class Poll extends Component {
    constructor(props, context) {
        super(props, context);

        this.state = {}
    }

    componentDidMount() {
        PollService.getPoll(this.props.match.params.pollid).then(
            response => {
                console.log(response)
                this.setState({
                    pollid: this.props.match.params.pollid,
                    name: response.data.name,
                    answers: response.data.answers,
                    questions: response.data.questions,
                    types: response.data.types,
                    n: response.data.types.length
                })
                var items=[]
                for(let i=0;i<this.state.n;i++)
                    items.push(<Radio nth={"q"+i} question={this.state.questions[i]} answers={this.state.answers[i]}></Radio>)

                this.setState({items:items})

            }
        );
    }


    render() {
        return (
            <div className="container">
                <header className="jumbotron">
                    <h1>{this.state.name}</h1>
                    {/*<form onSubmit={PollService.postResponse(this.state.pollid)}>*/}
                    <form method="POST" action={"http://51.68.188.213:3000/api/poll/send/"+this.state.pollid+"/"}>
                        {this.state.items}
                        <input type="submit" value="Submit"/>
                    </form>
                </header>
            </div>


        )
    }

}
