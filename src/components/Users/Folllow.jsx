import React from "react";
import {
    getFollowingInProgress,
} from "../../redux/users-selectors";
import {compose} from "redux";
import {connect} from "react-redux";
import {follow, unfollow} from "../../redux/users-reducer";




let Following = ({user, followingInProgress, follow, unfollow}) => {
    return (
        <div>
            {user.followed
                ? <button disabled={followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                              unfollow(user.id);
                          }}>
                    Unfollow</button>
                : <button disabled=
                              {followingInProgress.some(id => id === user.id)}
                          onClick={() => {
                              follow(user.id);
                          }}>
                    Follow</button>}

        </div>
    )
}

let FollowingContainer = (props) => {
    return (
        <Following followingInProgress={props.followingInProgress}
                   follow={props.follow} unfollow={props.unfollow} user={props.user}/>
    )
}

let mapStateToProps = (state) => {
    return {
        followingInProgress: getFollowingInProgress(state)
    }
}


export default compose(
    connect (mapStateToProps, {
        follow, unfollow})
)
(FollowingContainer)

