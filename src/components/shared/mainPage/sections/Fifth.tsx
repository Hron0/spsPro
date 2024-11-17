import React from 'react';
import Image from "next/image";
import TitleHeader from "@/components/shared/TitleHeader";
import {Separator} from "@/components/ui/separator";
import {AspectRatio} from "@/components/ui/aspect-ratio";

function Fifth() {
    return (
        <section
            className="mx-auto w-full bg-secondary relative flex flex-row items-start gap-8 text-wite px-6 md:px-10 py-4 md:py-8">
            <div className={"flex flex-col items-start gap-6 lg:gap-12 md:py-6 w-full lg:w-auto"}>
                <TitleHeader title={'Нас легко найти'} color={''} className={"self-start"}/>
                <div className={"flex flex-col-reverse gap-3 md:gap-0 md:flex-row items-center w-full relative"}>
                    <div className={"flex flex-col gap-2 lg:gap-6 w-full md:w-1/2 lg:w-2/3"}>
                        <p className={"text-white text-lg md:text-xl lg:text-2xl font-light z-10 md:w-2/3 lg:w-auto"}>
                            Московская область,
                            г. Солнечногорск,
                            мкр. Рекинцо-2, д.3 п.54
                            141508
                        </p>

                        <Separator className={"w-full md:w-2/3"}/>

                        <p className={"text-white text-lg md:text-xl lg:text-2xl font-light z-10 md:w-2/3 lg:w-auto"}>
                            г.Санкт-Петербург,
                            ул.Чапаева, д.15 БЦ
                            «Сенатор», 4 этаж, пом.423
                            197101
                        </p>
                    </div>
                    <div className={"w-full md:w-1/2 block lg:hidden"}>
                        <AspectRatio ratio={79 / 59}>
                            <Image
                                src={'/img/mainPage/img_map.png'}
                                alt={'Map'}
                                fill={true}
                                className={"block lg:block"}/>
                        </AspectRatio>
                    </div>


                </div>


            </div>

            <div className={"w-full hidden lg:block"}>
                <AspectRatio ratio={79 / 59}>
                    <Image
                        src={'/img/mainPage/img_map.png'}
                        alt={'Map'}
                        fill={true}
                        className={"hidden md:block"}/>
                </AspectRatio>
            </div>
        </section>
    );
}

export default Fifth;