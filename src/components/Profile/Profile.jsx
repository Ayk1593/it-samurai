import React, {Component} from 'react';
import ProfileINfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import style from "../Profile/ProfileInfo/ProfileInfo.module.css"


const Profile = (props) => {

    return (
        <div className={style.profilePage}>

            <ProfileINfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
                         userId={props.userId} auth={props.auth} isOwner={props.isOwner}
                         savePhoto={props.savePhoto} saveProfile={props.saveProfile} changeStateEditMode={props.changeStateEditMode}/>
            { !props.stateEditMode && !props.userIdUrl && <MyPostsContainer/> }

        </div>)
}

export default Profile;
