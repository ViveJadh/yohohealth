import React, { useRef, useState } from 'react';
import emailjs from "emailjs-com";

import NavigationBar from '../components/NavigationBar';


const Contact = () => {

    const form = useRef();
    const [isDisplay, setIsDisplay] = useState(false);
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_s42foip', 'template_6zhw2dj', form.current,
            'WTl-mTCXVu8vayn_M')
            .then((result) => {
                setIsDisplay(true)
                setMessage("Message sent successfully")
                e.target.reset();
            }, (error) => {

                setIsDisplay(true)
                setMessage("Message could not be sent.Try Again")
                e.target.reset();
            });
    };
    return (
        <>
            <NavigationBar />
            <div className="container">
                <form ref={form} onSubmit={sendEmail}>
                    <div className="row pt-5 mx-auto">
                        <div className="col-12 col-sm-8 col-lg-7 form-group mx-auto">
                            <input type="text" className="form-control" placeholder="Name" name="from_name" required />
                        </div>
                        <div className="col-12 col-sm-8 col-lg-7 form-group pt-2 mx-auto">
                            <input type="email" className="form-control" placeholder="Email Address" name="from_email" required />
                        </div>
                        <div className="col-12 col-sm-8 col-lg-7 form-group pt-2 mx-auto">
                            <input type="text" className="form-control" placeholder="Subject" name="subject" required />
                        </div>
                        <div className="col-12 col-sm-8 col-lg-7 form-group pt-2 mx-auto">
                            <textarea className="form-control" id="" cols="30" rows="8" placeholder="Your message" name="message" required></textarea>
                        </div>
                        <div className="col-12 col-sm-8 col-lg-7 pt-3 mx-auto">
                            <input type="submit" className="btn btn-info" value="Send Message"></input>
                        </div>
                        {isDisplay && <div className="col-12 col-sm-8 col-lg-7 pt-3 mx-auto">{message}</div>}
                    </div>
                </form>

            </div>

        </>
    );
}

export default Contact;
