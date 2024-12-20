import React from 'react';
import TitleHeader from "@/components/shared/TitleHeader";
import {ExpertisesTable} from "@/components/shared/expertiseDetailed/ExpertisesTable";

function Layout({children}: { children: React.ReactNode }) {
    return (
        <>
            {children}
        </>
    );
}

export default Layout;