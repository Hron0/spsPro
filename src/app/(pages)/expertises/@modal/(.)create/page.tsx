"use client"
import { NextPage } from 'next'
import Modal from '@/components/shared/Modal'
import CreatePage from "@/app/(pages)/expertises/create/page";


const Page: NextPage = () => {

    return (
        <Modal>
            <CreatePage />
        </Modal>
    )
}

export default Page