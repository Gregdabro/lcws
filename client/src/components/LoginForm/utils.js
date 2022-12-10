import * as Yup from "yup";

export const validatorConfig = {
    email: {
        isRequired: {
            message: "Электронная почта обязательна для заполнения"
        }
    },
    password: {
        isRequired: {
            message: "Пароль обязателен для заполнения"
        }
    }
};

export const signUpSchema = Yup.object({
    password: Yup.string()
        .min(4, "Password must contain at least 4 symbols")
        .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required")
});