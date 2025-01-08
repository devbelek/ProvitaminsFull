import * as yup from "yup";

export const schema = yup.object({
  name: yup.string().required("Это поле обязательно"),
  review: yup.string().required("Это поле обязательно"),
  rating: yup
    .number()
    .required("Поставьте оценку")
});
