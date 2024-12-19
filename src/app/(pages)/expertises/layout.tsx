import React from 'react';
import TitleHeader from "@/components/shared/TitleHeader";
import {ExpertisesTable} from "@/components/shared/expertiseDetailed/ExpertisesTable";

function Layout({children, modal}: { children: React.ReactNode, modal: React.ReactNode, }) {
    return (
        <>
            {children}
            {modal}
        </>
    );
}

export default Layout;