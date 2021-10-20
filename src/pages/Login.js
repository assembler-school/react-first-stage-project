import React from 'react'

export default function Login() {
    return (
        <div>
            <p>hola</p>
        </div>
    )
}
/*
export default function NewGame() {
  return (
    <>
      <Formik
        initialValues={{
          id: uuid(),
          username: "",
          password: "",
        }}
        validationSchema={productSchema}
        onSubmit={(values, { setSubmitting }) => {
          const newProduct = addProductDetails(values);
          saveNewProduct(newProduct);
          setSubmitting(true);
          setSubmittedFunction();
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
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              label="Username"
              id="username"
              value={values.username}
              placeholder="Game username"
              handleChange={handleChange}
              handleBlur={handleBlur}
              hasErrorMessage={touched.username}
              errorMessage={errors.username}
            />
            <input
              type="text"
              label="Password"
              id="password"
              value={values.password}
              placeholder="password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              hasErrorMessage={touched.password}
              errorMessage={errors.password}
            />
          </form>
        )}
      </Formik>
    </>
  );
}
*/