import React, {Component} from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";
import styled from 'styled-components';

const HeaderStyle = styled.header`
    grid-area: h;
    background-color: #466cf269;
    margin: 5px 10px 5px 10px;
    border-radius: 10px;
    height: auto;
    display: flex;
    justify-content: flex-end;
`


const Header = (props) => {
    return (
        <HeaderStyle>
            <div className={s.loginBlock}>
                {props.isAuth ? <div> <div>{props.login}</div>
                        <div className={s.logout}>
                            <Button size="small" variant="contained" onClick={props.logout}>Выйти</Button>
                        </div>
                    </div>
                    :
                    <NavLink to={'/login'}>Войти</NavLink>}

            </div>
        </HeaderStyle>
    )
}

export default Header;