'use client'
import React from 'react';
import TitleHeader from "@/components/shared/TitleHeader";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {ExpertiseType} from "@/lib/types/expertises";
import {ExpertiseDetailed} from "@/components/shared/expertiseDetailed/ExpertiseDetailed";
import {ExpertisesTable} from "@/components/shared/expertiseDetailed/ExpertisesTable";
import {ExpertiseSkel} from "@/components/shared/expertiseDetailed/ExpertiseSkel";
import {useExpertisesById} from "@/lib/hooks/useExpertises";

function Page({params}: { params: { id: string } }) {
    const id = params.id

    const {data, isLoading} = useExpertisesById(id)
    console.log(data)
    return (
        <div className={"flex flex-col w-full relative overflow-hidden"}>
            <section className="mx-auto w-full bg-secondary relative">
                <div className={'container grid grid-rows-2 pt-16 pb-6'}>
                    <TitleHeader title={'Экспертизы'} color={''} className={"row-start-2"}/>
                </div>
            </section>

            {/*       ОКНО ВЫБРАННОЙ ЭКСПЕРТИЗЫ      */}
            <section className={'container py-7 px-16 flex flex-row items-start gap-16 relative overflow-y-hidden'}>
                <div className={'w-[452px] relative'}>
                    <AspectRatio ratio={9 / 16} className={""}>
                        <div className={'h-full w-full bg-secondary'}></div>
                    </AspectRatio>
                </div>

                <div className={'flex flex-col w-full h-full relative'}>
                    {isLoading
                        ? <ExpertiseSkel/>
                        : <ExpertiseDetailed expertise={data}/>
                    }


                    {/* Кнопка разворота */}
                    <div className={'absolute bottom-2 right-1/2'}>
                        <span className={'text-base font-extralight text-blue-400 underline'}>Развернуть</span>
                    </div>
                </div>
            </section>

            {/*            <section className={'mx-auto w-full bg-secondary relative'}>
                <div className={'container flex items-center py-16'}>
                    <TitleHeader title={'Все файлы'} color={''} className={"row-start-2"}/>
                </div>
            </section>
            <section className={'relative'}>
                <ExpertisesTable/>
            </section>*/}
        </div>
    )
}

export default Page;