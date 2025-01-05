import TitleHeader from "@/components/shared/TitleHeader";
import Image from "next/image";
import * as React from "react";

export default function Fourth() {
    return (
        <section
            className={'container relative px-6 lg:px-16 py-4 lg:py-8  h-min text-black'}>
            <div
                className={"flex flex-col items-start relative w-full h-full"}>
                <TitleHeader title={'Членство в профессиональном сообществе'} color={'orange'} cClass={'md:w-fit pr-8'}/>

                <div
                    className={"relative w-full flex flex-col gap-16 py-6 md:py-16 md:pr-24 lg:pr-[22%] items-start justify-start text-black text-4xl font-extralight"}>

                    <h1>Быть участником сообщества, в котором
                        состоят лучшие юристы, врачи, учителя,
                        строители и другие профессионалы – это
                        привилегия!
                    </h1>
                    <h1>Это реальный обмен опытом, расширение
                        партнерской и клиентской базы, появление
                        новых деловых связей, участие в деловых и
                        учебных мероприятиях
                    </h1>

                    <Image src={'/img/mainPage/rectangle.png'} alt={'.'} fill className={'object-contain'}/>
                </div>
            </div>
        </section>
    );
}