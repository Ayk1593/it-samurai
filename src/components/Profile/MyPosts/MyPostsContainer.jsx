import React, {Component} from 'react';
import {addPost} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText,
        profile: state.profilePage.profile,
        auth: state.auth.isAuth
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewPostText: (text) => {
//             dispatch(updateNewPostTextCreator(text));
//         },
//         addPost: () => {
//             dispatch(addPostCreator());
//         }
//     }
// }

export default compose(
    connect(mapStateToProps, {addPost})
)(MyPosts)


// const MyPostsContainer = connect(mapStateToProps, {
//     addPost
// })(MyPosts);

// export default MyPostsContainer;