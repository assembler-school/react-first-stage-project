import React, { Component, useState } from "react";
import { Redirect } from "react-router-dom";
import { v4 as uuid } from "uuid";
import { Formik } from "formik";

// import productSchema from "./product-schema";

// function addProductDetails(product) {
//   return {
//     id: uuid(),
//     ...product,
//     quantity: 0,
//     isFavorite: false,
//     createdAt: new Date().toISOString(),
//     updatedAt: new Date().toISOString(),
//     votes: {
//       upVotes: {
//         upperLimit: 10,
//         currentValue: 0,
//       },
//       downVotes: {
//         lowerLimit: 10,
//         currentValue: 0,
//       },
//     },
//     author: {
//       id: uuid(),
//       ...product.author,
//     },
//   };
// }

// function NewProductForm({ saveNewProduct, ...props }) {
//   const [submitted, SetSubmitted] = useState(false);

//   const setSubmittedFunction = () => {
//     setTimeout(() => {
//       SetSubmitted(true);
//     }, 500);
//   };

//   return (
//     <>
//       <Formik
//         initialValues={{
//           title: "",
//           price: 0,
//           img: "",
//           shortDescription: "",
//           longDescription: "",
//           unitsInStock: 0,
//           authorFirstName: "",
//           authorLastName: "",
//           authorEmail: "",
//         }}
//         validationSchema={productSchema}
//         onSubmit={(values, { setSubmitting }) => {
//           const newProduct = addProductDetails(values);
//           saveNewProduct(newProduct);
//           setSubmitting(true);
//           setSubmittedFunction();
//         }}
//       >
//         {({
//           handleChange,
//           handleBlur,
//           handleSubmit,
//           errors,
//           values,
//           touched,
//           isValidating,
//           isValid,
//           isSubmitting,
//         }) => (
//           <form onSubmit={handleSubmit}>
//             <Input
//               type="text"
//               label="Product title"
//               id="title"
//               value={values.title}
//               placeholder="Product title"
//               handleChange={handleChange}
//               handleBlur={handleBlur}
//               hasErrorMessage={touched.title}
//               errorMessage={errors.title}
//             />
//             <Input
//               type="number"
//               label="Product price"
//               id="price"
//               value={values.price}
//               placeholder="Product price"
//               handleChange={handleChange}
//               handleBlur={handleBlur}
//               hasErrorMessage={touched.price}
//               errorMessage={errors.price}
//             />
//             <Input
//               type="text"
//               label="Product image url"
//               id="img"
//               value={values.img}
//               placeholder="Product image url"
//               handleChange={handleChange}
//               handleBlur={handleBlur}
//               hasErrorMessage={touched.img}
//               errorMessage={errors.img}
//             />
//             <Input
//               type="text"
//               label="Short description"
//               id="shortDescription"
//               value={values.shortDescription}
//               placeholder="Short description"
//               handleChange={handleChange}
//               handleBlur={handleBlur}
//               hasErrorMessage={touched.shortDescription}
//               errorMessage={errors.shortDescription}
//             />
//             <Input
//               type="text"
//               label="Long description"
//               id="longDescription"
//               value={values.longDescription}
//               placeholder="Long description"
//               handleChange={handleChange}
//               handleBlur={handleBlur}
//               hasErrorMessage={touched.longDescription}
//               errorMessage={errors.longDescription}
//             />
//             <Input
//               type="number"
//               label="Units in stock"
//               id="unitsInStock"
//               value={values.unitsInStock}
//               placeholder="Units in stock"
//               handleChange={handleChange}
//               handleBlur={handleBlur}
//               hasErrorMessage={touched.unitsInStock}
//               errorMessage={errors.unitsInStock}
//             />
//             <Input
//               type="text"
//               label="Author first name"
//               id="authorFirstName"
//               value={values.authorFirstName}
//               placeholder="Author first name"
//               handleChange={handleChange}
//               handleBlur={handleBlur}
//               hasErrorMessage={touched.authorFirstName}
//               errorMessage={errors.authorFirstName}
//             />
//             <Input
//               type="text"
//               label="Author last name"
//               id="authorLastName"
//               value={values.authorLastName}
//               placeholder="Author last name"
//               handleChange={handleChange}
//               handleBlur={handleBlur}
//               hasErrorMessage={touched.authorLastName}
//               errorMessage={errors.authorLastName}
//             />
//             <Input
//               type="email"
//               label="Author email"
//               id="authorEmail"
//               value={values.authorEmail}
//               placeholder="Author email"
//               handleChange={handleChange}
//               handleBlur={handleBlur}
//               hasErrorMessage={touched.authorEmail}
//               errorMessage={errors.authorEmail}
//             />
//             <Button submitButton block disabled={isValidating || !isValid}>
//               {isSubmitting ? "Submitting..." : "Submit"}
//             </Button>
//           </form>
//         )}
//       </Formik>
//       {submitted && <Redirect to="/" />}
//     </>
//   );
// }

export default function NewGame() {
  return (
    <>
      <Formik
        initialValues={{
          id: uuid(),
          title: "",
          thumbnail: "",
          status: "",
          short_description: "",
          description: "",
          game_url: "",
          genre: "",
          platform: "",

          publisher: "",
          developer: "",
          release_date: "",
          freetogame_profile_url: "",

          minimum_system_requirements: {
            os: "",
            processor: "",
            memory: "",
            graphics: "",
            storage: "",
          },

          screenshots: [], // id and image
        }}
        // validationSchema={productSchema}
        // onSubmit={(values, { setSubmitting }) => {
        //   const newProduct = addProductDetails(values);
        //   saveNewProduct(newProduct);
        //   setSubmitting(true);
        //   setSubmittedFunction();
        // }}
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
              label="Game title"
              id="title"
              value={values.title}
              placeholder="Game title"
              handleChange={handleChange}
              handleBlur={handleBlur}
              hasErrorMessage={touched.title}
              errorMessage={errors.title}
            />
            <input
              type="text"
              label="Thumbnail"
              id="thumbnail"
              value={values.thumbnail}
              placeholder="Thumbnail"
              handleChange={handleChange}
              handleBlur={handleBlur}
              hasErrorMessage={touched.thumbnail}
              errorMessage={errors.thumbnail}
            />
            <input
              type="text"
              label="Status"
              id="status"
              value={values.status}
              placeholder="Thumbnail"
              handleChange={handleChange}
              handleBlur={handleBlur}
              hasErrorMessage={touched.status}
              errorMessage={errors.status}
            />
            <input
              type="text"
              label="Short description"
              id="short_description"
              value={values.short_description}
              placeholder="Short description"
              handleChange={handleChange}
              handleBlur={handleBlur}
              hasErrorMessage={touched.short_description}
              errorMessage={errors.short_description}
            />

            <input
              type="text"
              label="Description"
              id="description"
              value={values.description}
              placeholder="Description"
              handleChange={handleChange}
              handleBlur={handleBlur}
              hasErrorMessage={touched.description}
              errorMessage={errors.description}
            />

            <input
              type="text"
              label="Game url"
              id="game_url"
              value={values.game_url}
              placeholder="Game url"
              handleChange={handleChange}
              handleBlur={handleBlur}
              hasErrorMessage={touched.game_url}
              errorMessage={errors.game_url}
            />

            <input
              type="text"
              label="Genre"
              id="genre"
              value={values.genre}
              placeholder="Genre"
              handleChange={handleChange}
              handleBlur={handleBlur}
              hasErrorMessage={touched.genre}
              errorMessage={errors.genre}
            />
            <input
              type="text"
              label="Platform"
              id="platform"
              value={values.platform}
              placeholder="Platform"
              handleChange={handleChange}
              handleBlur={handleBlur}
              hasErrorMessage={touched.platform}
              errorMessage={errors.platform}
            />

            <input
              type="text"
              label="Publisher"
              id="publisher"
              value={values.publisher}
              placeholder="Publisher"
              handleChange={handleChange}
              handleBlur={handleBlur}
              hasErrorMessage={touched.publisher}
              errorMessage={errors.publisher}
            />
            <input
              type="text"
              label="Developer"
              id="developer"
              value={values.developer}
              placeholder="Developer"
              handleChange={handleChange}
              handleBlur={handleBlur}
              hasErrorMessage={touched.developer}
              errorMessage={errors.developer}
            />

            <input
              type="text"
              label="Release date"
              id="release_date"
              value={values.release_date}
              placeholder="Release date"
              handleChange={handleChange}
              handleBlur={handleBlur}
              hasErrorMessage={touched.release_date}
              errorMessage={errors.release_date}
            />
            <input
              type="text"
              label="Freetogame profile url"
              id="freetogame_profile_url"
              value={values.freetogame_profile_url}
              placeholder="Freetogame profile url"
              handleChange={handleChange}
              handleBlur={handleBlur}
              hasErrorMessage={touched.freetogame_profile_url}
              errorMessage={errors.freetogame_profile_url}
            />

            {/*
          


          minimum_system_requirements: {
            os: "",
            processor: "",
            memory: "",
            graphics: "",
            storage: "",
                      screenshots: [], // id and image

          }, */}
          </form>
        )}
      </Formik>
    </>
  );
}
