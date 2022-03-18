import React from "react";
import s from "./ProfileInfo.module.css";
import {Input, Textarea} from "../../common/FormsControls/FormsControls";
import {required} from "../../../utils/validators/validators";
import {Field, reduxForm} from "redux-form";
import style from "../../common/FormsControls/FormsControls.module.css";
import {useForm} from "react-hook-form";
import Button from "@mui/material/Button";

const ProfileDataForm = ({profile,  error, stateEditMode, ...props}) => {
    const {
        register,
        formState: {errors},
        handleSubmit
    } = useForm({defaultValues: {}});

    const onSubmit = (data) => {
        props.onSubmit(data)
    }
    return <form onSubmit={handleSubmit(onSubmit)}>

        <div className={s.editProfile}>
            <div>
                <Button variant="contained" type="submit">Save</Button>
            </div>

            { error && <div className={style.formSummaryError}>
                {error}
            </div> }

            <div className={s.wrapper1}>
                <div className={s.editProfileElement}>
                    <h3><b> Full name: </b></h3>
                    <input {...register ("fullName", {
                        required: "Field is required"})} name={"fullName"} placeholder={"Full name"}  />
                </div>

                <div className={s.editProfileElement}>
                    <b> Looking for a job: </b>
                    <input {...register ("lookingForAJob", {
                       })} type={"checkbox"}/>
                </div>
            </div>

            <div className={s.wrapper2}>

                <div className={s.editProfileElement}>
                    <b>My professional skills: </b>
                    <textarea {...register ("lookingForAJobDescription", {
                        required: "Field is required"})}placeholder={"My professional skills"}
                           />
                </div>

                <div className={s.editProfileElement}>
                    <b> About me: </b>
                    <textarea {...register ("aboutMe", {
                        required: "Field is required"})}placeholder={"About me"}/>
                </div>
            </div>

            <div>
                <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
                // let name="contacts." + key
                return <div key={key} className={s.contact}>
                    <b> {key}: <div> <input {...register ("name", {
                       })}placeholder={key} name={"contacts." + key} /> </div> </b>
                </div>
            })}
            </div>
        </div>
    </form>

    // <form onSubmit={handleSubmit}>
    //
    //
    //     <div className={s.editProfile}>
    //         <div>
    //             <button onClick={() => stateEditMode(false)}>Save</button>
    //         </div>
    //
    //         { error && <div className={style.formSummaryError}>
    //             {error}
    //         </div> }
    //
    //
    //         <div className={s.wrapper1}>
    //             <div className={s.editProfileElement}>
    //                 <h3><b> Full name: </b></h3>
    //                 <Field placeholder={"Full name"} name={"fullName"} component="input" validate={[required]}/>
    //             </div>
    //
    //             <div className={s.editProfileElement}>
    //                 <b> Looking for a job: </b>
    //                 <Field name={"lookingForAJob"} component={Input} type={"checkbox"}/>
    //             </div>
    //         </div>
    //
    //         <div className={s.wrapper2}>
    //
    //             <div className={s.editProfileElement}>
    //                 <b>My professional skills: </b>
    //                 <Field placeholder={"My professional skills"} name={"lookingForAJobDescription"}
    //                        component={Textarea} validate={[required]}/>
    //             </div>
    //
    //             <div className={s.editProfileElement}>
    //                 <b> About me: </b>
    //                 <Field placeholder={"About me"} name={"aboutMe"} component={Textarea} validate={[required]}/>
    //             </div>
    //         </div>
    //
    //         <div>
    //             <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
    //             return <div key={key} className={s.contact}>
    //                 <b> {key}: <Field placeholder={key} name={"contacts." + key} component={Input}/></b>
    //             </div>
    //         })}
    //         </div>
    //     </div>
    // </form>
}

// const ProfileDataFormWithReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataForm;

