import React, {FC, useState} from "react"
import style from '../Contacts.module.scss'
import {useFormik} from "formik"
import {validationSchema} from "../../Common/utils/validationShema"
import axios from "axios"
import {InfoSnackBar} from "../../Common/components/SnackBar/InfoSnackBar"

type Values = {
    name: string
    email: string
    message: string
}

export const ContactForm: FC = () => {
    const [snackbarMessage, setSnackbarMessage] = useState<string>('')
    const [snackbarShow, setSnackbarShow] = useState<boolean>(false)
    const [snackbarType, setSnackbarType] = useState<'success' | 'error'>('success')
    const [onDisabled, setOnDisabled] = useState<boolean>(false)

    const formik = useFormik<Values>({
        initialValues: {
            email: '',
            name: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            setOnDisabled(true)
            axios.post('https://node-api-vercel-contact.vercel.app/sendMessage',{
                email: values.email,
                name: values.name,
                message: values.message,
                }
            )
                .then((res) => {
                    setSnackbarMessage("Your message has been sent successfully")
                    setSnackbarType('success')
                    formik.resetForm()
                })
                .catch((err)=> {
                    setSnackbarMessage("Something went wrong...Your message was not sent")
                    setSnackbarType('error')
                })
                .finally(() => {
                    setSnackbarShow(true)
                    setOnDisabled(false)
                })
        }
    })

    const finalClassNames = onDisabled ? `${style.disable} ${style.btn}` : style.btn
    return (
        <>
            <form className={style.contactsForm} onSubmit={formik.handleSubmit}>
                <input
                    type="text"
                    name='name'
                    className={style.input}
                    value={formik.values.name}
                    placeholder='Name'
                    onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                    <div className={style.error}>
                        {formik.errors.name}
                    </div>
                )}
                <input
                    type="text"
                    name='email'
                    className={style.input}
                    placeholder='Enter your email to contact'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                    <div className={style.error}>
                        {formik.errors.email}
                    </div>
                )}
                <textarea
                    name='message'
                    className={`${style.text} ${style.input}`}
                    placeholder='Tell me more about you needs...'
                    value={formik.values.message}
                    onChange={formik.handleChange}
                />
                {formik.touched.email && formik.errors.email && (
                    <div className={style.error}>
                        {formik.errors.message}
                    </div>
                )}

                <button
                    type="submit"
                    className={finalClassNames}
                    disabled={onDisabled}
                >
                    Send message
                </button>
            </form>

            <InfoSnackBar message={snackbarMessage} type={snackbarType} show={snackbarShow}/>
        </>
    )
}
