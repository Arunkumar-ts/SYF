import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const ContactForm = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "Name must be at least 2 characters")
      .required("Name is required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
      .required("Phone number is required"),
    comment: Yup.string()
      .min(5, "Please tell us a bit more")
      .required("Please give your message"),
  });

  const initialValues = {
    name: "",
    phone: "",
    comment: "",
  };

  const handleSubmit = (values, { resetForm }) => {
    const message = `Hello, my name is ${values.name}. My phone number is ${values.phone}. Message: ${values.comment}`;
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/6381500790?text=${encodedMessage}`;

    window.open(whatsappURL, "_blank");
    resetForm();
  };

  return (
    <div className="col-12 col-md-6">
      <div className="formglass-card p-4">
        <h3 className="fw-bold mb-4 textFont" style={{ color: "#8A2BE2" }}>
          Send Us a Message
        </h3>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ touched, errors }) => (
            <Form noValidate>
              <div className="mb-3 text-start">
                <label
                  htmlFor="name"
                  className="form-label fw-semibold textFont"
                >
                  Name
                </label>
                <Field
                  type="text"
                  name="name"
                  id="name"
                  className={`form-control ${
                    touched.name && errors.name ? "is-invalid" : ""
                  }`}
                  placeholder="Enter your name"
                />
                <ErrorMessage
                  name="name"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="mb-3 text-start">
                <label
                  htmlFor="phone"
                  className="form-label fw-semibold textFont"
                >
                  Phone Number
                </label>
                <Field
                  type="tel"
                  name="phone"
                  id="phone"
                  className={`form-control ${
                    touched.phone && errors.phone ? "is-invalid" : ""
                  }`}
                  placeholder="Enter 10-digit phone number"
                />
                <ErrorMessage
                  name="phone"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div className="mb-3 text-start">
                <label
                  htmlFor="comment"
                  className="form-label fw-semibold textFont"
                >
                  Message
                </label>
                <Field
                  as="textarea"
                  name="comment"
                  id="comment"
                  rows="3"
                  className={`form-control ${
                    touched.comment && errors.comment ? "is-invalid" : ""
                  }`}
                  placeholder="Type your message..."
                />
                <ErrorMessage
                  name="comment"
                  component="div"
                  className="invalid-feedback"
                />
              </div>

              <div>
                <button
                  type="submit"
                  className=" book-free-btn text-white px-5 py-2 secondaryFont fw-bold"
                  style={{ backgroundColor: "#E75480" }}
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default ContactForm;
