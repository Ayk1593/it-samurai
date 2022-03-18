import React, {Component} from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";

const Header = (props) => {


    return (
        <header className={s.header}>
            <img className={s.logo}
                 src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/18788287/original/ad12114381428de7994df32d623401beb1a3c237/design-great-and-best-company-logo-within-24-hours.png"/>
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