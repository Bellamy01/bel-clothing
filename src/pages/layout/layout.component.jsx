import React from "react";
import Footer from "../../components/footer/footer.component";

import Header from "../../components/header/header.component";
import "./layout.styles.scss";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Header/>
            </header>
            <div>{children}</div>
            <footer className="foot">
                <hr/>
                <Footer/>
            </footer>
        </>
    )
}

export default Layout;