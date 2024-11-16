'use client'
import React from 'react';
import {useIsMobile} from "@/lib/hooks/use-mobile";
import {SidebarTrigger} from "@/components/ui/sidebar";
import {Navbar} from "@/components/shared/Navbar";

function Menu() {
    const isMobile = useIsMobile()

    return (
        <>
            {isMobile
                ? <SidebarTrigger/>
                : <Navbar/>
            }
        </>
    );
}

export default Menu;