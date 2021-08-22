import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import s from './../Navbar.module.css';
import profileImg from '../../../assets/images/profile.png';


const SidebarItems = (props) => {
    return (
        <div className={s.friends}>
            <img src={profileImg}/>
            <NavLink to={'/friends/' + props.id}>   {props.name}  </NavLink>
        </div>


    )
}

const Friends = (props) => {
    let friendsElements = props.friends.map(f => <SidebarItems name={f.name} key={f.id} id={f.id}/>);
    return (
        <div className={s.sidebar}>
            <div>
                <h1>Friends</h1>
            </div>

                <div className={s.friendsElem}>
                    {friendsElements}
                </div>
            </div>

    )
}

export default Friends;


