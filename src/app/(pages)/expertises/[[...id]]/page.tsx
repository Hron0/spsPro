'use server'
import React from 'react';
import {Badge} from "@/components/ui/badge";

async function Page({params}: { params: Promise<{ id: string }> }) {
    const id = (await params).id
    console.log(id)
    return (
        <div className={'py-[20%]'}>
                {id
                    ? <Badge variant={"secondary"}>ID == {id}</Badge>
                    : <Badge variant={"destructive"}>Нет инфы Dog</Badge>
                }
        </div>
    );
}

export default Page;