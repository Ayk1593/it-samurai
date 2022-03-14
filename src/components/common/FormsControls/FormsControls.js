import React, {forwardRef} from "react";
import styles from "./FormsControls.module.css";
import cn from "classnames";

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
    debugger;
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