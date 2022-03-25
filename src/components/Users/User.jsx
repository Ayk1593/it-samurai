import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";
import FollowingContainer from "./Folllow";


let User = ({user, followingInProgress, follow, unfollow, ...props }) => {

    return (
           <div>
                <div className={styles.all}>
                    <div className={styles.left}>
                        <div>
                            <NavLink to={'/profile/' + user.id}>
                                <img src={user.photos.small != null ? user.photos.small : userPhoto}
                                     className={styles.usersPhoto}/>
                            </NavLink>
                        </div>

                        <div>
                            {user.followed
                                ? <button disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => { unfollow(user.id); }}>
                                    Unfollow</button>
                                : <button disabled=
                                              {followingInProgress.some(id => id === user.id)}
                                          onClick={() => { follow(user.id); }}>
                                    Follow</button>}

                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.ava}>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                        <div className={styles.location}>
                            <div>{"user.location.country"}</div>
                            <div>{"user.location.city"}</div>
                        </div>
                    </div>
                </div>

            </div>)
        }

export default User;