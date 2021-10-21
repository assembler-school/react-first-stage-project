import React, { useContext, useEffect } from "react";
import { Formik, Form, Field } from "formik";
import { v4 as uuid } from "uuid";
import ValidationSchema from "../components/ValidationSchema";
import { AuthContext } from "../context/AuthContext";
import { Redirect } from "react-router";
import Footer from "../components/Footer";

export default function Login() {
  const { users, isLogged, login, addUser } = useContext(AuthContext);
  console.log(users);
  console.log(isLogged);
  console.log(login);
  console.log(addUser);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("users"))) {
      addUser(JSON.parse(localStorage.getItem("users")));
    }
  }, []);
  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);
  return (
    <div className="container-fluid row m-0 p-5 ">
      {isLogged && <Redirect to="/home" />}
      <div className="col col-12 col-lg-6 p-0">
        <Formik
          initialValues={{
            id: "",
            username: "",
            password: "",
          }}
          validationSchema={ValidationSchema}
          onSubmit={(values) => {
            console.log(values);
            users.map((user) => {
              if (
                values.username === user.username &&
                values.password === user.password
              ) {
                login();
              }
              return user;
            });
          }}
        >
          {({ errors, values, touched }) => (
            <Form className="col col-12 ">
              <div className="row justify-content-center align-items-center gap-3">
                <h1 className="text-center">Log In</h1>
                <div className="row">
                  <label className="col col-3" htmlFor="username">
                    Username
                  </label>
                  <Field
                    className="col col-9"
                    type="text"
                    label="Username"
                    id="username"
                    value={values.username}
                    placeholder="Game username"
                  />
                </div>

                {errors.username && touched.username ? (
                  <div>{errors.username}</div>
                ) : null}
                <div className="row">
                  <label className="col col-3" htmlFor="password">
                    Password
                  </label>
                  <Field
                    className="col col-9"
                    type="password"
                    label="Password"
                    id="password"
                    value={values.password}
                    placeholder="Game password"
                  />
                </div>
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <button className="btn btn-primary w-50" type="submit">
                  Log In
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <div className="col col-12 col-lg-6 p-0">
        <Formik
          initialValues={{
            id: "",
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
          {({ errors, values, touched }) => (
            <Form className="col col-12 pt-5 p-lg-0 ">
              <div className="row justify-content-center align-items-center gap-3">
                <h1 className="text-center">Register</h1>
                <div className="row">
                  <label className="col col-3" htmlFor="username">
                    Username
                  </label>

                  <Field
                    className="col col-9"
                    type="text"
                    label="Username"
                    id="username"
                    value={values.username}
                    placeholder="Game username"
                  />
                </div>
                {errors.username && touched.username ? (
                  <div>{errors.username}</div>
                ) : null}
                <div className="row">
                  <label className="col col-3" htmlFor="password">
                    Password
                  </label>
                  <Field
                    className="col col-9"
                    type="password"
                    label="Password"
                    id="password"
                    value={values.password}
                    placeholder="Game password"
                  />
                </div>
                {errors.password && touched.password ? (
                  <div>{errors.password}</div>
                ) : null}
                <button className="btn btn-primary w-50" type="submit">
                  Register
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
      <Footer />
    </div>
  );
}
