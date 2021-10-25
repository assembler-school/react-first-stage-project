import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
// import { Redirect } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { Button } from "react-bootstrap";

import "./style.scss";

const initialValues = {
    username: "",
    password: "",
};

const validationSchema = Yup.object({
    username: Yup.string().required("Please enter your username"),
    password: Yup.string()
      .required("Please enter your password")
      .matches(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
        "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
      ),
});

const SignUp = () => {
    const { darkMode } = useContext(GlobalContext);

    function handleSubmit(values) {
        // login(initialValues);
        // eslint-disable-next-line
        console.log("Form submit", values);
    }
    return (
        <main className={`main ${darkMode ? "bg-dark" : "bg-light"}`}>
            <div className="container">
                <div className="display-content">
                    <h1>Sign Up: </h1>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form className="SignUp">
                        <label htmlFor="username">Username</label>
                        <Field
                            type="text"
                            name="username"
                            id="username"
                            placeholder="username"
                        />
                        <ErrorMessage
                            name="username"
                            render={(msg) => <div className="error">{msg}</div>}
                        />
                        <label htmlFor="password">Password</label>
                        <Field
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                        />
                        <ErrorMessage
                            name="password"
                            render={(msg) => <div className="error">{msg}</div>}
                        />
                        <div>
                            <Button variant="primary" type="submit" className="btn-submit" onClick={handleSubmit}>
                            Submit
                            </Button>{" "}
                        </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </main>
    );
}

export default SignUp;