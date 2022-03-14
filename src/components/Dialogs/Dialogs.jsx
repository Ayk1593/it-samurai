import React, {Component} from 'react';
import {Redirect} from "react-router-dom";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import { Textarea, TextareaNew} from "../common/FormsControls/FormsControls";
import styles from "../common/FormsControls/FormsControls.module.css";
import {useForm} from "react-hook-form";
import cn from "classnames";


const Dialogs = (props) => {

    let state = props.dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} key={d.id} id={d.id}/>);
    let messageElements = state.messages.map(m => <Message message={m.message} key={m.id}/>);


    let addNewMessage = (values) => {
        props.sendMessage(values.newMessageBody)
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>

            <div className={s.messages}>
                {messageElements}
            </div>
            <div>
                <AddNewPostForm onSubmit={addNewMessage}/>
            </div>
        </div>
    )
}

let AddNewPostForm = (props) => {
    const {
        register,
        formState: {errors, isValid, touchedFields},
        handleSubmit,
        reset
    } = useForm({mode: "onBlur"});

    const onSubmit = (data) => {
        props.onSubmit(data)
        reset();
    }
    return (

<form onSubmit={handleSubmit(onSubmit)}>
    <div>
               <textarea className={cn({[styles.formControlError]: errors?.newMessageBody})}
                         placeholder="it-kamasutra.com" {...register("newMessageBody", {
                   required: "Field is required",
                   maxLength: {
                       value: 10,
                       message: "Max length is 10 symbols"
                   }
               })}/>
    </div>

    <div className={styles.formControl}>
        {errors?.newMessageBody && <div>{errors.newMessageBody?.message || "Error!"} </div>}
    </div>
        <button type="submit">Add message</button>

</form> ) }

// const maxLength50 = maxLengthCreator(50);
//
// const AddMessageForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field component={Textarea} name="newMessageBody" placeholder="Enter your message"
//                        validate={[required, maxLength50]}/>
//             </div>
//             <div>
//                 <button>Add message</button>
//             </div>
//         </form>
//     )
// }
//
// const AddMessageFormRedux = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm)


export default Dialogs;