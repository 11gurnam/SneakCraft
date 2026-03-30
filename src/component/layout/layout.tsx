import React, { ReactNode } from "react";
import Footer from "../footer/footer";
import Header from "../header/header";

type HeaderProps = {
    children: ReactNode;
};

const Layout = ({children}: HeaderProps) => {
    return (
        <main>
            <Header/>
            {children}
            <Footer/>
        </main>
    );
};

export default Layout;
