import { useState,useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import SocialLinks from "./elements/SocialLinks";

const Contact = ({translations}) => {

    const [fullName,setFullName] = useState('');
    const [email,setEmail] = useState('');
    const [phone,setPhone] = useState('');
    const [message,setMessage] = useState('');

    const [disabled,setDisabled] = useState(true);
    const [isValidEmail,setValidEmail] = useState(false);
    const [isValidPhone,setValidPhone] = useState(false);


    useEffect(()=>{ 

        const emailRegex = /\S+@\S+\.\S+/;
        setValidEmail(emailRegex.test(email));

        setEmail(email.toLowerCase()); 

        const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        setValidPhone(phoneRegex.test(phone));

        if(isValidEmail && isValidPhone && email.length && fullName.length && message.length){
            setDisabled(false);
        }else{
            setDisabled(true);
        }

    },[email,fullName,phone,message,disabled,isValidEmail, isValidPhone]);

    const clean = ()=>{
        setEmail("");
        setFullName("");
        setPhone("");
        setMessage("");
    }

    const sendEmail = ()=> {    

        setDisabled(true);

        const greetingsEmail =  {
                from: email,
                type: "greetings",
                subject: translations?.email.greetings,
                preheader: translations?.email.greetings,
                greetings: `${translations?.email.hiThere}, ${fullName}`,
                message: translations?.email.message,
                callToAction: {
                  name: translations?.email.myServices,
                  href: "https://devben.app",
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
                  href: "www.devben.app",
                  message: "devben.app",
                  active: true,
                },
        }

        const summaryEmail = {
            from: email,
            type: "summary",
            subject: "Congratulations, you got a new contact",
            preheader: "Congratulations, you got a new contact",
            greetings: `Hi Admin, <strong>${fullName}</strong> sent you a message:`,
            message: `<i>${message}</i>`,
            callToAction: {
              name: "",
              href: "https://devben.app",
              active: false,
            },
            conclusion: `You can contact <strong>${fullName}</strong> at the telephone number: <strong>${phone}</strong><br />
                        while his email is: <i>${email}</i>`,
            thanks: "Thanks!",
            unsubscribe: {
              name: "Unsubscribe",
              href: "http://localhost:3000/",
              message: "Don&apos;t like these emails?",
              active: false,
            },
            footer: {
              name: "Powered by",
              href: "www.devben.app",
              message: "devben.app",
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
                toast.success("You send us an email!");
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
        <section id="contact" className="section bg-primary">
            <div className="container">
                <div className="row"> 
                    <div className="col-lg-5 text-center text-lg-start wow fadeInUp">
                    <h2 className="text-10 fw-600 mb-5">{translations?.titles?.contact?.getInTouch}</h2>
                    <p className="text-5 mb-5">{translations?.paragraphs?.contact?.description}</p>
                    <h3 className="text-5 fw-600">{translations?.labels?.livingIn}:</h3>
                    <address className="text-4">
                        {translations?.info?.from}
                    </address>
                    <h3 className="text-5 fw-600">{translations?.labels?.call}:</h3>
                    <p className="text-4"><a className="text-4 text-black text-decoration-none" href={`tel:${translations?.info?.telephone}`}>{translations?.info?.telephone}</a></p>
                    <ul className="social-icons social-icons-lg justify-content-center justify-content-lg-start mt-5">
                        <SocialLinks translations={translations}/>
                    </ul>
                    </div>
                    <div className="col-lg-6 ms-auto mt-5 mt-lg-0 wow fadeInUp" data-wow-delay="0.3s">
                        <h2 className="text-10 fw-600 text-center text-lg-start mb-5">{translations?.titles?.contact?.estimateProject}</h2>
                        <div id="contact-form" className="form-border">
                            <div className="row g-4">
                                <div className="col-12">
                                    <label className="form-label" htmlFor="name">{translations?.labels?.whatIsYourName}:</label>
                                    <input id="name" name="name" type="text" className="form-control py-1"  value={fullName} onChange={(e)=>setFullName(e.target.value)} />
                                </div>
                                <div className="col-12">
                                    <label className="form-label" htmlFor="email">{translations?.labels?.yourEmailAddress}:</label>
                                    <input id="email" name="email" type="email" className="form-control py-1" value={email} onChange={(e)=>setEmail(e.target.value)} />
                                </div>
                                <div className="col-12">
                                    <label className="form-label" htmlFor="phone">{translations?.labels?.yourPhoneNumber}:</label>
                                    <input id="phone" name="phone" type="tel" className="form-control py-1" value={phone} onChange={(e)=>setPhone(e.target.value)} />
                                </div>
                                <div className="col-12">
                                    <label className="form-label" htmlFor="form-message">{translations?.labels?.howCanHelpYou}:</label>
                                    <textarea id="form-message" name="form-message" className="form-control py-1" rows="4" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                                </div>
                                <div className="col-12 text-center text-lg-start">
                                    <button id="submit-btn" className="btn btn-dark rounded-0" type="submit" disabled={disabled} onClick={()=>sendEmail()}>{translations?.buttons?.send} <span className="ms-3"><i className="fas fa-arrow-right"></i></span></button>
                                </div>
                                {
                                    disabled && (
                                    <h4 className='fs-5 text-danger'>{translations?.form?.validation}</h4>) || (<></>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Toaster position="top-right" reverseOrder={false}/>
        </section>
    )

}


export default Contact



