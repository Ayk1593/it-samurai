import React, {useEffect} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import cn from "classnames";
import {Controller, useForm} from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import style from "../../Profile/ProfileInfo/ProfileInfo.module.css"
import styless from "../../common/FormsControls/FormsControls.module.css"
import {TextareaControl} from "../../common/FormsControls/FormsControls";


const MyPosts = React.memo(props => {
    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount} date={p.date} />)

    let onAddPost = (values) => {
        props.addPost(values.newPostText);
    }


    return (
        props.profile ?
            <div className={s.postsBlock}>
                <h3> My posts </h3>
                <AddNewPostForm onSubmit={onAddPost}/>
                <div className={s.posts}>
                    {postsElements}
                </div>
            </div> : null

    )
});


let AddNewPostForm = (props) => {
    const {
        formState: {errors, isSubmitSuccessful},
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
            reset({something: 'newPostText'});
        }
    }, [formState, reset]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styless.textArea}>
                <Controller
                    control={control}
                    name="newPostText"
                    rules={{
                        required: "Поле обязательно к заполнению", maxLength: {
                            value: 100,
                            message: "Max length is 100 symbols"
                        }
                    }}
                    defaultValue=""
                    render={({field}) => (
                        <TextField
                            {...field}
                            multiline
                            rows={3}
                            label="Введите текст поста"
                            onChange={(e) => field.onChange(e)}
                            value={field.value}
                            error={errors.newPostText?.message}
                            helperText={errors.newPostText?.message}
                        />
                    )}
                />
            </div>
            <Button variant="outlined" type="submit">Добавить пост</Button>
        </form>
    )
}

export default MyPosts;