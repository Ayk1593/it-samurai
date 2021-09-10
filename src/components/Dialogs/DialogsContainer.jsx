import React, {Component} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import s from './Dialogs.module.css';
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";



let mapStateToProps = (state) => {
    return {
        dialogsPage: state.dialogsPage
    }
}

// let mapDispatchToProps = (dispatch) => {
//     return {
//         updateNewMessageBody: (body) => {
//             dispatch(updateNewMessageBodyCreator(body));
//         },
//         sendMessage: () => {
//             dispatch(sendMessageCreator());
//         }
//     }
// }

export default  compose(
    connect(mapStateToProps, {
        updateNewMessageBody,
        sendMessage
    }),
    withAuthRedirect
)
(Dialogs)

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
//
// const DialogsContainer = connect(mapStateToProps, {
//     updateNewMessageBody,
//     sendMessage
// })(AuthRedirectComponent);

