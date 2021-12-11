import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
    firstName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("First Name is required"),

    lastName: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Last Name is required"),

    username: Yup.string()
        .min(3, "Too Short!")
        .max(20, "Too Long")
        .required("Username is required"),

    password: Yup.string()
        .required("Password is required")
        .min(6, "Password is too short - should be 6 chars minimum"),
})