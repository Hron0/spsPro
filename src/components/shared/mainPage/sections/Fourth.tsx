'use server'
import React from 'react';
import Image from "next/image";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Separator} from "@/components/ui/separator";
import {AspectRatio} from "@/components/ui/aspect-ratio";

function Fourth() {
    const list = [
        {name: 'Строительно-техническая экспертиза'},
        {name: 'Почерковедческая экспертиза'},
        {name: 'Техническая экспертиза документов'},
        {name: 'Пожарно-техническая экспертиза'},
        {name: 'Финансово-экономическая экспертиза'},
        {name: 'Бухгалтерская экспертиза'},
        {name: 'Товароведческая экспертиза'},
        {name: 'Лингвистическая экспертиза'},
        {name: 'Землеустроительная экспертиза'},
        {name: 'Рецензирование заключений экспертов'},
    ]

    return (
        <section
            className="mx-auto w-full relative flex flex-row justify-start md:justify-center items-start gap-2 py-5 md:py-11 px-3 md:px-10">
            <div className={"relative flex items-start justify-start bg-romb bg-center bg-cover w-full md:w-auto"}>

                <ScrollArea className={"text-black text-2xl lg:text-3xl font-light md:px-6 text-start w-full h-[434px]"}>
                    {list.map((item, index) => (
                        <>
                            <p key={index} className={""}>- {item.name};</p>
                            <Separator className={"my-2"}/>
                        </>
                    ))}
                </ScrollArea>

                {/* Оранжевая плашка/палка */}
                <div className={"absolute w-[4px] h-[150px] bg-accent rounded-2xl right-0 top-12"}></div>

            </div>

            <div className={"relative w-[330px] hidden md:block"}>
                <AspectRatio ratio={33 / 43} className={"mr-10 relative"}>
                    <Image src={"/img/mainPage/img2.png"}
                           alt={'Pic'}
                           fill={true}
                           className={"object-cover"}
                    />
                </AspectRatio>
            </div>

        </section>
    );
}

export default Fourth;