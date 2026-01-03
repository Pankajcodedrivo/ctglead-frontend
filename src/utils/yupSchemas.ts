import * as yup from "yup";
import { VALIDATION_MESSAGES } from "./validationMessages";

// Login validation
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

// My account validation
export const fnameSchema = yup
  .string()
  .required(VALIDATION_MESSAGES.FIRST_NAME);

export const lnameSchema = yup
  .string()
  .required(VALIDATION_MESSAGES.LAST_NAME);

export const dobSchema = yup
  .string()
  .required(VALIDATION_MESSAGES.DOB);

export const phoneSchema = yup
  .string()
  .required(VALIDATION_MESSAGES.PHONE);
