import {useQuery} from "@tanstack/react-query";

export const useExpertisesList = () => {
    return useQuery({
        queryKey: ["expertisesAll"],
        queryFn: async () => {
            const res = await fetch(`/api/expertises/all`)
            return await res.json()
        },
    })
}

export const useExpertisesById = (id: string) => {
    return useQuery({
        queryKey: ["expertise", id],
        queryFn: async () => {
            const res = await fetch(`/api/expertise/${id}`)
            return await res.json()
        },
    })
}