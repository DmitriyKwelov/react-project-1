import React from "react";
import {Field, reduxForm} from "redux-form";
import LoginForm from "./LoginForm/LoginForm";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Navigate} from "react-router-dom";

const Login = (props) => {

    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe )
    }

    if(props.isAuth) {
        return  <Navigate to={"/profile"}/>
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth
})

export default connect(mapStateToProps, {login})(Login);