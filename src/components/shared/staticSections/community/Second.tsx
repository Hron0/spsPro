import TitleHeader from "@/components/shared/TitleHeader";
import * as React from "react";

export default function Second() {
    return (
        <section
            className={'container relative px-6 lg:px-16 py-4 lg:py-8  h-min text-black aspect-video'}>
            <div className={"flex flex-col items-start gap-6 md:gap-24 bg-romb bg-center bg-contain relative w-full h-full"}>
                <TitleHeader title={'Основными целями создания и функционирования Системы\n' +
                    'являются:'} color={'orange'} cClass={'md:w-fit pr-8'}/>

                <div
                    className={"relative flex items-start justify-start bg-center "}>

                    <ul className={'list-none list-inside text-4xl font-extralight indent-8'}>
                        <li className={"mb-6"}>содействие потребителям в компетентном выборе исполнителей услуг;</li>
                        <li className={"mb-6"}>повышение конкурентоспособности организаций и частнопрактикующих
                            специалистов, реализующих услуги в различных отраслях;
                        </li>
                        <li>повышение доверия потребителей к услугам конкретных исполнителей;</li>
                    </ul>
                </div>
            </div>
        </section>
    );
}