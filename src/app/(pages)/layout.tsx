import React from 'react';
import Footer from "@/components/shared/Footer";

function Layout({children, modal}: { children: React.ReactNode, modal: React.ReactNode, }) {
    return (
        <>
            {children}
            {modal}
            <Footer/>
        </>
    );
}

export default Layout;