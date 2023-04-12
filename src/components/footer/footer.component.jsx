import React from "react";

import "./footer.styles.scss";


const Footer = () => (
    <div className="footer">
        <hr/>
        <div className="footer-content">
            <span>Copyright &copy; {new Date().getFullYear()} Bel Inc. All rights reserved.</span>
            <span>Rwanda</span>
        </div>
    </div>
)

export default Footer; 