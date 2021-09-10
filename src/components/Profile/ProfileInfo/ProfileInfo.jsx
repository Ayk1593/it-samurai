import React, {Component} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import styles from "../../Users/users.module.css";
import {Redirect} from "react-router-dom";



const ProfileINfo = (props) => {
    if (!props.profile) {
        return <Preloader />
    }

    return (
        <div className={s.profile}>
            <div>
                <img src="https://pbs.twimg.com/profile_banners/902298444/1463169356/1500x500"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large != null ? props.profile.photos.large : userPhoto} />
                <div>
                    {props.profile.fullName} <br/>
                    {props.profile.contacts.facebook} <br/>
                    {props.profile.contacts.vk}

                </div>

               <div>
                   ava + description
                   </div>
            </div>

        </div>)
}

export default ProfileINfo;