import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { connect } from 'react-redux'
import { getUser } from '../redux/reducer'

class Landing extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: ""
    };
    //this.handleLogin = this.handleLogin.bind(this)
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  };

  handleLogin = () => {
    let { email, password } = this.state
    axios
      .post('/api/login', {email, password})
      .then( res => {
        this.props.getUser(res.data)
        this.props.history.push('/dash')
      })
      .catch( err => console.log(err))
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
              onClick={() => this.handleLogin()}
              className="input-container-button"
            >
              Log in
            </button>
          </div>
          <div className="flex-horizontal link">
            <span>Don't have an account? Register here: </span>
            <Link to="/register" className="input-container-button">
              Register
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

// first parameter of connect is redux state, second is redux actions/functions
export default connect(null, {getUser})(Landing);
