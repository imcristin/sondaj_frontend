import React, { Component } from "react";

import PollService from "../services/poll.service";

export default class ActivePolls extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[]
        };
    }

    componentDidMount() {
        PollService.getActivePolls().then(
            response => {
                response.data.forEach((item)=>{
                    this.state.list.push(item.name);
                });
                this.setState({
                    list:this.state.list
                })
                console.log(this.state.list);

            }
        );
    }

    render() {
        return (
            <div className="container">
                <header className="jumbotron">
                    <h1>List of active polls</h1>
                        <>
                        <h3>
                            <ol>
                            {this.state.list.map((value, index) =>
                                <li> <a href={"poll/get/"+(index+1)}>{value}</a> </li>
                            )}
                            </ol>
                        </h3>
                        </>
                </header>
            </div>
        );
    }
}
