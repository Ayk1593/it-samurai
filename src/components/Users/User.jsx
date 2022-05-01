import styles from "./Users.module.css";
import userPhoto from "../../assets/images/user.png";
import React from "react";
import {NavLink} from "react-router-dom";
import Button from "@mui/material/Button";


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
                                ? <Button  variant="outlined" disabled={followingInProgress.some(id => id === user.id)}
                                          onClick={() => { unfollow(user.id); }}>
                                    Unfollow</Button>
                                : <Button  variant="outlined" disabled=
                                              {followingInProgress.some(id => id === user.id)}
                                          onClick={() => { follow(user.id); }}>
                                    Follow</Button>}

                        </div>
                    </div>
                    <div className={styles.box}>
                        <div className={styles.ava}>
                            <div>{user.name}</div>
                            <div>{user.status}</div>
                        </div>
                    </div>
                </div>

            </div>)
        }

export default User;