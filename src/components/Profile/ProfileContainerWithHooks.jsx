import React, {Component, useEffect} from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";
import {getStatus, getUserProfile, savePhoto, updateStatus} from "../../redux/profile-reducer";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {withLogout} from "../../hoc/withLogout";


function ProfileContainerWithHooks(props) {
     let refreshProfile = () => {
         let userId = props.match.params.userId || props.userId;
         if (!userId) {
             props.history.push("/login")
         }
         props.getUserProfile(userId);
         props.getStatus(userId);
     }

     useEffect(() => {
         refreshProfile();
     }, [])


    useEffect(() => {
        refreshProfile();
    }, [props.match.params.userId])

        return (
            <Profile {...props} profile={props.profile} status={props.status}
                     updateStatus={props.updateStatus} isOwner={!props.match.params.userId} savePhoto={props.savePhoto}/>
        )
}

// let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        userId: state.auth.userId,
        auth: state.auth.isAuth
    }
}

export default compose(
    connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, savePhoto}),
    withRouter,
    // withLogout,
    withAuthRedirect
)(ProfileContainerWithHooks)

// let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
//
// export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent);
