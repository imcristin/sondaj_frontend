import React, { Component } from "react";

export default class CheckBox extends Component{
    constructor(props){
        super(props);

        this.state = {
            question: "",
            answers : ["asd","asd2","Asd3"]
        };
    }

    render(){
        return (
            <div>
                {this.state.answers.map((i,index)=>
                    <div key={index}>
                    <input type="checkbox" name={"a"+index} id={"a"+index}/>
                    <label htmlFor={"a"+index}>{i}</label>
                    </div>
                )}

            </div>
        )
    }
}