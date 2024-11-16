// @ts-nocheck
// Бля я не буду ебаться с типами для этого Автоплая на карусели мне похуй
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
            className="mx-auto w-full bg-secondary relative grid grid-rows-3 justify-items-start items-center gap-16 px-16 py-8 text-wite aspect-video">
            <TitleHeader title={'Чем мы можем помочь?'} color={''}/>


            {/* Lol */}
            <div
                className={"row-span-2 flex lg:grid lg:grid-cols-3 justify-self-center justify-around lg:px-8 gap-36 relative w-[30rem] sm:w-[50rem] lg:w-full z-10"}>

                {isMobile
                    ? <Carousel
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
                                <CarouselItem key={index} className="">
                                    <div
                                        className={"bg-black/40 w-min border-accent border-2 px-6 py-10 flex flex-col items-center gap-12 lg:justify-evenly"}>
                                        <div className={"bg-accent aspect-square w-1/2"}></div>
                                        <h1 className={"text-white font-light text-3xl text-center w-min"}>
                                            {item.title}
                                        </h1>
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                    </Carousel>
                    :
                    <>
                        {items.map((item, index) => (
                            <div key={index}
                                 className={"bg-black/40 border-accent border-2 px-6 py-10 flex flex-col items-center gap-12 justify-evenly"}>
                                <div className={"bg-accent aspect-square w-1/2"}></div>
                                <h1 className={"text-white font-light text-3xl text-center w-min"}>
                                    {item.title}
                                </h1>
                            </div>
                        ))}
                    </>
                }
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