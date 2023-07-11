import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'

const Register = () => {
  return (
    <Formik 
        initialValues={{firstname:'',lastname:'',email:'',password:'',cpassword:''}}
        validationSchema={Yup.object({
            firstname:Yup.string()
            .required('first name is mandatory')
            .max(20,'20 character or less'),
            lastname:Yup.string()
            .required('last name is mandatory')
            .max(20,'20 character or less'),
            email:Yup.string()
            .required('email is mandatory')
            .email('Invalid email format'),
            password:Yup.string()
            .required('password is mandatory')
            .matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@#$!_?])[A-Za-z\d@#$!_?]{8,50}$/,'must contain one uppercase,one lowercase,one digits and one special character and must be minimum of 8 characters'),
            cpassword:Yup.string()
            .required('confirm password is mandatory')
            .oneOf([Yup.ref('password'),null],'password and confirm password doesnot match')
           
        })}
    >
      <div className='container my-5'>
        <div className='row d-flex justify-content-center'>
            <div className='col-md-5 shadow p-3'>
               <Form>
                <div className="mb-2">
                    <label htmlFor="firstname">FirstName</label>
                    <Field type='text' name='firstname' id='firstname' className='form-control'/>
                    <ErrorMessage name='firstname'>
                        {msg => <div style={{color:'red'}}>{msg}</div>}
                    </ErrorMessage>
                </div>
                <div className="mb-2">
                    <label htmlFor="lastname">LastName</label>
                    <Field type='text' name='lastname' id='lastname' className='form-control'/>
                    <ErrorMessage name='lastname'>
                        {msg => <div style={{color:'red'}}>{msg}</div>}
                    </ErrorMessage>
                </div>
                <div className="mb-2">
                    <label htmlFor="email">Email</label>
                    <Field type='email' name='email' id='email' className='form-control'/>
                    <ErrorMessage name='email'>
                        {msg => <div style={{color:'red'}}>{msg}</div>}
                    </ErrorMessage>
                </div>
                <div className="mb-2">
                    <label htmlFor="password">Password</label>
                    <Field type='password' name='password' id='password' className='form-control'/>
                    <ErrorMessage name='password'>
                        {msg => <div style={{color:'red'}}>{msg}</div>}
                    </ErrorMessage>
                </div>
                <div className="mb-2">
                    <label htmlFor="cpassword">Confirm Password</label>
                    <Field type='password' name='cpassword' id='cpassword' className='form-control'/>
                    <ErrorMessage name='cpassword'>
                        {msg => <div style={{color:'red'}}>{msg}</div>}
                    </ErrorMessage>
                </div>
                <div className="mb-2">
                    <button className='btn btn-primary'>Register</button>
                </div>

               </Form>

                </div>
                </div>
            </div>
    </Formik>
  )
}

export default Register