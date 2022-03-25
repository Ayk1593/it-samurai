import {authAPI, securityAPI} from "../api/api";
import {stopSubmit} from "redux-form";


const SET_AUTH_USER_DATA = 'samurai-network/auth/SET_AUTH_USER_DATA';
const GET_CAPTCHA_URL_SUCCESS = 'samurai-network/auth/GET_CAPTCHA_URL_SUCCESS';
const CAPTCHA_URL_NULL = 'samurai-network/auth/CAPTCHA_URL_NULL';
const INCORRECT_LOG_OR_PASS = 'samurai-network/auth/INCORRECT_LOG_OR_PASS';


let initialState = {
    userId: null as number | null,
    email: null as string | null,
    login: null as string | null,
    isAuth: false,
    captchaUrl: null as string | null,
    isIncorrectLogOrPass: false,
    errorMessage: null as string | null
}

export type InitialStateType = typeof initialState

const authReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case SET_AUTH_USER_DATA:
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        case CAPTCHA_URL_NULL:
            return {
                ...state,
                captchaUrl: action.captchaUrl
            }
        case INCORRECT_LOG_OR_PASS:
            return {
                ...state,
                isIncorrectLogOrPass: action.isIncorrectLogOrPass,
                errorMessage: action.errorMessage
            }
        default:
            return state;
    }

}

type SetAuthUserDataActionTypePayloadType = {
    userId: number | null
    email: string | null
    login: string | null
    isAuth: boolean
}
type SetAuthUserDataActionType = {
    type: typeof SET_AUTH_USER_DATA,
    payload: SetAuthUserDataActionTypePayloadType
}

export const setAuthUserData = (userId: number | null, email: string | null, login: string | null, isAuth: boolean): SetAuthUserDataActionType => ({
    type: SET_AUTH_USER_DATA,
    payload: {userId, email, login, isAuth}
})

type getCaptchaUrlSuccessActionType = {
    type: typeof GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl: string}
}
export const getCaptchaUrlSuccess = (captchaUrl: string): getCaptchaUrlSuccessActionType => ({
    type: GET_CAPTCHA_URL_SUCCESS,
    payload: {captchaUrl}
})

type captchaUrlNullActionType = {
    type: typeof CAPTCHA_URL_NULL,
    captchaUrl: null
}
export const captchaUrlNull = (captchaUrl: null = null): captchaUrlNullActionType => ({
    type: CAPTCHA_URL_NULL,
    captchaUrl
})


type isIncorrectActionType = {
    type: typeof INCORRECT_LOG_OR_PASS,
    isIncorrectLogOrPass: boolean,
    errorMessage: string

}
export const isIncorrect = (isIncorrectLogOrPass: boolean, errorMessage: string): isIncorrectActionType => ({type: INCORRECT_LOG_OR_PASS, isIncorrectLogOrPass, errorMessage});



export const getAuthUserData = () => {
    return async (dispatch: any) => {
        let data = await authAPI.me()
        if (data.resultCode === 0) {
            let {id, email, login} = data.data
            dispatch(setAuthUserData(id, email, login, true));
        }
    }
}


export const login = (email: string, password: string, rememberMe: boolean, captcha: string) => {
    return async (dispatch: any) => {
        let response = await authAPI.login(email, password, rememberMe, captcha)
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData());
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl())
            }
            let errorMessage = response.data.messages[0];
            // dispatch(stopSubmit("login", {_error: message}));
            dispatch(isIncorrect(true, errorMessage));
        }
    }
}

export const getCaptchaUrl = () => {
    return async (dispatch: any) => {
        const response = await securityAPI.getCaptchaUrl();
        const captchaUrl = response.data.url;
        dispatch(getCaptchaUrlSuccess(captchaUrl))
    }
}


export const logout = () => {
    return async (dispatch: any) => {
        let response = await authAPI.logout();
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    }
}

export default authReducer;