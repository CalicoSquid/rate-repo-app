import React, { useState } from "react";
import { useFormik } from "formik";
import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-native";
import { CREATE_REVIEW_MUTATION } from "../../graphql/mutations";
import { createFormSchema } from "../../yupSchema";
import CreateReviewForm from "./CreateReviewForm";

export default function CreateReviewContainer() {
  const [createReview] = useMutation(CREATE_REVIEW_MUTATION, {
    onError: (error) => {
      setErrorMessage(error.message);
      setTimeout(() => {
        setErrorMessage("");
      }, 3000);
    },
  });
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      ownerName: "",
      repositoryName: "",
      rating: 0,
      text: "",
    },
    validationSchema: createFormSchema,
    onSubmit: async (values) => {
      console.log("Submitting", values); // Debugging line
      const { ownerName, repositoryName, rating, text } = values;
      try {
        const result = await createReview({
          variables: {
            review: {
              ownerName,
              repositoryName,
              rating: Number(rating),
              text,
            },
          },
        });
        navigate(`/repository/${result.data.createReview.repositoryId}`);
      } catch (error) {
        console.error(error);
      }
    },
  });

  return (
    <CreateReviewForm
      formik={formik}
      errorMessage={errorMessage}
    />
  );
}
