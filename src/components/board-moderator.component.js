import React, { Component } from "react";
import ReactDOM from 'react-dom';

import CheckBox from "./pollcomp/checkbox.component"
import Radio from "./pollcomp/radio.component"
import Text from "./pollcomp/text.component"


import UserService from "../services/user.service";

export default class BoardModerator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: "",
      list : []
    };
    this.onAddBtnClick = this.onAddBtnClick.bind(this)
  }
  onAddBtnClick(event){
    const type = document.getElementById("cadsjisaoasi").value;
    this.state.list.push(type);
  }

  returnComponentByText(props){
    switch(props.name){

    }
  }

  componentDidMount() {
    UserService.getModeratorBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>{this.state.content}</h3>
          <div>


            <select required={true} id="cadsjisaoasi">
              <option value="Checkbox">Checkbox</option>
              <option value="Radio">Radio</option>
              <option value="Date">Date</option>
              <option value="Number">Number</option>
              <option value="Text">Text</option>
            </select>


            <button onClick={this.onAddBtnClick}>add</button>

            <div id="questions_list">
              {
                this.state.list.map((i,index)=>
                    <div key={index}>
                      {}
                    </div>
                )
              }
-          </div>

          </div>
        </header>
      </div>
    );
  }
}
