import * as yup from "yup";

const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

const createFormSchema = yup.object().shape({
  ownerName: yup.string().required("Repository owner name is required"),
  repositoryName: yup.string().required("Repository name is required"),
  rating: yup
    .number()
    .min(0)
    .max(100)
    .required("Rating between 0 ans 100 is required"),
});

const signUpUserSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().min(5).max(50).required("Password is required"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Password confirmation is required"),
});

export { validationSchema, createFormSchema, signUpUserSchema };
