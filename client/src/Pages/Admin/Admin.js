import React, { Component } from 'react';
import axios from "axios";
import { Redirect } from 'react-router-dom';
import{
    getFromStorage,
    setInStorage,
  } from '../../utils/storage'
class Admin extends Component {

  state = {
    loggedIn: false,
    token: "",
    UserToken: "",
    errorMessages: false,
    message: '',
    email: '',
    password: '',
  }

  componentDidMount() {
    const obj = getFromStorage('the_main_app')
    if(obj && obj.token) {
      const {token} =obj
      //verify token 
      fetch('http://localhost:3001/api/account/verify?token=' + token)
        .then(res => res.json())
        .then(json => {
          console.log(json)
          if(json.success) {
            this.setState({
              token,
              loggedIn: true
            })
          } 
        })
    } 
  }


  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
        axios.post('http://localhost:3001/api/account/signin', {
          email: this.state.email,
          password: this.state.password
        })
        .then(res => res)
   .then(json => {
     console.log(json.data.token)
      if(json.data.success) {
        setInStorage('the_main_app', {token: json.data.token})
        setInStorage('app', {UserToken: json.data.Usertoken})
        window.location.assign('/admin/dashboard');
      } if (json.data) {
        this.setState({
          message: json.data.message,
          errorMessages: true,
          UserToken: json.data.Usertoken
        })
        console.log(`message: ${this.state.message}`)
        console.log(` ${this.state.UserToken}`)
      } 
   })
   .catch(err => console.log(err));
        
      }
    

  render() {
    if (this.state.loggedIn === true) {
			return <Redirect to={{ pathname: '/' }} />
		}else{
    return (
      <div className="inner-container">
        <div className="header">
          Login
          </div>
        <div className="box">
          <form>

            <div className="input-group">
              <label htmlFor="username">Username</label>
              <input
                onChange={this.handleInputChange}
                value={this.state.email}
                type="text"
                name="email"
                className="login-input"
                placeholder="Username"
              />
            </div>

            <div className="input-group">
              <label htmlFor="password">Password</label>
              <input
                onChange={this.handleInputChange}
                value={this.state.password}
                type="password"
                name="password"
                className="login-input"
                placeholder="Password"
              />
            </div>

            <button
              type="button"
              className="login-btn"
              onClick={this.handleSubmit}>Login</button>
          </form>

        </div>
      </div>
    );
  }
}
  }


export default Admin;