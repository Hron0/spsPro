import React from 'react';
import Footer from "@/components/shared/Footer";

function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            {children}
            <Footer/>
        </>
    );
}

export default Layout;