"use server"
import * as React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";

export const First = () => {
    return (
        <section
            className="mx-auto w-full bg-secondary relative grid grid-rows-3 lg:grid-rows-4 justify-center items-end justify-items-center gap-16 px-4 text-white lg:px-24 aspect-video">
            <h1 className={"text-3xl lg:text-5xl font-bold z-10 lg:row-span-2 text-center"}>Честная судебная экспертиза</h1>
            <h3 className={"text-2xl text-center font-light z-10 whitespace-pre-line break-words self-center"}>
                АНО «Межрегиональный центр независимых исследований, экспертиз и права «Лучшее решение» предлагает
                услуги по проведению внесудебных исследований,
                судебных экспертиз и рецензированию судебных экспертиз.</h3>

            <Button className={"text-2xl z-10 font-light justify-self-start self-start relative mt-10"}
                    variant={"default"}
                    size={"lg"}
            >
                Связаться с нами
            </Button>

            {/* Background image Fill */}
            <Image
                src="/img/mainPage/bg1.png"
                fill={true}
                alt="Picture of the author"
                className={"opacity-80 z-0"}
            />
        </section>
    );
};