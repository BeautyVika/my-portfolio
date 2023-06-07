import * as yup from "yup"

const MIN_MESSAGE_LENGTH = 12

export const validationSchema = yup.object({
    name: yup
        .string()
        .required('Name is required'),
    email: yup
        .string()
        .email('Enter a valid email')
        .required('Email is required'),
    message: yup
        .string()
        .min(MIN_MESSAGE_LENGTH, `Message should be of minimum ${MIN_MESSAGE_LENGTH} characters length`)
        .required('Message is required'),
});