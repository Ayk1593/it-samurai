import React, {forwardRef} from "react";
import styles from "./FormsControls.module.css";
import cn from "classnames";
import {Controller, useForm} from "react-hook-form";
import TextField from "@mui/material/TextField";

// const FormControl = forwardRef((props) => {
//     debugger;
//     // const hasError = props.data.touchedFields && props.meta.errors;
//     return (
//         // <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
//             <div>
//                 {props.children}
//             {/*</div>*/}
//             {/*{ hasError && <span>{props.meta.errors}</span> }*/}
//         </div>
//     )
// })

const FormControl = ({input, meta, ...props}) => {
    const hasError = meta.touched && meta.error;
    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    // const {input, meta, child, ...restProps} = props;{...restProps}   {input, meta, child, ...props}
    return <FormControl {...props}> <textarea {...props.input} {...props}/> </FormControl>
}

export const Input = (props) => {
    // const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}> <input {...props.input} {...props}/> </FormControl>
}

export const InputNew = ({name, register, errors}) => (
    <>
        <input className={cn({[styles.formControlError]: errors?.newMessageBody})}
               {...register(name, {
                   required: "Field is required",
                   maxLength: {
                       value: 10,
                       message: "Max length is 10 symbols"
                   }
               })}/>
        <div className={styles.formControl}>
            {errors?.newMessageBody && <div>{errors.newMessageBody?.message || "Error!"} </div>}
        </div>
    </>
);

export const TextareaNew = ({name, register}) => {
    return (
        <>
        <textarea  {...register(name, {
                      required: "Field is required",
                      maxLength: {
                          value: 10,
                          message: "Max length is 10 symbols"
                      }
                  })}/>

        </>
    )
};




// export const TextareaControl= ({name, label}) => {
//     const {
//         formState: {errors},
//         control
//     } = useForm({mode: "onBlur"});
//     return (
//         <>
//             <Controller
//                 control={control}
//                 name={name}
//                 rules={{
//                     required: "Поле обязательно к заполнению", maxLength: {
//                         value: 100,
//                         message: "Max length is 100 symbols"
//                     }
//                 }}
//                 defaultValue=""
//                 render={({field}) => (
//                     <TextField
//                         {...field}
//                         multiline
//                         rows={3}
//                         label={label}
//                         onChange={(e) => field.onChange(e)}
//                         value={field.value}
//                         error={errors.name?.message}
//                         helperText={errors.name?.message}
//                     />
//                 )}
//             />
//     </>
//     )
// }