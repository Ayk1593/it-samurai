import React, {Component} from 'react';
import s from './Profile.module.css';
import ProfileINfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";



const Profile = (props) => {

    return (
        <div>

            <ProfileINfo profile={props.profile}/>
            <MyPostsContainer />

        </div>)
}

export default Profile;
