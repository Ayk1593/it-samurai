import {NavLink} from "react-router-dom";
import s from './../Dialogs.module.css';
import React from "react";


const DialogItem = (props) => {
    return (
        <div className={s.dialog + '' + s.active}>
           <div className={s.ava} >
               <img src='https://img1.goodfon.ru/wallpaper/nbig/6/4d/avatar-neytiri-zoe-saldana-7414.jpg'/>

            <NavLink to={'/dialogs/' + props.id}>   {props.name}  </NavLink>

        </div>
        </div>
    )
}


export default DialogItem;