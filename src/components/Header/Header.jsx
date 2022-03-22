import React, {Component} from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";

const Header = (props) => {


    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
                {props.isAuth ? <div> {props.login}
                        <div className={s.logout}>
                            <Button size="small" variant="contained" onClick={props.logout}>Log out</Button>
                        </div>
                    </div>
                    :
                    <NavLink to={'/login'}>Login</NavLink>}

            </div>
        </header>
    )
}

export default Header;