import * as Yup from 'yup';

export const signUpSchema = Yup.object().shape({
    fname: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("First Name is required"),

    lname: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Last Name is required"),

    username: Yup.string()
        .min(3, "Too Short!")
        .max(10, "Too Long")
        .required("Username is required"),

    password: Yup.string()
        .required("Password is required")
        .min(8, "Password is too short - should be 8 chars minimum"),
});

export const signInSchema = Yup.object().shape({
    username: Yup.string()
        .min(3, "Too Short!")
        .max(10, "Too Long")
        .required("Username is required"),

    password: Yup.string()
        .required("Password is required")
        .min(8, "Password is too short - should be 8 chars minimum"),
});

export const signUpInitials = {
    fname: '',
    lname: '',
    username: '',
    password: '',
};

export const signInInitials = {
    username: '',
    password: '',
};
