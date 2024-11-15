import {type Metadata} from "next"
import {First} from "@/components/shared/mainPage/sections/First";
import {Second} from "@/components/shared/mainPage/sections/Second";
import {Third} from "@/components/shared/mainPage/sections/Third";
import Fourth from "@/components/shared/mainPage/sections/Fourth";
import Fifth from "@/components/shared/mainPage/sections/Fifth";
import Sixth from "@/components/shared/mainPage/sections/Sixth";
import Seventh from "@/components/shared/mainPage/sections/Seventh";

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
            <Fourth/>
            <Fifth/>
            <Sixth/>
            <Seventh/>
        </div>
    )
}
