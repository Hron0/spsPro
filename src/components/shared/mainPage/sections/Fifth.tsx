import React from 'react';
import Image from "next/image";
import TitleHeader from "@/components/shared/TitleHeader";

function Fifth() {
    return (
        <section
            className="mx-auto w-full bg-secondary relative flex flex-row items-start gap-8 text-wite px-10 py-8">
            <div className={"flex flex-col items-start gap-12 py-6"}>
                <TitleHeader title={'Нас легко найти'} color={''}/>

                <p className={"text-white text-2xl font-light"}>
                    Московская область, <br/>
                    г. Солнечногорск,<br/>
                    мкр. Рекинцо-2, д.3 п.54<br/>
                    141508
                </p>

                <p className={"text-white text-2xl font-light"}>
                    г.Санкт-Петербург,<br/>
                    ул.Чапаева, д.15 БЦ<br/>
                    «Сенатор», 4 этаж, пом.423<br/>
                    197101
                </p>
            </div>

            <Image
                src={'/img/mainPage/img_map.png'}
                alt={'Map'}
                width={701}
                height={599}/>

        </section>
    );
}

export default Fifth;