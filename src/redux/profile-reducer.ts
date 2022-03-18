import {profileAPI} from "../api/api";
import React from "react";
import {stopSubmit} from "redux-form";
import {PhotosType, PostType, ProfileType} from "../types/types";

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
    ] as Array<PostType>,
    profile: null as ProfileType | null,
    status: "",
    stateEditMode: false
}

export type InitialStateType = typeof initialState

const profileReducer = (state = initialState, action: any): InitialStateType => {
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
                profile: {...state.profile, photos: action.photos} as ProfileType
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

type AddPostActionType = {
    type: typeof ADD_POST
    newPostText: string
}
export const addPost = (newPostText: string): AddPostActionType => ({type: ADD_POST, newPostText});
type SetUserProfileActionType = {
    type: typeof SET_USER_PROFILE
    profile: ProfileType
}
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({type: SET_USER_PROFILE, profile});
type SetStatusActionType = {
    type: typeof SET_STATUS
    status: string
}
export const setStatus = (status: string): SetStatusActionType => ({type: SET_STATUS, status});
type DeletePostActionType = {
    type: typeof DELETE_POST
    postId: number
}
export const deletePost = (postId: number): DeletePostActionType => ({type: DELETE_POST, postId});
type SavePhotoSuccessActionType = {
    type: typeof SAVE_PHOTO_SUCCESS
    photos: PhotosType
}
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({type: SAVE_PHOTO_SUCCESS, photos});
type ChangeStateEditModeActionType = {
    type: typeof STATE_EDIT_MODE
    stateEditMode: boolean
}
export const changeStateEditMode = (stateEditMode: boolean): ChangeStateEditModeActionType => ({type: STATE_EDIT_MODE, stateEditMode});


export const getUserProfile = (userId: number) => async (dispatch: any) => {
        const response = await profileAPI.getProfile(userId)
        dispatch(setUserProfile(response.data));
    }


export const getStatus = (userId: number) => async (dispatch: any) => {
        const response = await profileAPI.getStatus(userId)
        dispatch(setStatus(response.data));
    }

export const updateStatus = (status: string) =>
    async (dispatch: any) => {
        try {
            const response = await profileAPI.updateStatus(status);
            if (response.resultCode === 0) {
                dispatch(setStatus(status));
            }
        } catch (error) {
        }
    }

export const savePhoto = (file: any) =>
    async (dispatch: any) => {
        const response = await profileAPI.savePhoto(file);
        if (response.data.resultCode === 0) {
            dispatch(savePhotoSuccess(response.data.data.photos));
        }
    }

export const saveProfile = (profile: ProfileType) =>
    async (dispatch: any, getState: any) => {
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