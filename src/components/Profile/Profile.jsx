import React, {Component} from 'react';
import ProfileINfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";


const Profile = (props) => {

    return (
        <div>

            <ProfileINfo profile={props.profile} status={props.status} updateStatus={props.updateStatus}
                         userId={props.userId} auth={props.auth} isOwner={props.isOwner} savePhoto={props.savePhoto}/>
            <MyPostsContainer/>

        </div>)
}

export default Profile;
