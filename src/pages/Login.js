import React from 'react'
import { Formik, Form, Field } from 'formik';
import { v4 as uuid } from 'uuid';
import ValidationSchema from '../components/ValidationSchema';

export default function NewGame() {
  return (
    <>
      <Formik
        initialValues={{
          id: uuid(),
          username: "",
          password: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          errors,
          values,
          touched,
          isValidating,
          isValid,
          isSubmitting,
        }) => (
          <Form>
            <label htmlFor="username">Username</label>
            <Field
              type="text"
              label="Username"
              id="username"
              value={values.username}
              placeholder="Game username"
            />
            {errors.username && touched.username ? (
            <div>{errors.username}</div>) : null}

            <label htmlFor="password">Password</label>
            <Field
              type="password"
              label="Password"
              id="password"
              value={values.password}
              placeholder="Game password"
            />
            {errors.password && touched.password ? (
            <div>{errors.password}</div>) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
