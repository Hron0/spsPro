import React from 'react';
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Button} from "@/components/ui/button";
import {FileText} from "lucide-react";
import Image from "next/image";

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

const MyComponent = ({data}: {data: Post}) => {
    return (
        <Card className="w-[98%] relative mx-2">
            <CardHeader>
                <CardTitle className={'lg:text-2xl'}>{data.heading}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {data.imgUrl && (
                    <div className="relative w-full aspect-[16/9] overflow-hidden rounded-md">
                        <Image src={data.imgUrl || "/placeholder.svg"} alt={data.heading} fill className="object-cover"
                               priority/>
                    </div>
                )}
                <div className="space-y-4 text-black text-wrap break-words lg:text-xl">
                    {data.text.split("\n").map((paragraph: string, index: number) => (
                        <h2 key={index} className={'indent-4 lg:indent-12'}>{paragraph}</h2>
                    ))}
                </div>
                {data.files && data.files.length > 0 && (
                    <div className="space-y-2 pt-4 border-t">
                        {data.files.map((file: any, index: number) => (
                            <Button key={index} variant="outline" className="w-full justify-start gap-2" asChild>
                                <a href={file.fileUrl} target="_blank" rel="noopener noreferrer">
                                    <FileText className="h-4 w-4"/>
                                    {file.fileName}
                                </a>
                            </Button>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default MyComponent;
