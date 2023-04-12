import React from "react";
import Footer from "../../components/footer/footer.component";

import Header from "../../components/header/header.component";
import "./layout.styles.scss";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header>
                <Header/>
            </header>
            <main>{children}</main>
            <footer>
                <Footer/>
            </footer>
        </div>
    )
}

export default Layout;