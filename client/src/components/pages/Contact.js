import React, { useState, useLayoutEffect } from "react";
import emailjs from "emailjs-com";
import { useForm } from "react-hook-form";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import contactus from "../../imgs/contactus.svg";
import Footer from "../footer/Footer";
import "./pages.css";

const Contacts = () => {
  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  });
  const [successMessage, setSuccessMessage] = useState("");
  const { register, handleSubmit, errors } = useForm();

  const serviceID = "service_ID";
  const templateID = "template_tdewt89";
  const userID = "user_W0NJoXF8I7C2vccTuJ8VC";

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.email,
        subject: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  const sendEmail = (serviceID, templateID, variables, userID) => {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setSuccessMessage(
          "Form sent successfully! I'll contact you as soon as possible."
        );
      })
      .catch((err) => console.error(`Something went wrong ${err}`));
  };

  return (
    <Container>
      <div className="container">
        <div className="jumbotron">
          <img src={contactus} className="titlepic" alt="portrait of jesus" />
          <Typography
            className="headline"
            variant="h1"
            component="h2"
            style={{ fontFamily: ["Georama", "sans-serif"] }}
          >
            Contact
          </Typography>
        </div>
        <div id="contacts" className="contacts">
          <div className="text-center">
            <h1>
              <strong>We Want to Hear From You!</strong>
            </h1>
            <p>
              Please fill out the form and our team will get back to you as soon
              as possible.
            </p>
            <span className="success-message">{successMessage}</span>
          </div>
          <div className="container">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="row">
                <div className="col-md-12 col-xs-12">
                  {/* NAME INPUT */}
                  <div className="text-center">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Name"
                      name="name"
                      {...register({
                        required: "Please enter your name",
                        maxLength: {
                          value: 20,
                          message:
                            "Please enter a name with fewer than 20 characters",
                        },
                      })}
                    />
                    <div className="line"></div>
                  </div>
                  <span className="error-message">
                    {errors.name && errors.name.message}
                  </span>
                  {/* PHONE INPUT */}
                  <div className="text-center">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Phone Number"
                      name="phone"
                      ref={register({
                        required: "Please add your phone number",
                      })}
                    />
                    <div className="line"></div>
                  </div>
                  <span className="error-message">
                    {errors.phone && errors.phone.message}
                  </span>
                  {/* EMAIL INPUT */}
                  <div className="text-center">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email"
                      name="email"
                      ref={register({
                        required: "Please provide you email",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "invalid Email",
                        },
                      })}
                    />
                    <div className="line"></div>
                  </div>
                  <span className="error-message">
                    {errors.email && errors.email.message}
                  </span>
                  {/* SUBJECT INPUT */}
                  <div className="text-center">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Subject"
                      name="subject"
                      ref={register({
                        required: "OOPS, you forget to add the subject.",
                      })}
                    />
                    <div className="line"></div>
                  </div>
                  <span className="error-message">
                    {errors.subject && errors.subject.message}
                  </span>
                  <textarea
                    type="text"
                    className="form-control"
                    placeholder="How can we help you?"
                    name="description"
                    ref={register({
                      required: "Please describe shortly your project needs...",
                    })}
                  ></textarea>
                  <span className="error-message">
                    {errors.description && errors.description.message}
                  </span>
                </div>
                <div className="col-md-6 col-xs-12">{/* DESCRIPTION */}</div>

                <button
                  className="btn-main-offer contact-btn btn-lg btn-dark mt-5"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </Container>
  );
};

export default Contacts;
