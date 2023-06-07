import React, {FC} from "react"
import style from '../Contacts.module.scss'
import {useFormik} from "formik"
import {validationSchema} from "../../Common/utils/validationShema"
import axios from "axios";

type Values = {
    name: string
    email: string
    message: string
}

export const ContactForm: FC = () => {
    const formik = useFormik<Values>({
        initialValues: {
            email: '',
            name: '',
            message: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            axios.post('https://gmail-nodejs-one.vercel.app/sendMessage', {
                name: values.name,
                email: values.email,
                message: values.message
            })
                .then((res)=> alert('Your message has been sent'))
                .catch((err)=> alert('Your message has not been sent'))
        }
    })
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
                <input
                    type="text"
                    name='email'
                    className={style.input}
                    placeholder='E-mail'
                    value={formik.values.email}
                    onChange={formik.handleChange}
                />
                <textarea
                    name='message'
                    className={style.text}
                    placeholder='Tell me more about you needs...'
                    value={formik.values.message}
                    onChange={formik.handleChange}
                />

                <button
                    type="submit"
                    className={style.btn}
                >
                    Send message
                </button>
            </form>
        </>
    )
}
