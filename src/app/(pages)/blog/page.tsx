"use client"
import {useGetBlogs} from "@/lib/hooks/useBlog";
import Image from "next/image";
import Link from "next/link";
import {SearchBar} from "@/app/(pages)/blog/create/SearchBar";
import {useState} from "react";

export default function Page() {
    const {data: posts, isLoading, isError} = useGetBlogs(1)
    const [searchQuery, setSearchQuery] = useState("")

    const filteredPosts =
        posts?.filter(
            (post) =>
                post.heading.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.text.toLowerCase().includes(searchQuery.toLowerCase()),
        ) || []


    return (
        <div className={"w-full h-full flex flex-col items-center justify-center mt-64 mb-10"}>
            <h1>ТЕСТ</h1>
            <SearchBar onSearch={setSearchQuery}/>

            <div className={"flex flex-col items-center gap-8 text-white w-1/2"}>
                {isLoading
                    ? <p className={'text-black'}>Загрузка...</p>
                    :
                    filteredPosts.map((item: any, index: any) => (
                        <div className={"flex flex-col items-center w-full min-h-32 bg-secondary px-6 py-3"}
                             key={index}>
                            <h1 className={"font-black"}>{item.heading}</h1>
                            <h6 className={'break-all'}>{item.text}</h6>
                            {item.imgUrl &&
                                <Image
                                    src={item.imgUrl}
                                    alt={"None"} width={100} height={100}/>
                            }
                            {item.files &&
                                item.files.map((file: any, index: number) => (
                                    <Link href={file.fileUrl} key={index}>Ссылка на {decodeURIComponent(file.fileName)}</Link>
                                ))
                            }
                        </div>
                    ))
                }
            </div>


        </div>
    );
}