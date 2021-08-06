import React, {Component} from 'react';
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../../redux/dialogs-reducer";
import {connect} from "react-redux";
import Dialogs from "../../Dialogs/Dialogs";


let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextCreator(text));
        },
        addPost: () => {
            dispatch(addPostCreator());
        }
    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;