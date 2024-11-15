import {type Metadata} from "next"
import {First} from "@/components/shared/mainPage/sections/First";
import {Second} from "@/components/shared/mainPage/sections/Second";
import {Third} from "@/components/shared/mainPage/sections/Third";

export const metadata: Metadata = {
    title: "Home",
    description: "hey there, this is a Home Page",
}

export default async function HomePage() {
    return (
        <div className={"flex flex-col container"}>
            <First/>
            <Second/>
            <Third/>
        </div>
    )
}
