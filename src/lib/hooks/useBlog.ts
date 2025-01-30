import {useQuery} from "@tanstack/react-query";
import {useState} from "react";

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

const fetchPosts = async (page: number): Promise<Post[]> => {
    const res = await fetch(`/api/blog/posts?page=${page}`)
    if (!res.ok) throw new Error("Failed to fetch posts")
    return res.json()
}

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
