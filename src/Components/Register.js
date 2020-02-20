import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'

class Register extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  handleRegister = () => {
    let { email, password } = this.state
    axios.post('/api/register', {email, password}).then( res => {
      //TODO: get user off of redux
      this.props.history.push('/dash')
    }).catch( err => console.log(err))
  };

  render() {
    return (
      <div className="app-body">
        <div className="input-container">
          <div className="flex-horizontal inputs">
            <div className="flex-vertical">
              <input
                maxLength="100"
                placeholder="Enter Email"
                name="email"
                onChange={ e => this.handleInput(e)}
              />
              <input
                type="password"
                maxLength="20"
                placeholder="Enter Password"
                name="password"
                onChange={ e => this.handleInput(e)}
              />
            </div>
            <button
              onClick={
                //something goes here
              }
              className="input-container-button"
            >
              Register
            </button>
          </div>
          <div className="flex-horizontal link">
            <span>Already have an account? login here: </span>
            <Link to="/" className="input-container-button">
              Log in
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Register;
