import React from "react";

import Header from "../../components/header/header.component";

const Layout = ({children}) => {
    return (
        <>
            <header>
                <Header/>
            </header>
            <main>{children}</main>
        </>
    )
}

export default Layout;