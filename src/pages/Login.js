import React, { useContext, useEffect } from 'react'
import { Formik, Form, Field } from 'formik';
import { v4 as uuid } from 'uuid';
import ValidationSchema from '../components/ValidationSchema';
import { AuthContext } from '../context/AuthContext';
import { Redirect } from 'react-router';
import Footer from '../components/Footer';

export default function Login() {
  const { users, isLogged, login, addUser} = useContext(AuthContext);
  console.log(users);
  console.log(isLogged);
  console.log(login);
  console.log(addUser);
  useEffect(() => {
    addUser(JSON.parse(localStorage.getItem("users")))
  }, []);
  useEffect(() => {
      localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  return (
    <>
    {isLogged && <Redirect to="/home" />}
      <Formik
        initialValues={{
          id:"",
          username: "",
          password: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          console.log(values);
          users.map((user) => {
            if(values.username === user.username && values.password === user.password){
              login()
            }
            return user
          });

        }}
      >
        {({
          errors,
          values,
          touched,
        }) => (
          <Form>
            <h1>Log In</h1>
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
            <button type="submit">Log In</button>
          </Form>
        )}
      </Formik>

      <Formik
        initialValues={{
          id:"",
          username: "",
          password: "",
        }}
        validationSchema={ValidationSchema}
        onSubmit={(values) => {
          values.id = uuid();
          console.log(values);
          addUser([...users, values]);
        }}
      >
        {({
          errors,
          values,
          touched,
        }) => (
          <Form>
            <h1>Register</h1>
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
            <button type="submit">Register</button>
          </Form>
        )}
      </Formik>
      <Footer />
    </>
  );
}