"use server"
import React from 'react';
import TitleHeader from "@/components/shared/TitleHeader";
import {ExpertiseDetailed} from "@/components/shared/expertiseDetailed/ExpertiseDetailed";
import {notFound} from "next/navigation";
import {ExpertiseType} from "@/lib/types/expertises";

//
// export async function generateStaticParams() {
//     const expertises = await fetch(process.env["NEXT_PUBLIC_URL"] + '/api/expertises/all', {method: "GET"}).then((res) => res.json())
//
//     return expertises.map((item: any) => ({
//         id: item.id.toString()
//     }))
// }

async function Page({params}: { params: { id: any } }) {
    // const id = params.id
    // const response = await fetch(process.env["NEXT_PUBLIC_URL"] + `/api/expertise/${id}`, {method: "GET"})
    // if (!response.ok) {
    //     notFound()
    // }
    //
    // const data = await response.json()

    const data: ExpertiseType = {
        id: 1,
        title: "Title",
        name: "Name",
        against: "Against",
        case: "Case",
        city: "City",
        address: "Address",
        questions: ["Quest1", "Quest2"],
        types: "Types",
        img: ""
    }

    return (
        <div className={"flex flex-col w-full relative overflow-hidden"}>
            <section className="mx-auto w-full bg-secondary relative">
                <div className={'container grid grid-rows-2 lg:pt-16 pb-6 px-6'}>
                    <TitleHeader title={'Экспертизы'} color={''} cClass={"row-start-2"}/>
                </div>
            </section>

            <ExpertiseDetailed expertise={data}/>

        </div>
    )
}

export default Page;