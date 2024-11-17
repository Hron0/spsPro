"use server"
import * as React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";

export const First = () => {
    return (
        <section
            className="mx-auto w-full bg-secondary relative flex flex-col lg:grid lg:grid-rows-4 md:justify-start lg:justify-center items-center justify-items-center text-white aspect-video gap-2 lg:gap-16 pt-4 pb-8 px-4 md:px-24">

            <div className={"aspect-square w-1/3 relative z-40 bg-background rounded-full lg:hidden mb-2 md:mb-6"}>
                <Image
                    src={'/img/logo.png'}
                    // width={115}
                    // height={100}
                    fill={true}
                    alt={"Логотип"}
                />
            </div>


            <h1 className={"text-3xl lg:text-5xl font-bold z-10 lg:row-span-2 text-center lg:self-end"}>Честная судебная
                экспертиза</h1>
            <h3 className={"md:text-xl lg:text-2xl text-center font-light z-10 whitespace-pre-line break-words self-center"}>
                АНО «Межрегиональный центр независимых исследований, экспертиз и права «Лучшее решение» предлагает
                услуги по проведению внесудебных исследований,
                судебных экспертиз и рецензированию судебных экспертиз.</h3>

            <Button className={"text-2xl z-10 font-light justify-self-start self-start relative mt-10 hidden lg:flex"}
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