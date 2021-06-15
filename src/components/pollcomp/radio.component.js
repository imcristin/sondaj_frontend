import React, { Component } from "react";

export default class Radio extends Component{
    constructor(props){
        super(props);

        this.state = {
            qid: 0,
            question: "",
            answers : ["asd","rrasd2","Asd3"]
        };
    }

    render(){
        return (
            <div>
                {/*{JSON.stringify(this.props)}*/}
                <p>
                    <h3>{this.props.question}</h3>
                    {
                        this.props.answers.map((item,index)=>
                            <p key={index}>
                            <input type={"radio"} value={item} id={this.props.nth+index} name={this.props.nth} /> <label htmlFor={this.props.nth+index}>{item}</label>
                            </p>
                        )
                    }
                </p>
            </div>
        )
    }
}