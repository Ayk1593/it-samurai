import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css';
import React from "react";
import profileImg from '../../../assets/images/profile.png';


const DialogItem = (props) => {
    return (
        <div className={s.dialog + '' + s.active}>
           <div className={s.ava} >
               <img src={profileImg}/>

            <NavLink to={'/dialogs/' + props.id}>   {props.name}  </NavLink>

        </div>
        </div>
    )
}


export default DialogItem;