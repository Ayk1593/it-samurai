import styles from "./users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";


let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return <div>
        <div className={styles.pages}>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => {
                    props.onPageChanged(p)
                }}> {p} </span>
            })}
        </div>
        {
            props.users.map(u => <div key={u.id}>
                <div className={styles.all}>
                    <div className={styles.left}>
                        <div>
                            <NavLink to={'/profile/' + u.id}>
                                <img src={u.photos.small != null ? u.photos.small : userPhoto}
                                     className={styles.usersPhoto}/>
                            </NavLink>
                        </div>
                        <div>
                            {u.followed
                                ? <button disabled={props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => { props.unfollow(u.id); }}>
                                    Unfollow</button>
                                : <button disabled=
                                              {props.followingInProgress.some(id => id === u.id)}
                                          onClick={() => { props.follow(u.id); }}>
                                    Follow</button>}

                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.ava}>
                            <div>{u.name}</div>
                            <div>{u.status}</div>
                        </div>
                        <div className={styles.location}>
                            <div>{"u.location.country"}</div>
                            <div>{"u.location.city"}</div>
                        </div>
                    </div>
                </div>

            </div>)
        }
    </div>
}

export default Users;