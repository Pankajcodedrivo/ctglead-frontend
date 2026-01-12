import { useState } from "react";
import DashboardHeader from "../../components/DashboardHeader";
import DashboardLeft from "../../components/DashboardLeft";
import DashboardFooter from "../../components/DashboardFooter";
import Input from "../../components/UI/input/Input";
import { useFormik } from "formik";
import * as Yup from "yup";
import { emailSchema, fullNameSchema } from "../../utils/yupSchemas";
import { saveSupport } from "../../service/apis/support.api";

const Support = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  const [submitting, setSubmitting] = useState(false);

  const supportFormik = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      phone: "",
      message: "",
    },
    validationSchema: Yup.object({
      fullname: fullNameSchema,
      email: emailSchema
    }),
    onSubmit: async (values, { resetForm }) => {
      setSubmitting(true);
      try {
        await saveSupport(values);
        resetForm();
      } catch (error) {
        console.error("Support request failed", error);
      } finally {
        setSubmitting(false);
      }
    },
  });
    return (
        <div className="dashboard-wrapper">
            <DashboardHeader toggleMenu={toggleMenu} />
            <div className="dashboard-body">
                <DashboardLeft isOpen={isOpen} closeMenu={closeMenu} />
                <div className="dashboard-right">
                    <div className="dash-hdr">
                        <h3>Support</h3>
                        <p className="font-16">Get help, find answers, and connect with our team.</p>
                    </div>
                    <div className="cmn-box h-auto p-40">
                        <h4 className="s-hdr">Contact us</h4>
                        <div className="row">
                            <div className="col-md-6">
                                <Input
                                id="fullname"
                                name="fullname"
                                type="text"
                                label="Full Name *"
                                placeholder="Full name"
                                value={supportFormik.values.fullname}
                                onChange={supportFormik.handleChange}
                                errorMsg={
                                    supportFormik.touched.fullname
                                    ? (supportFormik.errors.fullname as string)
                                    : undefined
                                }
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <Input
                                id="email"
                                name="email"
                                type="email"
                                label="Email Address *"
                                placeholder="example@yahoo.com"
                                value={supportFormik.values.email}
                                onChange={supportFormik.handleChange}
                                errorMsg={
                                    supportFormik.touched.email
                                    ? (supportFormik.errors.email as string)
                                    : undefined
                                }
                                />
                            </div>
                            <div className="col-md-6">
                                <Input
                                id="phone"
                                name="phone"
                                type="tel"
                                label="Phone (optional)"
                                placeholder="+1 9876543210"
                                value={supportFormik.values.phone}
                                onChange={supportFormik.handleChange}
                                />
                            </div>
                            <div className="col-md-12">
                                <Input
                                id="message"
                                name="message"
                                type="textarea"
                                label="Message"
                                placeholder="Tell us what you need help with..."
                                value={supportFormik.values.message}
                                onChange={supportFormik.handleChange}
                                />
                            </div>
                            <div className="col-md-12 text-center">
                            <button
                            type="button"
                            className="btn green-btn mb-w-100 sm wd-150"
                            onClick={() => supportFormik.handleSubmit()}
                            disabled={submitting}
                            >
                            {submitting ? "Submitting..." : "Submit"}
                            </button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            <DashboardFooter />
        </div>
    )
};

export default Support;
