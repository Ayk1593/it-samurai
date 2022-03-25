import React, {Component, useEffect} from 'react';
import {Redirect} from "react-router-dom";
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../utils/validators/validators";
import { Textarea, TextareaNew} from "../common/FormsControls/FormsControls";
import styles from "../common/FormsControls/FormsControls.module.css";
import {Controller, useForm} from "react-hook-form";
import cn from "classnames";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import style from "../common/FormsControls/FormsControls.module.css";


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
        formState: {errors, isValid, touchedFields},
        handleSubmit,
        reset,
        control,
        formState
    } = useForm();

    const onSubmit = (data) => {
        props.onSubmit(data)
    }

    useEffect(() => {
        if (formState.isSubmitSuccessful) {
            reset({newMessageBody: ''});
        }
    }, [formState, reset]);

    return (

<form onSubmit={handleSubmit(onSubmit)}>
    <div className={style.textArea}>
        <Controller
            control={control}
            name="newMessageBody"
            rules={{required: "Поле обязательно к заполнению", maxLength: {
                    value: 100,
                    message: "Max length is 100 symbols"
                }}}
            render={({field}) => (
                <TextField
                    label="Введите текст сообщения"
                    multiline
                    rows={3}
                    onChange={(e) => field.onChange(e)}
                    value={field.value}
                    error={errors.newMessageBody?.message}
                    helperText={errors.newMessageBody?.message}
                />
            )}
        />
    </div>
        <Button variant="outlined" type="submit">Add message</Button>

</form> ) }



export default Dialogs;