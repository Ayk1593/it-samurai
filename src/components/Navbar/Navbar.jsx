import React, {Component} from 'react';
import s from './Navbar.module.css';
import {NavLink, Route} from "react-router-dom";
import FriendsContainer from "./Sidebar/SidebarContainer";
import Login from "../Login/Login";


const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to='/profile' activeClassName={s.active}>Profile</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/dialogs' activeClassName={s.active}>Messages</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/News' activeClassName={s.active}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to='/Music' activeClassName={s.active}>Music</NavLink>
            </div>
            <div  className={s.users}>
            <div className={s.item}>
                <NavLink to='/Users' activeClassName={s.active}>Find users</NavLink>
            </div>
            </div>
            <div className={s.item}>
                <NavLink to='/Settings' activeClassName={s.active}>Settings</NavLink>
            </div>

            <Route exact path='/profile' render={() => <FriendsContainer/>}/>


        </nav>


    )
}


export default Navbar;


