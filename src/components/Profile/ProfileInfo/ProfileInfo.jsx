import React, {Component, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";


const ProfileINfo = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [hoveredAva, setHoveredAva] = useState(false);

    let hoverAva = () => {
        setHoveredAva(true);
    }

    let unHoverAva = () => {
        setHoveredAva(false);
    }

    if (!props.profile && props.auth) {
        return <Preloader/>
    }

    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }

    return (
        <div className={s.profile}>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} onMouseOver={hoverAva}/>
                <div>
                    {(props.isOwner && hoveredAva) &&
                    <input type={"file"} onChange={onMainPhotoSelected} onMouseLeave={unHoverAva}
                           className={s.addAva}/>}
                </div>

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} userId={props.userId}
                                        profile={props.profile}/>

                {editMode
                    ? <ProfileDataForm profile={props.profile}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner} goToEditMode={() => setEditMode(true)}/>}


            </div>

        </div>)
}

const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <button onClick={goToEditMode}>Edit</button>
        </div>}
        <div>
            {profile.fullName}
        </div>

        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}




const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contact}><b>{contactTitle}</b>: {contactValue}</div>
}
export default ProfileINfo;