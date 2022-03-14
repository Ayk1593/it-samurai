import React, {useEffect} from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post'
import cn from "classnames";
import styles from "../../common/FormsControls/FormsControls.module.css";
import {Field, reduxForm} from "redux-form";
import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Textarea, TextareaNew} from "../../common/FormsControls/FormsControls";
import {useForm} from "react-hook-form";


const MyPosts = React.memo(props => {
    let postsElements = props.posts.map(p => <Post message={p.message} key={p.id} likesCount={p.likesCount}/>)

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
               <textarea className={cn({[styles.formControlError]: errors?.newPostText})}
                         placeholder="it-kamasutra.com" {...register("newPostText", {
                   required: "Field is required",
                   maxLength: {
                       value: 10,
                       message: "Max length is 10 symbols"
                   }
               })}/>

                {/*<TextareaNew className={cn({[styles.formControlError]: errors?.newPostText})}*/}
                {/*              name="newPostText" register={register} />*/}

            </div>

                <div className={styles.formControl}>
                    {errors?.newPostText && <div>{errors.newPostText?.message || "Error!"} </div>}
                </div>
                <button type="submit">Add post</button>
        </form>
    )
}

// const maxLength10 = maxLengthCreator(10);
//
// let AddNewPostForm = (props) => {
//     return (
//         <form onSubmit={props.handleSubmit}>
//             <div>
//                 <Field name="newPostText" component={Textarea} placeholder="it-kamasutra.com"
//                        validate={[required, maxLength10]}/>
//             </div>
//             <div>
//                 <button>Add post</button>
//             </div>
//         </form>
//     )
// }
//
// AddNewPostForm = reduxForm({form: "ProfileAddNewPostForm"})(AddNewPostForm)


export default MyPosts;