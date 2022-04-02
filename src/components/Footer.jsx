import React from "react";


const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white py-3">


            <div className="text-center  px-3">
                © {new Date().getFullYear()} Copyright: jadvivCreations
            </div>
            <div className="text-center pt-2 px-3">
                <a href='/contact' className="px-3 text-decoration-none text-light">Contact Us</a>
                <a href='/privacy-policy' className="px-3 text-decoration-none text-light">Privacy Policy</a>
                <a href='/terms-condition' className="px-3 text-decoration-none text-light">Terms & Condition</a>
            </div>
        </footer>
    );
};

export default Footer;
