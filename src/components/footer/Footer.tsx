import {
  FaFacebookF,
  FaGithub,
  FaGoogle,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";

/**
 * Footer Component
 * @returns
 */

const Footer = () => {
  return (
    <div className="my-footer">
      <footer className="text-center text-lg-start bg-light text-muted">
        {/* Social Sites Section */}
        <section className="d-flex justify-content-center justify-content-lg-between p-3 border-bottom">
          <div className="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
          </div>

          <div>
            <a href="#!" className="me-4 text-reset">
              <FaFacebookF />
            </a>
            <a href="#!" className="me-4 text-reset">
              <FaTwitter />
            </a>
            <a href="#!" className="me-4 text-reset">
              <FaGoogle />
            </a>
            <a href="#!" className="me-4 text-reset">
              <FaInstagram />
            </a>
            <a href="#!" className="me-4 text-reset">
              <FaLinkedin />
            </a>
            <a href="#!" className="me-4 text-reset">
              <FaGithub />
            </a>
          </div>
        </section>

        {/* Company Details and Contact Section */}
        <section className="">
          <div className="container text-center text-md-start mt-2">
            <div className="row mt-3">
              <div className="col-md-4 col-lg-5 col-xl-4 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">
                  <i className="fas fa-gem me-3"></i>ExtremeCars
                </h6>
                <p>
                  12th Floor, Vishwaroop IT Park, Sector 32, Vashi, Navi Mumbai
                  - 400705. Maharashtra, India. Phone: +91 (22) 612 800000
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Request a Test Drive
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Book a Car
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Career
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Contact Us
                  </a>
                </p>
              </div>

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-4">
                <h6 className="text-uppercase fw-bold mb-4">Legal</h6>
                <p>
                  <a href="#!" className="text-reset">
                    Legal Disclaimer/Imprint
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Privacy Policy
                  </a>
                </p>
                <p>
                  <a href="#!" className="text-reset">
                    Cookie Policy
                  </a>
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Copyright Section */}
        <div className="text-center p-1">
          © 2022 Copyright:
          <a className="text-reset fw-bold" href="https://hashedin.com/">
            HashedIn.com
          </a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
