import React from 'react'
import contactImage from "../../assets/contact-image/1.jpg"
import { InputComponent, ButtonComponent } from "../Common"
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ContactComponent = () => {
    const defaultValues = {
        name: "",
        email: "",
        phone: "",
        message: "",
    }

    const onSubmit = async(values) => {
        try {
            console.log(values)
            // const response = await axios.post('apicall')
            // if(response && response.data){
            //   console.log(response.data)
              toast.success('messages has been successfully submitted')
            // }
            
            
        } catch (error) {
            console.log(error)
        }
        
    }

    const validate = Yup.object({
        name: Yup.string().required().min(3).max(30),
        email: Yup.string().email().required(),
        phone: Yup.string().required(),
        message: Yup.string().required().min(10).max(200)
    })
    const formik = useFormik({
        initialValues: defaultValues,
        validationSchema: validate,
        onSubmit,
    })

    return (
        <>
            <ToastContainer position='top-center' theme='colored' />
            <div className='w-full bg-black'>
                <div className='max-w-[1320px] mx-auto px-4 grid md:grid-cols-2 '>
                    <div>
                        <img src={contactImage} alt="" className='w-[90%] h-[80%] object-contain mt-7' />
                    </div>
                    <div>
                        <form onSubmit={formik.handleSubmit}>

                            <div className='sm:pl-10 py-20'>
                                <h1 className=' text-yellow text-2xl font-navtitle'>Lets Talk</h1>

                                <h3 className='text-4xl text-white font-poppins py-5'>
                                    Get In Touch
                                </h3>
                                <p className='font-poppins text-white my-3'>
                                    Let's have a opportunity to serve in a better way.
                                </p>
                                <div className='flex flex-wrap gap-3'>
                                    <InputComponent type={'text'} name={'name'} id={'name'} placeholder={'Your Name'}
                                        onChange={formik.handleChange}
                                    />
                                    <span className='text-red font-poppins'>
                                        {formik.errors?.name}
                                    </span>
                                    <InputComponent type={'tel'} name={'phone'} id={'phone'} placeholder={'Your Phone'}
                                        onChange={formik.handleChange}
                                    />
                                    <span className='text-red font-poppins'>
                                        {formik.errors?.phone}
                                    </span>
                                </div>
                                <div className='mt-3'>
                                    <InputComponent type={'email'} name={'email'} id={'email'} placeholder={'Email'}
                                        onChange={formik.handleChange}
                                    />
                                    <span className='text-red font-poppins'>
                                        {formik.errors?.email}
                                    </span>
                                </div>
                                <div className='mt-3'>
                                    <textarea name="message" id="message" cols="30" rows="5" placeholder='Messages' className='w-full bg-black text-white font-poppins focus:outline-none border focus:border-gray-200 rounded focus:ring-yellow'
                                      onChange={formik.handleChange}
                                    ></textarea>
                                </div>
                                <span className='text-red font-poppins'>
                                    {formik.errors?.message}
                                </span>
                                <div className='mt-3'>
                                    <ButtonComponent tittle={'CONTACT US'} backgroundColor={'bg-gray-400'} textColor={'text-white'} type={'submit'} />
                                </div>
                            </div>
                        </form>
                    </div>

                </div>
            </div>

        </>
    )
}

export default ContactComponent