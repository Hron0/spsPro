"use client"
import {useGetBlogs} from "@/lib/hooks/useBlog";
import {SearchBar} from "@/app/(pages)/blog/create/SearchBar";
import {useState} from "react";
import PostComponent from "@/app/(pages)/blog/PostComponent";
import {useUpdatedSession} from "@/lib/hooks/useUpdateSession";
import Link from "next/link";
import {Plus} from "lucide-react";
import {isEmptyArray} from "is-what";
import {ScrollArea} from "@/components/ui/scroll-area";

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

    if (!isLoading && isEmptyArray(posts)) {
        return (
            <div className={'w-full h-full flex flex-row gap-6 items-center justify-center lg:mt-64 mt-8 mb-4 lg:mb-10 container'}>
                <p className={'text-black'}>Нет записей.</p>
                {session?.user?.role === "ADMIN"
                    &&
                    <Link href={"/blog/create"}>
                        <div className="group relative overflow-hidden bg-white rounded-full border transition-all duration-300 hover:border-primary hover:shadow-md">
                            <div className="flex items-center gap-3 justify-center p-[6px] min-w-8 h-8">
                                <Plus className="transition-transform duration-300 group-hover:rotate-90" />
                                <span className="transition-colors duration-300 group-hover:text-primary">Создать</span>
                            </div>
                            <div className="absolute inset-0 bg-primary/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                        </div>
                    </Link>
                }
            </div>
        )
    }

    return (
        <div className={"w-full h-full flex flex-col items-center justify-center lg:mt-64 mt-8 lg:mb-10 container"}>
            <div className={'relative flex flex-row items-center w-full justify-center gap-2 md:gap-3 lg:gap-6'}>
                <SearchBar onSearch={setSearchQuery}/>
                {session?.user?.role === "ADMIN"
                    &&
                    <Link href={"/blog/create"}>
                        <div className="group relative overflow-hidden bg-white rounded-full border w-8 h-8 transition-all duration-300 hover:border-primary hover:shadow-md">
                            <div className="flex items-center justify-center w-full h-full">
                                <Plus className="transition-transform duration-300 group-hover:rotate-90 group-hover:text-primary" />
                            </div>
                            <div className="absolute inset-0 bg-primary/10 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-bottom" />
                        </div>
                    </Link>
                }
            </div>

            <div className={"flex flex-col items-center gap-8 text-white w-full container mx-2 mb-6"}>
                <ScrollArea className={"w-full h-[95vh]"}>
                {isLoading ? (
                    <p className={"text-black"}>Загрузка...</p>
                ) : isEmptyArray(filteredPosts) ? (
                    <p className={"text-black"}>Нет результатов поиска.</p>
                ) : (
                    filteredPosts.map((item: any, index: any) => <PostComponent data={item} key={index}/>)
                )}
                </ScrollArea>
            </div>
        </div>
    )
}