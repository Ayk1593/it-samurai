import React, {Component} from 'react';
import {NavLink, Redirect} from "react-router-dom";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messageElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);


    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    if (!props.isAuth) return <Redirect to={"/login"} />

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messageElements}
                <div>

                    <textarea onChange={onNewMessageChange} value={state.newMessageBody}
                              placeholder={'Enter your message'} />
                </div>
                <div>
                    <button onClick={onSendMessageClick}>Add message</button>
                </div>
            </div>
        </div>
    )
}

export default Dialogs;