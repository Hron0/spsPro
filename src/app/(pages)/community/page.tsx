import {First} from "@/components/shared/staticSections/community/First";
import Second from "@/components/shared/staticSections/community/Second";
import {Third} from "@/components/shared/staticSections/community/Third";
import Fourth from "@/components/shared/staticSections/community/Fourth";
import {Fifth} from "@/components/shared/staticSections/community/Fifth";
import Sixth from "@/components/shared/staticSections/community/Sixth";
import {Seventh} from "@/components/shared/staticSections/community/Seventh";

export default function Page() {
    return (
        <div className={"flex flex-col w-full overflow-hidden"}>
            <First />
            <Second />
            <Third />
            <Fourth />
            <Fifth />
            <Sixth />
            <Seventh />
        </div>
    );
}