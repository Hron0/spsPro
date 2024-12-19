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
            {isLoading
                ? <ExpertiseSkel/>
                : <ExpertiseDetailed expertise={data}/>
            }

        </div>
    )
}

export default Page;