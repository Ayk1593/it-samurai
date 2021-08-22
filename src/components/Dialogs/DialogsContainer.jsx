import React, {Component} from 'react';
import {NavLink} from "react-router-dom";
import s from './Dialogs.module.css';
import {sendMessage, updateNewMessageBody} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";



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

const DialogsContainer = connect(mapStateToProps, {
    updateNewMessageBody,
    sendMessage
})(Dialogs);

export default DialogsContainer;