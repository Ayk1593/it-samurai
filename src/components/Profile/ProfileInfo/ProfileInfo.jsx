import React, {useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';
import Preloader from "../../common/Preloader/Preloader";
import userPhoto from "../../../assets/images/user.png";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import ProfileDataForm from "./ProfileDataForm";
import Button from "@mui/material/Button";
import styled from "@mui/material/styles/styled";

// type PropsType = {
//     changeStateEditMode: (toggle: boolean) => void
//     profile: ProfileType
//     auth: boolean
//     savePhoto: (file: any) => void
//     saveProfile: (formData: any) => void
//     isOwner: number
//     status: string
//     updateStatus: (status: string) => void
//     userId: number
// }
const ProfileINfo = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [hoveredAva, setHoveredAva] = useState(false);
    let stateEditMode = (toggle) => {
        props.changeStateEditMode(toggle);
    }

    useEffect(() => {
        stateEditMode(false)
    }, [])

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

    const onSubmit = (formData) => {
        props.saveProfile(formData).then(() => {
            setEditMode(false);
            stateEditMode(false)
        })
    }
    const Input = styled('input')({
        display: 'none',
    });

    return (
        <div className={s.profile}>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large || userPhoto} onMouseOver={hoverAva} />
                <div>
                    {(props.isOwner && hoveredAva) &&
                    // <input type={"file"} onChange={onMainPhotoSelected} onMouseLeave={unHoverAva}
                    //        className={s.addAva}/>}
                    <div className={s.btnFile}>
                        <label htmlFor="contained-button-file">
                            <Input onChange={onMainPhotoSelected}  accept="image/*"
                                   id="contained-button-file" multiple type="file"/>
                            <Button variant="outlined" onMouseLeave={unHoverAva} component="span">Загрузить фото</Button>
                        </label>
                    </div>}
                </div>

                <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus} userId={props.userId}
                                        profile={props.profile}/>

                {editMode
                    ? <ProfileDataForm initialValues={props.profile} profile={props.profile}
                                       onSubmit={onSubmit}/>
                    : <ProfileData profile={props.profile} isOwner={props.isOwner}
                                   goToEditMode={() => {
                                       setEditMode(true);
                                       stateEditMode(true)
                                   }}/>}


            </div>

        </div>)
}


const ProfileData = ({profile, isOwner, goToEditMode}) => {
    return <div>
        {isOwner && <div>
            <Button variant="outlined" onClick={goToEditMode}>Редактировать</Button>
        </div>}
        <div className={s.fullName}>
            <h2><b>  {profile.fullName} </b></h2>
        </div>

        <div className={s.info_box}>

            <div>
                <b> Looking for a job: </b> {profile.lookingForAJob ? "yes" : "no"}
            </div>
            <div>
                <b> My professional skills: </b> {profile.lookingForAJobDescription}
            </div>

            <div>
                <b> About me: </b> {profile.aboutMe}
            </div>

        </div>

        <div>
            <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
            return <Contact key={key} contactTitle={key} contactValue={profile.contacts[key]}/>
        })}
        </div>
    </div>
}


const Contact = ({contactTitle, contactValue}) => {
    return <div className={s.contactProfileInfo}>{contactTitle} : {contactValue}</div>
}
export default ProfileINfo;