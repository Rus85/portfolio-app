import React, { useRef } from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik'
import * as Yup from 'yup'
import emailjs, { init } from '@emailjs/browser'
import './SendForm.css'
import Swal from "sweetalert2";


export default function SendForm({ show }) {

    init('xEF13rkUyldogr9FoIiI2')

    const form = useRef()
    const phoneRegex = RegExp(
        /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{10,12}$/
    )

    const showAlert = () => {
        Swal.fire({
            title: "Отлично!",
            text: "Пожалуйста, ожидайте звонка",
            icon: "success",
            confirmButtonText: "OK",
        });
    }

    const handleSubmit = () => {

        emailjs.sendForm('service_idzjd6d', 'template_9on9apa', form.current, 'C-K-Az6DxfpBt5AKr')
            .then((result) => {
                console.log(result.text)
            },
                (error) => {
                    console.log(error.text)
                }
            )
    }

    return (
        <Formik
            initialValues={{
                from_name: '',
                message: '',
            }}

            validationSchema={Yup.object({
                from_name: Yup.string()
                    .min(3, 'Минимум 3 символа')
                    .required('Обязательное поле'),
                message: Yup.string()
                    .matches(phoneRegex, 'Неверный формат')
                    .required('Обязательное поле')
            })}

            onSubmit={(values, { resetForm }) => {
                handleSubmit(values.from_name, values.message)
                resetForm({ values: '' })
            }}
        >

            <div className='form-container'>
                <div className='form-info'>
                    <h2>Хотите задать мне вопрос?</h2>
                    <h3>Заполните форму и я Вам перезвоню</h3>
                </div>
                <div className='box'>
                    <Form ref={form}>
                        <div>
                            <Field
                                id='from_name'
                                name='from_name'
                                type='text'
                                placeholder='Имя'
                            />
                            <ErrorMessage className='error' name='from_name' component='span' />
                        </div>
                        <div>
                            <Field
                                id='message'
                                name='message'
                                type='number'
                                placeholder='Телефон'
                                onWheel={(e) => e.target.blur()}
                            />
                            <ErrorMessage className='error' name='message' component='span' />
                        </div>
                        <div>
                            <button type='submit' onClick={showAlert} className='btn btn-primary'>Отправить</button>
                        </div>
                    </Form>
                </div>
            </div>
        </Formik >
    )
}

