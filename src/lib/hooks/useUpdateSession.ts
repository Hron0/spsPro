'use client'

import { useSession } from "next-auth/react"
import { useEffect } from "react"
import {usePathname, useSearchParams} from "next/navigation"

export function useUpdatedSession() {
    const { data: session, status, update } = useSession()
    const pathname = usePathname()
    const searchParams = useSearchParams()

    useEffect(() => {
        const updateSession = async () => {
            await update()
        }

        // Update session on mount and when route changes
        void updateSession()
    }, [pathname, searchParams])

    return { session, status }
}

