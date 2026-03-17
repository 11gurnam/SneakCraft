import React, { ReactNode } from "react";
import Navbar from "../navbar/navbar";
import Footer from "../footer/footer";

type HeaderProps = {
    children: ReactNode;
};

const Layout = ({ children }: HeaderProps) => {
    return (
        <main>
            <Navbar />
            {children}
            <Footer />
        </main>
    );
};

export default Layout;
