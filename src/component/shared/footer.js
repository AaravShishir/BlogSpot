import React from "react";
import "../../assets/styles/shared/footer.css";
import "@fortawesome/fontawesome-free/css/all.css";

const Footer = () => {
  return (
    <>
      <div className="footer navbar-light bg-white ">
        <div className="copyright-section ">
          <p>Copyright @ Shishir 2020</p>
        </div>
        <div className="icon-section">
          <i className="fab fa-linkedin icon-border"></i>
          <i className="fab fa-twitter icon-border"></i>
          <i className="fab fa-github icon-border"></i>
        </div>
      </div>
    </>
  );
};

export default Footer;
