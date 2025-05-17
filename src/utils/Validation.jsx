import * as yup from 'yup'

export const userLoginValidation = yup.object().shape({
    email: yup.string().email('Please Enter Valid Email').required('Email Address Required'),
    password: yup.string().required('Please Enter Password'),
})


export const contactFormValidation = yup.object().shape({
    userName: yup.string().required('Full Name Required'),
    email:  yup.string().email('Please Enter Valid Email').required('Email Address Required'),
    mobileNumber: yup.number().required('Please Enter Your Mobile Number').min(10 , "Minimum 10 Digits"),
    subject: yup.string().required('Please Enter Subject'),
    message:  yup.string().notRequired(''),
})