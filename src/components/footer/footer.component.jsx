import React from "react";

import "./footer.styles.scss";


const Footer = () => (
    <div className="footer">
        <span>Copyright &copy; {new Date().getFullYear()} Bel Inc. All rights reserved.</span>
        <span>Rwanda</span>
    </div>
)

export default Footer;