import {useMutation, useQuery, useQueryClient} from "@tanstack/react-query";
import {toast} from "sonner";

interface Post {
    id: number
    heading: string
    text: string
    imgUrl?: string
    createdAt: string
    files?: Array<{
        id: number
        fileUrl: string
        fileName: string
    }>
}

const POSTS_PER_PAGE = 10

//TODO Типизировать хуйню

export const useGetBlogs = (page: number) => {
    return useQuery<Post[]>({
        queryKey: ["Posts", page],
        queryFn: async () => {
            const res = await fetch(`/api/blog/posts?page=${page}`)
            return res.json()
        },
        select: (data) => {
            return data.map((post) => ({
                ...post,
                files: post.files?.map((file) => ({
                    ...file,
                    fileName: decodeURI(file.fileName)
                }))
            }))
        }
    })
}

export const getPost = async (id: string) => {
    const res = await fetch(`/api/blog/get/${id}`, {
        method: "GET"
    })
    return res.json()
}

export const useDeletePost = (id: number) => {
    const queryClient = useQueryClient()

    return useMutation({
        mutationFn: async () => {
            const response = await fetch(`/api/blog/delete/${id}`, {
                method: "DELETE",
            })
            if (!response.ok) throw new Error("Failed to delete post")
            return response.json()
        },
        onSuccess: () => {
            void queryClient.invalidateQueries({ queryKey: ["Posts", 1] })
            toast.success("Запись удалена")
        },
        onError: () => {
            toast.error("Что-то пошло не так...")
        },
    })
}