import React from 'react';
import Footer from "@/components/shared/Footer";

const Layout = ({
                    children,
                    modal,
                }:
                {
                    children: React.ReactNode,
                    modal: React.ReactNode,
                }) => (
    <>
        {children}
        {modal}
        <Footer/>
    </>
)

export default Layout