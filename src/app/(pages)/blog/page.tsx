"use client"
import {useGetBlogs} from "@/lib/hooks/useBlog";
import Image from "next/image";
import {list} from "@vercel/blob";
import Link from "next/link";

// TODO Типизировать это + useBlog.ts
export default function Page() {
    const {data, isLoading, isError} = useGetBlogs(1)
    console.log(data)


    return (
        <div className={"w-full h-full flex flex-col items-center justify-center mt-64"}>
            <h1>ТЕСТ</h1>

            <div className={"flex flex-col items-center gap-8 text-white w-1/2"}>
                {isLoading
                    ? <p>Загрузка...</p>
                    :
                    data.map((item: any, index: any) => (
                        <div className={"flex flex-col items-center w-full min-h-32 bg-secondary"} key={index}>
                            <h1 className={"font-black"}>{item.posts.heading}</h1>
                            <h6>{item.posts.text}</h6>
                            {item.posts.imgUrl &&
                                <Image
                                    src={"https://swbxrvsh7sbt6vxx.public.blob.vercel-storage.com/HronoLis-13UO5k6ioLDF0XIHtHyGNzfW3c6lIC.png"}
                                    alt={"None"} width={100} height={100}/>
                            }
                            {item.files &&
                                <Link href={item.files.fileUrl}>Ссылка на {item.files.fileName}</Link>
                            }
                        </div>
                    ))
                }
            </div>


        </div>
    );
}