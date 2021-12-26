import * as Yup from 'yup';

export const categorySchema = Yup.object().shape({
    title: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Title is required"),
    subTitle: Yup.string()
        .min(2, "Too Short!")
        .max(90, "Too Long!")
        .required("Sub Title is required"),
});

export const categoryInitials = {
    title: '',
    subTitle: '',
};