import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Это поле обязательно"),
  phone_number: yup.string().required("Заполните все обязательные поля"),
});
