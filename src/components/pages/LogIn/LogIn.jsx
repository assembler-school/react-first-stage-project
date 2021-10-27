import React, { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import { Redirect } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import ButtonExtra from "../../atoms/ButtonExtra";
import { authenticationService } from "../../../services";
// import { history } from "../../../utils";

import "./style.scss";

const initialValues = {
    username: "",
    password: "",
};

const validationSchema = Yup.object({
    username: Yup.string().required("Please enter your username"),
    password: Yup.string()
      .required("Please enter your password"),
    //   .matches(
    //     /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/,
    //     "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and one special case Character",
    //   ),
});

const LogIn = (props) => {
    const { darkMode } = useContext(GlobalContext);

    const handleSubmit = (values) => {
        console.log(values);
        authenticationService.login(values.username, values.password);
    }

    if (authenticationService.currentUserValue) {
        // history.push("/");
        return <Redirect to={{ pathname: "/favorites", state: { from: props.location } }} />;
    }

    return (
        <main className={`main ${darkMode ? "bg-dark" : "bg-light"}`}>
            <div className="container">
                <div className="display-content">
                    <h1>Log In: </h1>
                    <p>Username: test <span>Password: Test2021!</span></p>
                    <Formik
                        initialValues={initialValues}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        <Form className="LogIn">
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
                            <ButtonExtra onClick={handleSubmit} text="Submit" type="submit" />
                        </div>
                        </Form>
                    </Formik>
                </div>
            </div>
        </main>
    );
}

export default LogIn;