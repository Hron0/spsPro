'use client'
import React from 'react';
import TitleHeader from "@/components/shared/TitleHeader";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import {ExpertiseType} from "@/lib/types/expertises";
import {ExpertiseDetailed} from "@/components/shared/expertiseDetailed/ExpertiseDetailed";
import {ExpertisesTable} from "@/components/shared/expertiseDetailed/ExpertisesTable";

function Page({params}: { params: { id: string } }) {
    const id = params.id
    const Items: ExpertiseType[] = [
        {
            id: 1,
            title: 'Землеустроительная экспертиза',
            name: 'Михаил Павлович Иванов',
            against: 'АО ТБанк',
            case: '000000010000-1111000202',
            city: 'Москва',
            address: 'Московская область. Московский район. Город москва, ул. Московская, д. 10',
            questions: ['Вопрос вопрос текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст', 'Вопрос вопрос текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст'],
            types: 'Вид экспертизы Вид Вииид',
            img: ''
        }
    ]

/*    const useTodos = (id: string) => {
        return useQuery({
            queryKey: ["todos", id],
            queryFn: async () => {
                const res = await fetch(`/api/expertise/${id}`)
                const expertise = await res.json()
                return expertise
            },
        })
    }

    const {data, isLoading} = useTodos(id)*/

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
                    <ExpertiseDetailed expertise={Items[0]}/>

                    {/* Кнопка разворота */}
                    <div className={'absolute bottom-2 right-1/2'}>
                        <span className={'text-base font-extralight text-blue-400 underline'}>Развернуть</span>
                    </div>
                </div>
            </section>

            <section className={'mx-auto w-full bg-secondary relative'}>
                <div className={'container flex items-center py-16'}>
                    <TitleHeader title={'Экспертизы'} color={''} className={"row-start-2"}/>
                </div>
            </section>
            <section className={'relative'}>
                <ExpertisesTable />
            </section>
        </div>
    )
}

export default Page;