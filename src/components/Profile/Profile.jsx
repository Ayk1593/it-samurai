import React, {Component} from 'react';
import ProfileINfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import {changeStateEditMode} from "../../redux/profile-reducer";


const Profile = (props) => {

    return (
        <div>

            <ProfileINfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
                         userId={props.userId} auth={props.auth} isOwner={props.isOwner}
                         savePhoto={props.savePhoto} saveProfile={props.saveProfile} changeStateEditMode={props.changeStateEditMode}/>
            { !props.stateEditMode && <MyPostsContainer/> }

        </div>)
}

export default Profile;
