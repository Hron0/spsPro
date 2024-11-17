import React from 'react';
import Image from "next/image";
import {cn} from "@/lib/utils";

function TitleHeader({title, color, className}: { title: string, color?: string, className?: string }) {
    return (
        <div
            className={cn(color == 'orange' ? 'bg-black/20' : 'bg-black/40', "flex flex-row items-center justify-start z-10 relative h-16 lg:h-[100px] w-full md:w-[480px]", className)}>
            <div className={"relative h-full w-[40px] lg:w-[50px] z-20 right-4 lg:right-6"}>
                <Image src={'/img/mainPage/column.png'}
                       alt={'Pic'}
                       fill={true}
                       />
            </div>

            <h1 className={"text-white text-xl md:text-3xl font-extralight"}>{title}</h1>
        </div>
    );
}

export default TitleHeader;