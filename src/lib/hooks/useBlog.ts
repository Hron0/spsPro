import {useQuery} from "@tanstack/react-query";
import {useState} from "react";

interface Post {
    id: number
    text: string
    imageUrl: string | null
    createdAt: string
}

interface Files {
    id: number
    postId: number
    fileName: string
    fileUrl: string
}

interface FeedQueryResult {
    posts?: Post[]
    files?: Files[] | null
}

const POSTS_PER_PAGE = 10

//TODO Типизировать хуйню

const fetchPosts = async (page: number) => {
    const res = await fetch(`/api/blog/posts?page=${page}`)
    if (!res.ok) throw new Error("Failed to fetch posts")
    return res.json()
}

export const useGetBlogs = (page: number) => {
    return useQuery({
        queryKey: ["Posts", page],
        queryFn: async () => await fetchPosts(page)
    })
}
