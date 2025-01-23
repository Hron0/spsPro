"use client"
import {useGetBlogs} from "@/lib/hooks/useBlog";
import Image from "next/image";
import {list} from "@vercel/blob";
import Link from "next/link";

// TODO Типизировать это + useBlog.ts
export default function Page() {
    const {data, isLoading, isError} = useGetBlogs(1)

    return (
        <div className={"w-full h-full flex flex-col items-center justify-center mt-64"}>
            <h1>ТЕСТ</h1>

            <div className={"flex flex-col items-center gap-8 text-white w-1/2"}>
                {isLoading
                    ? <p>Загрузка...</p>
                    :
                    data.map((item: any, index: any) => (
                        <div className={"flex flex-col items-center w-full min-h-32 bg-secondary"} key={index}>
                            <h1 className={"font-black"}>{item.heading}</h1>
                            <h6>{item.text}</h6>
                            {item.imgUrl &&
                                <Image
                                    src={item.imgUrl}
                                    alt={"None"} width={100} height={100}/>
                            }
                            {item.files &&
                                item.files.map((file: any) => (
                                    <Link href={file.fileUrl}>Ссылка на {file.fileName}</Link>
                                ))
                            }
                        </div>
                    ))
                }
            </div>


        </div>
    );
}