import React, {useEffect} from "react";
import {compose} from "redux";
import {connect} from "react-redux";
import {Redirect, withRouter} from "react-router-dom";
import {captchaUrlNull, isIncorrect, login} from "../../redux/auth-reducer";
import style from "../common/FormsControls/FormsControls.module.css"
import {Controller, useForm} from "react-hook-form";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import FormControlLabel from "@mui/material/FormControlLabel";


const LoginForm = ({captchaUrl, isIncorrectLogOrPass, errorMessage, captchaUrlNull, isIncorrect, ...props}) => {
    const {
        register,
        formState: {errors},
        handleSubmit,
        control
    } = useForm();

    const onSubmit = (data) => {
        props.onSubmit(data)
    }

    useEffect(() => {
       captchaUrlNull();
       isIncorrect(false);
    }, [])

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={style.textField}>

                <Controller
                    control={control}
                    name="email"
                    rules={{required: "Поле обязательно к заполнению"}}
                    render={({field}) => (
                        <TextField
                            size="small"
                            label="Email"
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            error={errors.email?.message}
                            helperText={errors.email?.message}
                        />
                    )}
                />

            </div>
            <div className={style.textField}>
                <Controller
                    control={control}
                    name="password"
                    rules={{required: "Поле обязательно к заполнению"}}
                    render={({field}) => (
                        <TextField
                            size="small"
                            type="password"
                            label="Password"
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            error={errors.password?.message}
                            helperText={errors.password?.message}
                        />
                    )}
                />
            </div>
            {isIncorrectLogOrPass && <div className={style.incorrect}>{errorMessage}</div>}
            <div className={style.textField}>
                <Controller
                    control={control}
                    name="rememberMe"
                    render={({field: {onChange, value}}) => (
                        <FormControlLabel
                            control={<Checkbox
                                checked={value}
                                onChange={onChange}/>} label="Запомнить меня"
                        />
                    )}
                />

            </div>

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl &&
            <div className={style.inputCaptcha}>
                <Controller
                    control={control}
                    name="captcha"
                    rules={{required: "Поле обязательно к заполнению"}}
                    render={({field}) => (
                        <TextField
                            size="small"
                            label="Symbols from image"
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            error={errors.captcha?.message}
                            helperText={errors.captcha?.message}
                        />
                    )}
                /> </div>}

            {/*{error && <div className={style.formSummaryError}>*/}
            {/*    {error}*/}
            {/*</div>}*/}

            <div className={style.textField}>
                <Button variant="contained" type="submit">Войти</Button>
            </div>

        </form>
    )
}


const Login = (props) => {
    const onSubmit = (formData) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return (
        <div>
            <h2 className={style.textField}>Вход</h2>
            <LoginForm onSubmit={onSubmit} captchaUrl={props.captchaUrl} isIncorrectLogOrPass={props.isIncorrectLogOrPass}
                       errorMessage={props.errorMessage}
                       captchaUrlNull={props.captchaUrlNull}
                       isIncorrect={props.isIncorrect}/>
        </div>
    )
}


let mapStateToProps = (state) => {
    debugger
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl,
        isIncorrectLogOrPass: state.auth.isIncorrectLogOrPass,
        errorMessage: state.auth.errorMessage
    }
}

export default compose(
    connect(mapStateToProps, {login, captchaUrlNull, isIncorrect}),
    withRouter
)(Login)





