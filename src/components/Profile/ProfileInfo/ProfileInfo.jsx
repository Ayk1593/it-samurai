import React, {Component} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";



const ProfileINfo = (props) => {
    if (!props.profile && props.auth) {
        return <Preloader />
    }

    return (
        <div className={s.profile}>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} />
                <div>
                    {props.profile.fullName} <br/>
                    {props.profile.contacts.facebook} <br/>
                    {props.profile.contacts.vk}

                </div>
             <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} userId={props.userId} profile={props.profile}/>
            </div>

        </div>)
}

export default ProfileINfo;