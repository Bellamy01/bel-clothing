import React from "react";

import Header from "../../components/header/header.component";

const Layout = ({ children }) => {
    return (
        <>
            <header>
                <Header/>
            </header>
            <div>{children}</div>
        </>
    )
}

export default Layout;