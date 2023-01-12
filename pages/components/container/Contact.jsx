import React, { useState, useEffect } from "react";
import toast, { Toaster } from 'react-hot-toast';

// import "./Contact.scss";
import { contacts } from "../../Data";
import { socialIcons } from "../../Data";
import { motion } from "framer-motion";

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [valid, setValid] = useState(false);

  const nameRegex = /^(?=.{1,40}$)[a-zA-Z]+(?:[-'\s][a-zA-Z]+)*$/;
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
  }



  const sendEmail = ()=> {    

    setValid(true);

    const greetingsEmail =  {
            from: email,
            type: "greetings",
            subject: "Thank you for contacting me",
            preheader: "Thank you for contacting me",
            greetings: `Dear ${firstName} ${lastName},`,
            message: "Thank you for contacting me! I will review your request and will be in touch within few days. </br> n\
                      In the meantime, make sure you follow me on LinkedIn (link below), to stay updated with my personal life, creations and career achievements. </br> n\
                      </br> n\
                      Met vriendelijke groet, </br> n\
                      Andrea Piano - An Italian Front-end Developer",
            callToAction: {
              name: "Andrea Piano - An Italian Front-end Developer",
              href: "https://ateyapayo.app",
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
              href: "www.ateyapayo.app",
              message: "ateyapayo.app",
              active: true,
            },
    }

    const summaryEmail = {
        from: email,
        type: "summary",
        subject: "Congratulations, you got a new contact",
        preheader: "Congratulations, you got a new contact",
        greetings: `Yo Andrea, <strong>${firstName} >${lastName}</strong> sent you a message:`,
        message: `<i>${message}</i>`,
        callToAction: {
          name: "",
          href: "https://devben.app",
          active: false,
        },
        conclusion: `You can contact <strong>${firstName}</strong> at the email: <strong>${email}</strong><br />
                    while his phone number is: <i>${phone}</i>`,
        thanks: "Thanks!",
        unsubscribe: {
          name: "Unsubscribe",
          href: "http://localhost:3000/",
          message: "Don&apos;t like these emails?",
          active: false,
        },
        footer: {
          name: "Powered by",
          href: "www.ateyapayo.app",
          message: "ateyapayo.app",
          active: true,
        },
    }

    const emails = {
        data:[greetingsEmail,summaryEmail]
    }

    fetch('/api/email', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(emails),
        })
        .then((response) => response.json())
        .then((data) => {
            toast.success("Your email has been succesfully sent.");
            setDisabled(false);
            clean();
        })
        .catch((error) => {
            console.error('Error:', error);
            toast.error(JSON.stringify(err.message));
            setDisabled(false);
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
          <h3>Get In Touch</h3>
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
          {(!nameRegex.test(firstName) ||
            firstName.length < 2 ||
            !nameRegex.test(lastName) ||
            lastName.length < 2 ||
            phone.length < 5 ||
            !phoneRegex.test(phone) ||
            !emailRegex.test(email) ||
            message.length < 1) && (
            <div>
              <span className="invalid-message">
                Please fill out all the fields.
              </span>
            </div>
          )}
          {!valid && (
            <button className="btn-disabled" disabled>
              Send
            </button>
          )}
          {valid && (
            <motion.div
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="btn"
            >
              <a onClick={()=>sendEmail()}>Send</a>
            </motion.div>
          )}
        </motion.div>
      </div>
      <Toaster position="top-right" reverseOrder={false}/>
    </div>
  );
};

export default Contact;
