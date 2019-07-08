import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
import api from '../api/services';
import validator from 'validator';


class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "",
            birthDate: "",
            email: "",
            password: "",
            redirect: false
        };
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeBirthDate = this.handleChangeBirthDate.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleCheck = this.handleCheck.bind(this);

    }

    componentDidMount() {
        this.source = api.cancelToken.source();
    }

    handleChangeName(event) {
        this.setState({ name: event.target.value });
    }

    handleChangeBirthDate(event) {
        this.setState({ birthDate: event.target.value });
    }

    handleChangeEmail(event) {
        this.setState({ email: event.target.value });
    }

    handleChangePassword(event) {
        this.setState({ password: event.target.value });
    }

    handleCheck(e) {
        if (!this.state.name) {
            e.preventDefault();
            return alert('Name needed!');
        } else if (!this.state.birthDate) {
            e.preventDefault();
            return alert('BirthDate needed!');
        } else if (!this.state.email) {
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
                name: this.state.name,
                birthDate: this.state.birthDate,
                email: this.state.email,
                password: this.state.password,
            };
            api.users.create(data, this.source.token)
                .then((res) => {
                    console.log(res);
                    this.setState({ redirect: true });
                })
                .catch((error) => {
                    console.log(error);
                });
            e.preventDefault();
        }
    }

    render() {
        return (
            <div className="login-form">
                <form>
                    <div className="top">
                        <h1>Register</h1>
                        <h4>Join to our community now !</h4>
                    </div>
                    <div className="form-area">
                        <div className="group">
                            <input type="text" className="form-control" placeholder="Fullname" onChange={this.handleChangeName} />
                            <i className="fa fa-user"></i>
                        </div>
                        <div className="form-horizontal" style={{ marginBottom: 18 }}>
                            <fieldset>
                                <div className="control-group">
                                    <div className="controls">
                                        <div className="input-prepend input-group">
                                            <span className="add-on input-group-addon"><i className="fa fa-calendar"></i></span>
                                            <input type="text" id="date-picker" className="form-control" placeholder="03/18/2015" onChange={this.handleChangeBirthDate} />
                                        </div>
                                    </div>
                                </div>
                            </fieldset>
                        </div>
                        <div className="group">
                            <input type="text" className="form-control" placeholder="E-mail" onChange={this.handleChangeEmail} />
                            <i className="fa fa-envelope-o"></i>
                        </div>
                        <div className="group">
                            <input type="password" className="form-control" placeholder="Password" onChange={this.handleChangePassword} />
                            <i className="fa fa-key"></i>
                        </div>
                        <div className="group">
                            <input type="password" className="form-control" placeholder="Password again" />
                            <i className="fa fa-key"></i>
                        </div>
                        <button type="submit" className="btn btn-default btn-block" onClick={this.handleCheck}>REGISTER NOW</button>
                    </div>
                </form>
                <div className="footer-links row">
                    <div className="col-xs-6"><a href="/"><i className="fa fa-sign-in"></i> Login</a></div>
                    <div className="col-xs-6 text-right"><a href="#"><i className="fa fa-lock"></i> Forgot password</a></div>
                </div>
                {this.state.redirect ? <Redirect to="/home" /> : null}
            </div>
        )
    }
}

export default Register;