import * as Yup from "yup";

const ValidationSchema = Yup.object().shape({
  username: Yup.string()

    .min(4, "Your username must be longer than 4 characters!")

    .max(20, "Your username must have less than 4 characters!")

    .required("You need to write an username of 4-20 characters"),

  password: Yup.string()

    .min(4, "Your password must be longer than 4 characters!")

    .max(20, "Your password must have less than 4 characters!")

    .required("You need to write a password of 4-20 characters"),
});

export default ValidationSchema;
