import * as yup from "yup";
import { VALIDATION_MESSAGES } from "./validationMessages";

export const emailSchema = yup
  .string()
  .email(VALIDATION_MESSAGES.EMAIL_INVALID)
  .required(VALIDATION_MESSAGES.EMAIL_REQUIRED);

export const passwordSchema = yup
  .string()
  .trim()
  .min(8, VALIDATION_MESSAGES.PASSWORD_MIN)
  .matches(/\w/, VALIDATION_MESSAGES.PASSWORD_INVALID)
  .required(VALIDATION_MESSAGES.PASSWORD_REQUIRED);
