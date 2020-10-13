import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';

import Error from './Error';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2,"Must have at least two characters")
    .max(255, "Must be shorter than 255")
    .required(),
  email: Yup.string()
  .email("Must be a valid e-mail")
  .required("Must enter an e-mail")
})

export default function Form() {
  return (
    <Formik 
      initialValues={{ name: "", email: "" }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
       setTimeout(() => {
         alert(JSON.stringify(values, null, 2));
         resetForm();
         setSubmitting(false);
       }, 500);
      }}  
    > 
      {({ 
        values, 
        handleChange, 
        handleBlur, 
        errors, 
        touched,
        handleSubmit,
        isSubmitting
      }) => ( 
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name</label>
            <input 
              type="text" 
              name="name" 
              id="name" 
              placeholder="Enter your name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              />
            <Error touched={touched.name} message={errors.name}/>
          </div>
          <div>
            <label htmlFor="email">E-mail</label>
            <input 
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            <Error touched={touched.email} message={errors.email}/>
          </div>
          <div>
            <button type="submit" disabled={isSubmitting}>Submit</button>
          </div>
        </form>
      )}
    </Formik>
  )
}
