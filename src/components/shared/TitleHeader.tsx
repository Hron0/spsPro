import React from 'react';
import Image from "next/image";
import {cn} from "@/lib/utils";

function TitleHeader({title, color}: {title: string, color?: string}) {
    return (
        <div className={cn(color=='orange' ? 'bg-black/20' : 'bg-black/40', "z-10 relative h-[100px] w-[480px]")}>
            <Image src={'/img/mainPage/columnn.png'}
                   alt={'Pic'}
                   width={84}
                   height={101}
                   className={"relative right-11 bottom-3"}/>

            <h1 className={"text-white text-4xl font-extralight relative -top-28 -right-8"}>{title}</h1>
        </div>
    );
}

export default TitleHeader;