"use client"
import { NextPage } from 'next'
import ExpertiseForm from "@/components/shared/expertiseDetailed/ExpertiseForm";

const CreatePage: NextPage = () => {

    return (
       <section className={'w-full h-full container flex items-center justify-center'}>
           <ExpertiseForm/>
       </section>
    )
}

export default CreatePage