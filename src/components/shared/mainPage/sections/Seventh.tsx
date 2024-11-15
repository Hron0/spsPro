import React from 'react';
import TitleHeader from "@/components/shared/TitleHeader";
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel"

const data = [
    {name: 'Суды общей юрисдикции.', img: '/img/mainPage/img3.png'},
    {name: 'Арбитражные суды.', img: '/img/mainPage/img4.png'},
    {name: 'МВД.', img: '/img/mainPage/img5.png'},
]

function Seventh() {
    return (
        <section
            className="mx-auto w-full bg-secondary relative flex flex-col items-start gap-10 text-wite px-16 py-10 ">
            <TitleHeader title={'Наши партнёры'}/>
            <div className={'relative w-full z-30'}>


                <Carousel className="w-full"
                          opts={{
                              align: 'start',
                              loop: true,
                          }}>
                    <CarouselContent className={""}>
                        {data.map((item, index) => (
                            <CarouselItem key={index} className={"basis-1/3 px-10"}>
                                <div className={"flex flex-col items-center justify-end gap-2"}>
                                    <div className={"relative h-[304px] w-full"}>
                                        <Image src={item.img}
                                               alt={"Суды общей юрисдикции"}
                                               fill={true}
                                        />
                                    </div>

                                    <h1 className={"text-white text-2xl font-bold text-center z-20"}>{item.name}</h1>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                </Carousel>

            </div>
            {/*<div className={"flex flex-row w-full gap-4 items-start justify-evenly"}>

                <div className={"flex flex-col items-center gap-2"}>
                    <Image src={'/img/mainPage/img4.png'}
                           alt={"Суды общей юрисдикции"}
                           width={327}
                           height={307}
                    />

                    <h1 className={"text-white text-2xl font-bold text-center"}>Суды общей юрисдикции</h1>
                </div>
                <div className={"flex flex-col items-center gap-2"}>
                    <Image src={'/img/mainPage/img5.png'}
                           alt={"Суды общей юрисдикции"}
                           width={514}
                           height={307}
                    />

                    <h1 className={"text-white text-2xl font-bold text-center"}>Суды общей юрисдикции</h1>
                </div>
            </div>*/}

            {/* Background image Fill */}
            <Image
                src="/img/mainPage/bg3.png"
                fill={true}
                alt="Picture of the author"
                className={"opacity-80 z-0"}
            />
        </section>
    );
}

export default Seventh;