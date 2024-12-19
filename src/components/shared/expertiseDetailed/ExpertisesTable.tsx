'use client'

import {DataTable} from "@/components/shared/expertiseDetailed/DataTableComps/DataTable";
import {columns} from "@/components/shared/expertiseDetailed/DataTableComps/columns";
import {useExpertisesList} from "@/lib/hooks/useExpertises";
import {ExpertisesTableSkeleton} from "@/components/shared/skeletons/ExpertisesTableSkeleton";


export function ExpertisesTable() {
    const {data, isLoading} = useExpertisesList()


    console.log(data)

    return (
        <div className="container h-full py-10">
            {isLoading
                ? <ExpertisesTableSkeleton/>
                : <DataTable columns={columns} data={data}/>
            }

        </div>
    );
}