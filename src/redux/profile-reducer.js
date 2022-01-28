import {profileAPI} from "../api/api";
import React from "react";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const STATE_EDIT_MODE = 'STATE_EDIT_MODE';


let initialState = {
    posts: [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It\'s my first post', likesCount: 20},
        {id: 2, message: 'Blabla', likesCount: 11},
        {id: 2, message: 'Dada', likesCount: 5}
    ],
    profile: null,
    status: "",
    stateEditMode: false
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 5,
                message: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case DELETE_POST:
            return {
                ...state,
                posts: state.posts.filter(p => p.id != action.postId)
            }
        case SAVE_PHOTO_SUCCESS:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        case STATE_EDIT_MODE:
            return {
                ...state,
                stateEditMode: action.stateEditMode
            }
        default:
            return state;
    }

}


export const addPost = (newPostText) => ({type: ADD_POST, newPostText});
export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile});
export const setStatus = (status) => ({type: SET_STATUS, status});
export const deletePost = (postId) => ({type: DELETE_POST, postId});
export const savePhotoSuccess = (photos) => ({type: SAVE_PHOTO_SUCCESS, photos});
export const changeStateEditMode = (stateEditMode) => ({type: STATE_EDIT_MODE, stateEditMode});




export const getUserProfile = (userId) => {
    return (dispatch) => {
        profileAPI.getProfile(userId)
            .then(data => {
                dispatch(setUserProfile(data));
            });
    }
}

export const getStatus = (userId) => {
    return (dispatch) => {
        profileAPI.getStatus(userId)
            .then(data => {
                dispatch(setStatus(data));
            });
    }
}

export const updateStatus = (status) =>
    async (dispatch) => {
        try {
            const response = await profileAPI.updateStatus(status);
            if (response.resultCode === 0) {
                dispatch(setStatus(status));
            }
        } catch (error) {
        }
    }

export const savePhoto = (file) =>
    async (dispatch) => {
        const response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
    }

export const saveProfile = (profile) =>
    async (dispatch, getState) => {
        const userId = getState().auth.userId;
        const response = await profileAPI.saveProfile(profile);
        if (response.data.resultCode === 0) {
            dispatch(getUserProfile(userId));
        } else {
            dispatch(stopSubmit("edit-profile", {_error: response.data.messages[0]}));
            return Promise.reject(response.data.messages[0])
        }
    }

export default profileReducer;