import {ExpertiseType} from "@/lib/types/expertises";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import React from "react";
import {Skeleton} from "@/components/ui/skeleton";

type Props = {
    expertise?: ExpertiseType
};

export const ExpertiseDetailed = ({expertise}: Props) => {
    return (

        <section className={'container py-7 px-16 flex flex-row items-start gap-16 relative overflow-y-hidden'}>
            <div className={'w-[452px] relative'}>
                <AspectRatio ratio={9 / 16} className={""}>
                    <Skeleton className={'h-full w-full'}/>
                </AspectRatio>
                <h1 className={'text-xl font-extralight text-center break-words absolute top-20 w-full px-5'}>{expertise?.title}</h1>
            </div>

            <div className={'flex flex-col w-full h-full relative'}>
                <div
                    className={'flex flex-col items-center justify-start w-full gap-2 relative overflow-y-hidden h-[95%]'}>
                    <h1 className={'text-center text-3xl font-extralight'}>Арбитражный суд</h1>
                    <div className={'flex flex-col gap-1 w-full'}>
                        <div className={'grid grid-cols-3 justify-items-center'}>
                            <span className={'text-base font-extralight justify-self-start'}>{expertise?.name}</span>
                            <span className={'text-base font-extralight'}>против</span>
                            <span className={'text-base font-extralight justify-self-end'}>{expertise?.against}</span>
                        </div>
                        <h1 className={'text-xl font-black uppercase'}>АРБИТРАЖНЫЙ СУД МОСКОВСКОЙ ОБЛАСТИ</h1>
                        <h3 className={'text-base font-extralight'}>Дело N{expertise?.case}</h3>
                    </div>
                    <div className={'flex flex-col gap-4 w-full'}>
                        <span className={'flex flex-col gap-1'}>
                            <h1 className={'text-xl font-black uppercase'}>Город</h1>
                            <h3 className={'text-base font-extralight'}>{expertise?.city}</h3>
                        </span>
                        <span className={'flex flex-col gap-1'}>
                            <h1 className={'text-xl font-black uppercase'}>Адрес</h1>
                            <h3 className={'text-base font-extralight'}>{expertise?.address}</h3>
                        </span>
                    </div>
                    <div className={'flex flex-col w-full'}>
                        <h1 className={'text-xl font-black uppercase'}>Вопросы на экспертизу</h1>
                        <ul className={'text-base font-extralight'}>
                            {/*                    {expertise?.questions.map((item, index) => (
                        <li key={index} className={'list-decimal list-inside'}>
                            {item}
                        </li>
                    ))}*/}
                            {expertise?.questions}
                        </ul>
                    </div>
                    <div className={'flex flex-col gap-4 w-full'}>
                        <h1 className={'text-xl font-black uppercase'}>Вид экспертизы</h1>
                        <h3 className={'text-base font-extralight'}>{expertise?.types}</h3>
                    </div>
                </div>
                {/* Кнопка разворота */}
                <div className={'absolute bottom-2 right-1/2'}>
                    <span className={'text-base font-extralight text-blue-400 underline'}>Развернуть</span>
                </div>
            </div>
        </section>
    );
};