import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import { verifySecurityCodeApi } from "../../../service/apis/auth.api";

export const useVerifySecurityCode = () => {
  const navigate = useNavigate();
  const email = localStorage.getItem("email") || "";

const formik = useFormik({
    initialValues: {
      otp: ["", "", "", ""],
    },
    validationSchema: yup.object({
      otp: yup
        .array()
        .test(
          "otp-complete",
          "Please enter the 4-digit security code",
          (otp) => otp?.every((digit) => digit && digit.length === 1)
        ),
    }),
    onSubmit: async (values) => {
      const code = values.otp.join("");
      await verifySecurityCodeApi({ email, code });
      navigate("/reset-password");
    },
  });
  return { formik, email };
};
