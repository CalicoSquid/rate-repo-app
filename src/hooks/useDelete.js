import { useMutation } from "@apollo/client";
import { DELETE_REVIEW_MUTATION } from "../graphql/mutations";
import { GET_MY_REVIEWS, GET_ME } from "../graphql/queries";

export const useDelete =  (id) => {
    const [deleteReview, result] = useMutation(DELETE_REVIEW_MUTATION, {
        variables: { deleteReviewId: id },
        refetchQueries: [{ query: GET_MY_REVIEWS }, { query: GET_ME, includeReviews: true }],
    });
    return [deleteReview, result];
}