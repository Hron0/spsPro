// @ts-nocheck
// Я не буду ебаться с типами для этого Автоплея на карусели мне похуй
'use client'
import * as React from 'react';
import Image from "next/image";
import TitleHeader from "@/components/shared/TitleHeader";
import {useIsMobile} from "@/lib/hooks/use-mobile";
import {Carousel, CarouselContent, CarouselItem} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"

export const Third = () => {
    const isMobile = useIsMobile()
    let delay = 4000

    const items = [
        {title: 'Производство внесудебных исследований'},
        {title: 'Производство судебных экспертиз'},
        {title: 'Консультация и подготовка к процессу'},
    ]

    return (
        <section
            className="w-full bg-secondary relative flex flex-col items-center gap-16 px-6 lg:px-16 py-4 lg:py-8 text-wite aspect-video">
            <TitleHeader title={'Чем мы можем помочь?'} color={''} className={"self-start"}/>


            {/* Lol */}
            <div
                className={"flex lg:px-8 gap-36 relative w-full z-10"}>

                <Carousel
                    plugins={[
                        Autoplay(
                            delay,
                        ),
                    ]}
                    opts={{
                        align: "start",
                        loop: true,
                    }}
                    className="w-full"
                >
                    <CarouselContent>
                        {items.map((item, index) => (
                            <CarouselItem key={index} className=" lg:basis-1/3">
                                <div
                                    className={"bg-black/40 w-min border-accent border-2 px-4 lg:px-6 py-6 lg:py-10 flex flex-col items-center gap-6 lg:gap-12 lg:justify-evenly"}>
                                    <div className={"bg-accent aspect-square w-2/3 lg:w-1/2"}></div>
                                    <h1 className={"text-white font-light text-lg lg:text-3xl text-center w-min"}>
                                        {item.title}
                                    </h1>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>


            </div>


            {/* Background image Fill */
            }
            <Image
                src="/img/mainPage/bg22.png"
                fill={true}
                alt="Picture of the author"
                className={"opacity-80 z-0"}
            />
        </section>
    )
        ;
};