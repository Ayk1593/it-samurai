import React from "react";
import Paginator from "../common/Paginator/Paginator";
import User from "./User";


let Users = ({currentPage, onPageChanged, totalUsersCount, pageSize, users, ...props}) => {

    return <div>
        <Paginator currentPage={currentPage} onPageChanged={onPageChanged}
                   totalUsersCount={totalUsersCount} pageSize={pageSize}/>

        {
            users.map(u => <User key={u.id}
                                 user={u}
                                 followingInProgress={props.followingInProgress}
                                 follow={props.follow}
                                 unfollow={props.unfollow}
            />)
        }
   </div>
}


export default Users;