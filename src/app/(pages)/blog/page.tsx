"use client"
import {useGetBlogs} from "@/lib/hooks/useBlog";
import {SearchBar} from "@/app/(pages)/blog/create/SearchBar";
import {useState} from "react";
import PostComponent from "@/app/(pages)/blog/PostComponent";
import {useUpdatedSession} from "@/lib/hooks/useUpdateSession";
import Link from "next/link";
import {Plus} from "lucide-react";

export default function Page() {
    const {data: posts, isLoading} = useGetBlogs(1)
    const [searchQuery, setSearchQuery] = useState("")
    const {session, status} = useUpdatedSession()

    const filteredPosts =
        posts?.filter(
            (post) =>
                post.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.text.toLowerCase().includes(searchQuery.toLowerCase()),
        ) || []


    return (
        <div className={"w-full h-full flex flex-col items-center justify-center lg:mt-64 mt-8 lg:mb-10 container"}>
            <div className={'relative flex flex-row items-center w-full justify-center gap-2 md:gap-3 lg:gap-6'}>
                <SearchBar onSearch={setSearchQuery}/>
                {session?.user?.role === "ADMIN"
                    &&
                    <Link href={'/blog/create'}>
                        <div
                            className={'bg-white w-8 h-8 rounded-full flex items-center justify-center border p-[6px]'}>
                            <Plus/>
                        </div>
                    </Link>
                }
            </div>

            <div className={"flex flex-col items-center gap-8 text-white w-full container mx-2 mb-6"}>
                {isLoading
                    ? <p className={'text-black'}>Загрузка...</p>
                    :
                    filteredPosts.map((item: any, index: any) => (
                        <PostComponent data={item} key={index}/>
                    ))
                }
            </div>
        </div>
    )
}