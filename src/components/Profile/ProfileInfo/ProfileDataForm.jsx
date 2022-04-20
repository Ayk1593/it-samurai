import React from "react";
import s from "./ProfileInfo.module.css";
import style from "../../common/FormsControls/FormsControls.module.css";
import {Controller, useForm} from "react-hook-form";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";

const ProfileDataForm = ({profile, error, stateEditMode, ...props}) => {
    const {
        control,
        formState: {errors},
        handleSubmit
    } = useForm({mode: "onBlur"});

    const onSubmit = (data) => {
        props.onSubmit(data)
    }
    return <form onSubmit={handleSubmit(onSubmit)}>

        <div className={s.editProfile}>
            <div>
                <Button variant="outlined" type="submit">Сохранить</Button>
            </div>

            {error && <div className={style.formSummaryError}>
                {error}
            </div>}

            <div className={s.wrapper1}>
                <div className={s.editProfileElement}>
                    <h3><b> Full name: </b></h3>
                    <Controller
                        control={control}
                        name="fullName"
                        defaultValue={profile.fullName}
                        rules={{
                            required: "Поле обязательно к заполнению", maxLength: {
                                value: 20,
                                message: "Max length is 20 symbols"
                            }
                        }}
                        render={({field}) => (
                            <TextField
                                variant="filled"
                                size="small"
                                {...field}
                                label="Введите ваше имя"
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                                error={errors.fullName?.message}
                                helperText={errors.fullName?.message}
                            />
                        )}
                    />
                </div>

                <div className={s.editProfileElement}>
                    <b> Looking for a job: </b>
                    <Controller
                        control={control}
                        name="lookingForAJob"
                        defaultValue={profile.lookingForAJob}
                        render={({field: {onChange, value}}) => (
                            <Checkbox
                                checked={value}
                                onChange={onChange}
                                label=""/>

                        )}
                    />
                </div>
            </div>

            <div className={s.wrapper2}>

                <div className={s.editProfileElement}>
                    <b>My professional skills: </b>
                    <Controller
                        control={control}
                        name="lookingForAJobDescription"
                        defaultValue={profile.lookingForAJobDescription}
                        rules={{ maxLength: {
                                value: 100,
                                message: "Max length is 100 symbols"
                            }
                        }}
                        render={({field}) => (
                            <TextField
                                variant="filled"
                                multiline
                                rows={3}
                                {...field}
                                label="My professional skills"
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                                error={errors.lookingForAJobDescription?.message}
                                helperText={errors.lookingForAJobDescription?.message}
                            />
                        )}
                    />
                </div>

                <div className={s.editProfileElement}>
                    <b> About me: </b>
                    <Controller
                        control={control}
                        name="aboutMe"
                        defaultValue={profile.aboutMe}
                        rules={{ maxLength: {
                                value: 100,
                                message: "Max length is 100 symbols"
                            }
                        }}
                        render={({field}) => (
                            <TextField
                                variant="filled"
                                multiline
                                rows={3}
                                {...field}
                                label="About me"
                                onChange={(e) => field.onChange(e)}
                                value={field.value}
                                error={errors.aboutMe?.message}
                                helperText={errors.aboutMe?.message}
                            />
                        )}
                    />
                </div>
            </div>

            <div>
                <b>Contacts:</b>
                <div className={s.contacts}>{Object.keys(profile.contacts).map(key => {
                    // let name="contacts." + key
                    let defVal = profile.contacts.key

                    return <div key={key} className={s.contact}>
                        <b> {key}: </b>
                        <div>
                            <Controller
                                control={control}
                                name={"contacts." + key}
                                defaultValue={defVal}
                                rules={{
                                    maxLength: {
                                        value: 5,
                                        message: "Max length is 100 symbols"
                                    }
                                }}
                                render={({field}) => (
                                    <TextField
                                        variant="filled"
                                        size="small"
                                        {...field}
                                        label={key}
                                        onChange={(e) => field.onChange(e)}
                                        value={field.value}
                                        error={errors.contacts?.message}
                                        helperText={errors.contacts?.message}
                                    />
                                )}
                            />
                            {/* <input {...register ("name", {*/}
                            {/*})}placeholder={key} name={"contacts." + key} /> */}

                        </div>
                    </div>
                })}
                </div>
            </div>
        </div>
    </form>


    //         <div>
    //             <b>Contacts:</b> {Object.keys(profile.contacts).map(key => {
    //             return <div key={key} className={s.contact}>
    //                 <b> {key}: <Field placeholder={key} name={"contacts." + key} component={Input}/></b>
    //             </div>
    //         })}
    //         </div>
    //     </div>

}


export default ProfileDataForm;

