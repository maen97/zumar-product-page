import React, { PropsWithChildren } from "react";
import { Footer, Nav } from ".";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <Nav />
            {children}
            <Footer />
        </>
    );
};

export default Layout;
