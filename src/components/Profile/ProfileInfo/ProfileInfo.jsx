import React, {Component} from 'react';
import s from './ProfileInfo.module.css';



const ProfileINfo = () => {
    return (
        <div className={s.profile}>
            <div>
                <img src="https://pbs.twimg.com/profile_banners/902298444/1463169356/1500x500"/>
            </div>
            <div className={s.descriptionBlock}>
                ava + description
            </div>

        </div>)
}

export default ProfileINfo;