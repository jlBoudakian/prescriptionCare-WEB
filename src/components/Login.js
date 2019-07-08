import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import api from '../api/services';
import validator from 'validator';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            redirect: false
        };
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleCheck = this.handleCheck.bind(this);

    }

    componentDidMount() {
        this.source = api.cancelToken.source();
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleCheck(e) {
        if (!this.state.email) {
            e.preventDefault();
            return alert('E-mail needed!');
        } else if (!validator.isEmail(this.state.email)) {
            e.preventDefault();
            return alert('Invalid e-mail!');
        } else if (!this.state.password) {
            e.preventDefault();
            return alert('Password needed!');
        } else if (this.state.password.length < 6) {
            e.preventDefault();
            return alert('Password must have 6 characters!');
        } else {
            const data = {
                email: this.state.email,
                password: this.state.password
            }
            api.authentication.login(data, this.source.token)
                .then((res) => {
                    // console.log(res);
                    if (!res.data.auth) {
                        console.log('erro');
                    } else if (validator.isJWT(res.data.auth)) {
                        this.setState({ redirect: true })
                    }
                })
                .catch((error) => {
                    console.log('no')
                })
            e.preventDefault();
        }
    }


    render() {
        return (

            <div className="login-form">
                <form action="/">
                    <div className="top">
                        <img src="./img/logoIMG.png" alt="icon" className="icon" />
                        <h1>PrescriptionCare</h1>
                        <h4>What the doctor ordered!</h4>
                    </div>
                    <div className="form-area">
                        <div className="group">
                            <input type="text" className="form-control" placeholder="Username" onChange={this.handleChangeEmail} />
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="group">
                            <input type="password" className="form-control" placeholder="Password" onChange={this.handleChangePassword} />
                            <i className="fa fa-key"></i>
                        </div>
                        {/* <div className="checkbox checkbox-primary">
                            <input id="checkbox101" type="checkbox" checked />
                            <label for="checkbox101"> Remember Me</label>
                        </div> */}
                        <button
                            type="submit"
                            className="btn btn-default btn-block"
                            onClick={this.handleCheck}
                        >
                            LOGIN
                        </button>
                        {this.state.redirect ? <Redirect to="/home" /> : null}
                    </div>
                </form>
                <div className="footer-links row">
                    <div className="col-xs-6"><a href="/register"><i className="fa fa-external-link"></i> Register Now</a></div>
                    <div className="col-xs-6 text-right"><a href="#"><i className="fa fa-lock"></i> Forgot password</a></div>
                </div>
            </div>
        )
    }
}

export default Login;