import * as yup from "yup";

export const createProductSchema = yup.object().shape({
  name: yup.string().required("Product name is required"),
  sku: yup.string().required("SKU is required"),
  price: yup.number().positive("Price must be a positive number").required("Price is required"),
  description: yup.string().required("Description is required"),
});
