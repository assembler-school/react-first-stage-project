import React from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";

export default function LogIn() {
  return (
    <Formik
      initialValues={{ username: "", password: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.username) {
          errors.username = "Required";
        } else if (values.username.length < 6) {
          errors.username = "Your username must have at least 6 characters";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field type="username" name="username" placeholder="username" />
          <ErrorMessage name="username" component="div" />
          <Field type="password" name="password" placeholder="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}
