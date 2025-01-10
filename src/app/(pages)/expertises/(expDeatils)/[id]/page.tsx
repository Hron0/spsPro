"use server"
import React from 'react';
import TitleHeader from "@/components/shared/TitleHeader";
import {ExpertiseDetailed} from "@/components/shared/expertiseDetailed/ExpertiseDetailed";


export async function generateStaticParams() {
    const expertises = await fetch('http://localhost:3000/api/expertises/all', {method: "GET"}).then((res) => res.json())

    return expertises.map((item: any) => ({
        id: item.id
    }))
}

async function Page({params}: { params: { id: any } }) {
    const id = params.id

    const data = await fetch(`http://localhost:3000/api/expertise/${id}`, {method: "GET"}).then((res) => res.json())

    return (
        <div className={"flex flex-col w-full relative overflow-hidden"}>
            <section className="mx-auto w-full bg-secondary relative">
                <div className={'container grid grid-rows-2 pt-16 pb-6'}>
                    <TitleHeader title={'Экспертизы'} color={''} cClass={"row-start-2"}/>
                </div>
            </section>

            <ExpertiseDetailed expertise={data}/>

        </div>
    )
}

export default Page;