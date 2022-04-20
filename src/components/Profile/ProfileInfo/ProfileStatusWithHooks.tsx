import React, {ChangeEvent, Component, useEffect, useState} from 'react';
import s from './ProfileInfo.module.css';
import {ProfileType} from "../../../types/types";

type PropsType = {
    status: string
    profile: ProfileType
    userId: number
    updateStatus: (status: string) => void

}

const ProfileStatusWithHooks: React.FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
            setStatus(props.status);
        }, [props.status]
    )

    const activateEditMode = () => {
        debugger
        if (props.profile.userId === props.userId) {
            setEditMode(true);
        }
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e: ChangeEvent<HTMLInputElement>) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <div className={s.status}>
            {!editMode &&
            <div className={s.profile_status}>
                <b> Статус: </b> <span onDoubleClick={activateEditMode}> {props.status || "-----"} </span>
            </div>}
            {editMode &&
            <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                       value={status}/>
            </div>}
        </div>
    )
}

export default ProfileStatusWithHooks;