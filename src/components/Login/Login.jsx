import React from "react";
import {Field, reduxForm} from "redux-form";
import {profileAPI} from "../../api/api";
import {getStatus, getUserProfile, setStatus, updateStatus} from "../../redux/profile-reducer";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {login} from "../../redux/auth-reducer";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";

const LoginForm = (props) => {
    return (
            <form onSubmit={props.handleSubmit}>
                <div>
                    <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
                </div>
                <div>
                    <Field placeholder={"Password"} name={"password"} component={Input} type={"password"} validate={[required]}/>
                </div>
                <div>
                    <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
                </div>
                <div>
                    <button>Login</button>
                </div>
            </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe);
    }

  if (props.isAuth) {
      return  <Redirect to={"/profile"} />
  }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit} userName={props.userName}/>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
      isAuth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {login}),
    withRouter
)(Login)





