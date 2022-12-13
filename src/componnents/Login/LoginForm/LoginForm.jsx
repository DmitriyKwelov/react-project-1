import React from "react";
import {Field, reduxForm} from "redux-form";
import {Input} from "../../common/FormsControls/FormControls";
import {required} from "../../utils/validators/validators";
import style from '../../common/FormsControls/FormControls.module.css'

const LoginForm = ({handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <Field placeholder={"Email"} name={"email"}
                       validate={[required]} component={Input}/>
            </div>
            <div>
                <Field placeholder={"password"} name={"password"} type={"password"}
                       validate={[required]} component={Input}/>
            </div>
            <div>
                <Field component={Input} name={"rememberMe"} type="checkbox"/> remember me
            </div>
            {error && <div className={style.formSummaryError}>
                {error}
            </div>}
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const loginReduxForm = reduxForm({form: 'login'})(LoginForm);


export default loginReduxForm;