"use client"
import { NextPage } from 'next'
import { LoginPage } from '../../auth/Login'
import { RegisterPage } from '../../auth/Register'
import Modal from '@/components/shared/Modal'

interface Props {
    searchParams?: {
        type: string
    }
}

const Page: NextPage<Props> = ({ searchParams }) => {
    const type = searchParams?.type || 'login'

    return (
        <Modal>
            <div className="my-8">
                {type == 'registration' && <RegisterPage />}
                {type == 'login' && <LoginPage />}
            </div>
        </Modal>
    )
}

export default Page