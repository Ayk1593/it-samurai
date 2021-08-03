import React, {Component} from 'react';
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";
import ProfileINfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {



    return (
        <div>

            <ProfileINfo />
            <MyPostsContainer store={props.store}/>

        </div>)
}

export default Profile;
