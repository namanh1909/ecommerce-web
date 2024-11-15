import * as yup from 'yup';

export const createProductSchema = yup.object().shape({
  productName: yup.string().required(),
  productImageDetail: yup.array().of(yup.mixed<File>().required()).required(),
  descriptionProduct: yup.string().required(),
  price: yup.string().required(),
  brandId: yup.string().required(),
  thumbnail: yup.mixed<string | File>().required(),
  size: yup.string().required(),
  type: yup.string().required(),
  quantity: yup.string().required(),
  status: yup.string().required(),
});