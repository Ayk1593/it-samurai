import React, {Component} from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";

const Header = (props) => {


    return (
        <header className={s.header}>
            <div className={s.loginBlock}>
                {props.isAuth ? <div> <div>{props.login}</div>
                        <div className={s.logout}>
                            <Button size="small" variant="contained" onClick={props.logout}>Выйти</Button>
                        </div>
                    </div>
                    :
                    <NavLink to={'/login'}>Войти</NavLink>}

            </div>
        </header>
    )
}

export default Header;