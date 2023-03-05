import React from "react";

import Header from "../../components/header/header.component";

const Layout = ({ currentUser, children }) => {
    return (
        <>
            <header>
                <Header currentUser={currentUser}/>
            </header>
            <main>{children}</main>
        </>
    )
}

export default Layout;