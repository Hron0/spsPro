"use client"
import { NextPage } from 'next'
import ExpertiseForm from "@/components/shared/expertiseDetailed/ExpertiseForm";

const CreatePage: NextPage = () => {

    return (
       <section className={'w-full h-full container flex items-center justify-center pt-24 mt-40 pb-10'}>
           <ExpertiseForm/>
       </section>
    )
}

export default CreatePage