'use client'

import {DataTable} from "@/components/shared/expertiseDetailed/DataTableComps/DataTable";
import {columns} from "@/components/shared/expertiseDetailed/DataTableComps/columns";

type Props = {};

export function ExpertisesTable(props: Props) {
    const data = [
        {id: 1, title: 'Экспертиза 1'},
        {id: 2, title: 'Экспертиза 2'},
        {id: 3, title: 'Экспертиза 3'},
        {id: 4, title: 'Экспертиза 4'},
        {id: 5, title: 'Экспертиза 5'},
        {id: 6, title: 'Экспертиза 6'},
        {id: 3, title: 'Экспертиза 3'},
        {id: 4, title: 'Экспертиза 4'},
        {id: 5, title: 'Экспертиза 5'},
        {id: 6, title: 'Экспертиза 6'},
        {id: 7, title: 'Экспертиза 7'}
    ]

    return (
        <div className="container h-full py-10">
            <DataTable columns={columns} data={data}/>
        </div>
    );
}