"use server"
import * as React from 'react';
import {Button} from "@/components/ui/button";
import Image from "next/image";

export const First = () => {
    return (
        <section
            className="mx-auto w-full bg-secondary relative grid grid-rows-4 justify-center items-end justify-items-center gap-16 text-wite px-24 aspect-video">
            <h1 className={"text-5xl font-bold text-white z-10 row-span-2"}>Честная судебная экспертиза</h1>
            <h3 className={"text-2xl text-center text-white font-light z-10 whitespace-pre-line break-words self-center"}>
                АНО «Межрегиональный центр независимых исследований, экспертиз <br/>
                и права «Лучшее решение» <br/>
                предлагает услуги по проведению внесудебных исследований, <br/>
                судебных экспертиз и <br/>
                рецензированию судебных экспертиз.</h3>

            <Button className={"text-2xl z-10 font-light justify-self-start self-start relative mt-10 -left-[18%]"}
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