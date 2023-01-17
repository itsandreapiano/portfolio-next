import React, { useState, useEffect } from "react";
import Image from "next/image";
import toast, { Toaster } from "react-hot-toast";

// import "./Contact.scss";
import { contacts } from "../../api/datafetch/Data";
import success from "../../../public/assets/images/success.svg";
import { socialIcons } from "../../api/datafetch/Data";
import { motion } from "framer-motion";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [valid, setValid] = useState(false);
  const [emailSent, setEmailSent] = useState(false);

  const nameRegex = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/;
  const emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const phoneRegex = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;

  useEffect(() => {
    if (
      firstName.length > 1 &&
      nameRegex.test(firstName) &&
      lastName.length > 1 &&
      nameRegex.test(lastName) &&
      phone.length > 4 &&
      phoneRegex.test(phone) &&
      emailRegex.test(email) &&
      message.length > 0
    ) {
      setValid(true);
    } else setValid(false);
  }, [firstName, lastName, email, phone, message]);

  const clean = () => {
    setFirstName("");
    setLastName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  const sendEmail = () => {
    setValid(true);

    const greetingsEmail = {
      from: email,
      type: "greetings",
      subject: "Thank you for contacting me",
      preheader: "Thank you for contacting me",
      greetings: `Dear ${firstName} ${lastName},`,
      message:
        "Thank you for contacting me! I will review your request and will be in touch within a few days. <br> In the meantime, make sure you follow me on <b>LinkedIn</b> (link below), to stay updated with my personal life, creations and career achievements. <br> <br> Met vriendelijke groet, <br> Andrea Piano",
      callToAction: {
        name: "Follow me on LinkedIn",
        href: "https://www.linkedin.com/in/andreapiano/",
        active: true,
      },
      conclusion: "",
      thanks: "",
      unsubscribe: {
        name: "Unsubscribe",
        href: "http://localhost:3000/",
        message: "Don&apos;t like these emails?",
        active: false,
      },
      footer: {
        name: "Powered by",
        href: "www.andreapiano.dev",
        message: "andreapiano.dev",
        active: true,
      },
    };

    const summaryEmail = {
      from: email,
      type: "summary",
      subject: "Congratulations Andrea, you've got a new request!",
      preheader: "Congratulations Andrea, you've got a new request!",
      greetings: `Hey Andrea, <strong>${firstName} ${lastName}</strong> sent you a message:`,
      message: `<i>${message}</i>`,
      callToAction: {
        name: "",
        href: "https://ateyapayo.app",
        active: false,
      },
      conclusion: `You can contact <strong>${firstName}</strong> at the email: <strong>${email}</strong>.<br />
                    In case you needed it, their phone number is: <i>${phone}</i>`,
      thanks: "Cheers!",
      unsubscribe: {
        name: "Unsubscribe",
        href: "http://localhost:3000/",
        message: "Don&apos;t like these emails?",
        active: false,
      },
      footer: {
        name: "Powered by",
        href: "www.andreapiano.dev",
        message: "ateyapayo.dev",
        active: true,
      },
    };

    const emails = {
      data: [greetingsEmail, summaryEmail],
    };

    fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(emails),
    })
      .then((response) => response.json())
      .then(() => {
        setEmailSent(true);
        clean();
      })
      .catch((error) => {
        console.error("Error:", error);
        toast.error(JSON.stringify("Whoops, something went wrong! Try again."));
        clean();
      });
  };

  return (
    <div className="container" id="contact">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-9, 0], opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="title"
      >
        <span>get in touch</span>
        <h1>Contact Me</h1>
      </motion.div>
      <div className="contact_form">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_left_container"
        >
          <h3>Contact me for a first interview</h3>
          <p className="contact_text">
            Is your company based in The Netherlands and planning to expand one
            of its Dev Teams very soon? <br />
            Well, you might have ended up on the right page, at the right time.
            <br />
            Contact me now to book a first interview!
          </p>
          {contacts.map((contact) => {
            return (
              <div className="contact_left" key={contact.id}>
                <div className="icon">{contact.icon}</div>
                <p>{contact.infoText}</p>
              </div>
            );
          })}
          <div className="social_icons">
            {socialIcons.map((socialIcon, index) => {
              return <div key={index}>{socialIcon}</div>;
            })}
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [150, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="contact_right"
        >
          {emailSent && (
            <div className="email-sent">
              <h1>
                Thank you for your message! <br /> You'll receive a confirmation
                email soon.
              </h1>
              <div className="success-container">
                <Image
                  className="success-img"
                  src={success}
                  width={100}
                  height={100}
                  alt="Successful feedback image"
                />
              </div>
            </div>
          )}
          {!emailSent && (
            <>
              <h3>Get In Touch</h3>

              {
              (!nameRegex.test(firstName) ||
                firstName.length < 2 ||
                !nameRegex.test(lastName) ||
                lastName.length < 2 ||
                phone.length < 5 ||
                !phoneRegex.test(phone) ||
                !emailRegex.test(email) ||
                message.length < 1) ? (
                <div className="submit-message">
                  <span className="invalid-submit">
                    Please fill out all the fields.
                  </span>
                </div>
              ) : (
                <div className="submit-message">
                  <span className="valid-submit">
                    Ready to submit!
                  </span>
                </div>
              )} 
              

              <div className="row">
                <input
                  type="text"
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First Name"
                />
                <input
                  type="text"
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                />
              </div>
              <div className="row">
                <input
                  type="text"
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Phone"
                />
                <input
                  type="email"
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
              </div>
              <div className="row">
                <textarea
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="message"
                ></textarea>
              </div>


              {!valid && (
                <button className="btn-disabled" disabled>
                  Send
                </button>
              )}
            </>
          )}
          {valid && (
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="btn btn-send"
              onClick={() => sendEmail()}
            >
              Send
            </motion.div>
          )}
        </motion.div>
      </div>
      <Toaster position="top-right" reverseOrder={false} />
    </div>
  );
};

export default Contact;
