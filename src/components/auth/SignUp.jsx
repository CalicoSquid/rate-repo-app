import { useFormik } from "formik";
import { signUpUserSchema } from "../../yupSchema";
import { useNavigate } from "react-router-native";
import useSignUp from "../../hooks/useSignUp";

import SignUpForm from "./SignUpForm";

export default function SignUp() {
  const navigate = useNavigate();
  const [signUp] = useSignUp();

  const onSubmit = async (values) => {
    try {
      const { username, password } = values;
      const user = await signUp({ username, password });
      console.log(user, "user stored in Async Storage");
      navigate("/signin");
    } catch (error) {
      console.log(error.message);
    }
  };

  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema: signUpUserSchema,
    onSubmit,
  });

  return <SignUpForm formik={formik} onSubmit={onSubmit} />;
}
