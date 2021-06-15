import React, { Component } from "react";

export default class Text extends Component{
    constructor(props){
        super(props);

        this.state = {
            qid: 0,
            question: "Va place siteul?",
        };
    }

    render(){
        return (
            <div>
                {
                    <div key={this.state.qid}>
                            <label htmlFor={"a"+this.state.qid}>{this.state.question}</label><br/>
                            <input type="text" placeholder={"Write here"} />
                    </div>

                }

            </div>
        )
    }
}