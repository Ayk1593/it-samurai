import React from "react";
import {Field, reduxForm} from "redux-form";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {login} from "../../redux/auth-reducer";
import {Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import style from "../common/FormsControls/FormsControls.module.css"
import handleSubmit from "redux-form/lib/handleSubmit";
import {useForm} from "react-hook-form";
import styles from "../common/FormsControls/FormsControls.module.css";
import cn from "classnames";


const LoginForm = ({captchaUrl, ...props}) => {
    const {
        register,
        formState: {errors},
        handleSubmit
    } = useForm();

    const onSubmit = (data) => {
        props.onSubmit(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <input className={cn({[styles.formControlError]: errors?.email})}
                    {...register ("email", {
                    required: "Field is required"})} placeholder={"Email"}  />
                <div className={styles.formControl}>
                    {errors?.email && <div>{errors.email?.message || "Error!"} </div>}
                </div>
            </div>
            <div>
                <input className={cn({[styles.formControlError]: errors?.password})}
                    {...register ("password", {
                    required: "Field is required"})} placeholder={"Password"}  type="password" />
            </div>
            <div className={styles.formControl}>
                {errors?.password && <div>{errors.password?.message || "Error!"} </div>}
            </div>
            <div>
                <input {...register ("rememberMe")} type={"checkbox"}/> remember me
            </div>

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl &&
            <input  {...register ("captcha")} placeholder={"Symbols from image"}/>}

            {/*{error && <div className={style.formSummaryError}>*/}
            {/*    {error}*/}
            {/*</div>}*/}
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
}


// const LoginForm = ({handleSubmit, error, captchaUrl}) => {
//     return (
//         <form onSubmit={handleSubmit}>
//             <div>
//                 <Field placeholder={"Email"} name={"email"} component={Input} validate={[required]}/>
//             </div>
//             <div>
//                 <Field placeholder={"Password"} name={"password"} component={Input} type={"password"}
//                        validate={[required]}/>
//             </div>
//             <div>
//                 <Field component={Input} name={"rememberMe"} type={"checkbox"}/> remember me
//             </div>
//
//             {captchaUrl && <img src={captchaUrl}/>}
//             {captchaUrl &&
//             <Field placeholder={"Symbols from image"} name={"captcha"} component={Input} validate={[required]}/>}
//
//             {error && <div className={style.formSummaryError}>
//                 {error}
//             </div>}
//             <div>
//                 <button>Login</button>
//             </div>
//         </form>
//     )
// }
//
// const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}/>
        </div>
    )
}


let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}

export default compose(
    connect(mapStateToProps, {login}),
    withRouter
)(Login)





