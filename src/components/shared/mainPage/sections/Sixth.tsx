"use server"
import React from 'react';
import Image from "next/image";
import Link from "next/link";
import {Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious} from "@/components/ui/carousel";
import {getAllFilesSync} from "get-all-files";
import TitleHeader from "@/components/shared/TitleHeader";

// TODO: Закиунть хуйню в GenerateStaticParams

export default async function Sixth() {
    const docs = getAllFilesSync(`public/Docs/mainPage/`).toArray();
    const images = getAllFilesSync(`public/Docs/img/`).toArray();
    for (let i = 0; i < docs.length; i++) {
        docs[i] = docs[i].slice(7);
    }
    for (let i = 0; i < images.length; i++) {
        images[i] = images[i].slice(6);
        images[i] = images[i].replace('\\', '')
    }
    const docsImg = docs.map((item, index) => {
        return {
            doc: item,
            img: images[index]
        }
    })


    return (
        <section className="mx-auto w-full relative flex flex-col items-start gap-2 pt-8 px-24">
            <TitleHeader title={'Официальные документы'} color={'orange'}/>
            <div className={"relative w-full"}>

                <Carousel
                    opts={{
                        align: "start",
                    }}
                    className="w-full"
                >
                    <CarouselContent className={"pl-10"}>
                        {docsImg.map((doc, index) => (
                            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/4">
                                <div className="p-1">
                                    <a href={doc.doc} target="_blank">
                                        <Image src={doc.img}
                                               alt={'Dog'}
                                               width={262}
                                               height={354}/>
                                    </a>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                </Carousel>
            </div>
        </section>
    );
}

