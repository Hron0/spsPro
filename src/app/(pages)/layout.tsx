import React from 'react';
import Footer from "@/components/shared/Footer";

export default function Layout({children}: { children: React.ReactNode}) {
    return (
        <div className={"w-full min-h-[100vh] flex flex-col justify-between"}>
            {children}
            <Footer/>
        </div>
    )
}
