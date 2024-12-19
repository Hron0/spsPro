import React from 'react';
import Footer from "@/components/shared/Footer";

export default function Layout({children}: { children: React.ReactNode}) {
    return (
        <>
            {children}
            <Footer/>
        </>
    )
}
