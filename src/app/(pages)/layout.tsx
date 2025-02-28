import React from 'react';
import Footer from "@/components/shared/Footer";

export default function Layout({children}: { children: React.ReactNode}) {
    return (
        <div className={"w-full min-h-[140vh] flex flex-col items-center justify-between"}>
            {children}
            <Footer/>
        </div>
    )
}
