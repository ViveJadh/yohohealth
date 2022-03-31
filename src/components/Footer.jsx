import React from "react";
import { Container, Row } from "react-bootstrap";

const Footer = () => {
    return (
        <footer className="bg-dark text-center text-white pt-2">
            <div className="container p-4 pb-0">
                <div className="mb-4">
                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-facebook-f"></i>
                    </a>

                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-twitter"></i>
                    </a>

                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-google"></i>
                    </a>

                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-instagram"></i>
                    </a>

                    <a
                        className="btn btn-outline-light btn-floating m-1"
                        href="#!"
                        role="button"
                    >
                        <i className="fab fa-linkedin-in"></i>
                    </a>
                </div>
            </div>

            <div className="text-center p-3">
                © {new Date().getFullYear()} Copyright: jadvivCreations

            </div>
        </footer>
    );
};

export default Footer;
