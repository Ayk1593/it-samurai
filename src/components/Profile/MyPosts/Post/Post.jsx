import React, {Component} from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (

        <div className={s.item}>
            <img src='https://img1.goodfon.ru/wallpaper/nbig/6/4d/avatar-neytiri-zoe-saldana-7414.jpg'/>

            {props.message}
            <div>
                <span>  like </span> {props.likesCount}
            </div>

        </div>

    )
}

export default Post;