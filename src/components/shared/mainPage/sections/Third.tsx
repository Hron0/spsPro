// @flow
import * as React from 'react';
import Image from "next/image";

type Props = {};
export const Third = (props: Props) => {
    return (
        <section
            className="mx-auto w-full bg-secondary relative grid grid-rows-3 justify-items-start items-center gap-16 px-16 py-8 text-wite aspect-video">
            <div className={"bg-black/40 z-10 relative h-[100px] w-[480px]"}>
                <Image src={'/img/mainPage/columnn.png'}
                       alt={'Pic'}
                       width={84}
                       height={101}
                       className={"relative right-11 bottom-3"}/>

                <h1 className={"text-white text-4xl font-light relative -top-28 -right-8"}>Чем мы можем помочь?</h1>
            </div>


            {/* Lol */}
            <div className={"row-span-2 grid grid-cols-3 justify-around px-8 gap-36 w-full z-10"}>

                <div className={"bg-black/40 border-accent border-2 px-6 py-10 flex flex-col items-center gap-12 justify-evenly"}>
                    <div className={"bg-accent aspect-square w-1/2"}></div>
                    <h1 className={"text-white font-light text-3xl text-center w-min"}>
                        Производство внесудебных исследований
                    </h1>
                </div>

                <div className={"bg-black/40 border-accent border-2 px-6 py-10 flex flex-col items-center gap-12 justify-evenly"}>
                    <div className={"bg-accent aspect-square w-1/2"}></div>
                    <h1 className={"text-white font-light text-3xl text-center w-min"}>
                        Производство судебных экспертиз
                    </h1>
                </div>

                <div className={"bg-black/40 border-accent border-2 px-6 py-10 flex flex-col items-center gap-12 justify-evenly"}>
                    <div className={"bg-accent aspect-square w-1/2"}></div>
                    <h1 className={"text-white font-light text-3xl text-center w-min"}>
                        Консультация и подготовка к процессу
                    </h1>
                </div>

            </div>



            {/* Background image Fill */}
            <Image
                src="/img/mainPage/bg22.png"
                fill={true}
                alt="Picture of the author"
                className={"opacity-80 z-0"}
            />
        </section>
    );
};