import React from "react";

import Header from "../../components/header/header.component";

const Layout = ({ currentUser, children }) => {
    return (
        <>
            <header>
                <Header currentUser={currentUser}/>
            </header>
            <div>{children}</div>
        </>
    )
}

export default Layout;