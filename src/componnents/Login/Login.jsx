import React from "react";
import {Field, reduxForm} from "redux-form";
import LoginForm from "./LoginForm/LoginForm";

const Login = () => {

    const onSubmit = (formData) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>LOGIN</h1>
            <LoginForm onSubmit={onSubmit}/>
        </div>
    )
}



export default Login;