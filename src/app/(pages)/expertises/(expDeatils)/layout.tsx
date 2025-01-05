import React from 'react';
import TitleHeader from "@/components/shared/TitleHeader";
import {ExpertisesTable} from "@/components/shared/expertiseDetailed/ExpertisesTable";

export default function Layout({children}: { children: React.ReactNode}) {
    return (
        <>
            {children}
            <div className={"flex flex-col w-full relative overflow-hidden"}>
                <section className="mx-auto w-full bg-secondary relative">
                    <div className={'container grid grid-rows-2 pt-16 pb-6'}>
                        <TitleHeader title={'Все файлы'} color={''} cClass={"row-start-2"}/>
                    </div>
                </section>
                <section className={'relative'}>
                    <ExpertisesTable/>
                </section>
            </div>
        </>
    );
}
