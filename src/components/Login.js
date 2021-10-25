import React from 'react'
import { Formik } from 'formik';
import { useHistory } from "react-router-dom"

function Login() {

  const history = useHistory()

  return (

    <Formik 
      initialValues={{
        name: "",
        email: "",
        password:""

      }}
      validate={(values) => {

        let errors = {};

          if(!values.name) {
            errors.name = "Please, write your name."
          } else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
            errors.name = "Don't mess with me. Write valid characters, please!"
          }
          if(!values.email) {
            errors.email = "Please, write your email."
          } else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(values.email)) {
            errors.email = "Don't mess with me. Write valid characters, please!"
          }
          if(!values.password) {
            errors.password = "Please, write your password."
          } else if(!/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[A-Za-z0-9]{6,}$/.test(values.password)) {
            errors.password = "Don't mess with me. Write valid characters, please!"
          }
        return errors;
      }}
      onSubmit={(values) =>{
        console.log(values);
        // console.log("formulario enviado");
        history.push("/");
        localStorage.setItem("user", JSON.stringify(values));
      }}
    >
      {({values, errors, touched, handleSubmit, handleChange, handleBlur}) => ( //estructura renderer prop
        <form className="bg-gray-900 p-10" onSubmit={handleSubmit}>
          {/* {console.log(errors)} */}
          {/* {console.log(touched)} */}
          <div>
            <label htmlFor="name">Name: </label>
            <input 
              className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
              type="text"
              id="name"
              name="name"
              placeholder="Your nme here"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.name && errors.name && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{errors.name}</div>}
          <div>
            <label htmlFor="email">Email: </label>
            <input 
              className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
              type="email"
              id="email"
              name="email"
              placeholder="Your email here (example@example.com)"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.email && errors.email && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{errors.email}</div>}
          <div>
            <label htmlFor="email">Passwrod: </label>
            <input 
              className="py-3 px-4 focus:outline-none focus:text-gray-100 bg-gray-700 w-full"
              type="password"
              id="password"
              name="password"
              placeholder="Your password"
              value={values.password}
              onChange={handleChange}
              onBlur={handleBlur}
            />
          </div>
          {touched.password && errors.password && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">{errors.password}</div>}

          <button className="bg-green-600 w-full hover:bg-green-500 py-2 px-4 mt-5" type="submit">Log In</button>
        </form>
      )}
    </Formik>
  )
}

export default Login
