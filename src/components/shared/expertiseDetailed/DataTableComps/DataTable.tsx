"use client"
import * as React from "react"
import {
    ColumnDef,
    ColumnFiltersState,
    flexRender,
    getCoreRowModel,
    getFilteredRowModel,
    useReactTable,
    getPaginationRowModel
} from "@tanstack/react-table"

import {Button} from "@/components/ui/button"
import {Input} from "@/components/ui/input"

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Link from "next/link";
import DataPickerExpertise from "@/components/shared/expertiseDetailed/DataTableComps/DataPickerExpertise";
import {format} from "date-fns";
import {useUpdatedSession} from "@/lib/hooks/useUpdateSession";

interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
}

export function DataTable<TData, TValue>({columns, data}: DataTableProps<TData, TValue>) {
    const {session, status} = useUpdatedSession()
    const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
        []
    )
    const [date, setDate] = React.useState<any>()
    const handleDateFilter = (date: any) => {
        table.getColumn("date")?.setFilterValue(format(date, "dd-MM-yyyy"))
        setDate(date)
    }

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            columnFilters,
        },

    })

    return (
        <div className={'w-full'}>
            <div className={'grid grid-cols-3 items-center'}>
                <div className="flex items-center py-4 justify-self-start">
                    <Input
                        placeholder="Поиск по названию"
                        value={(table.getColumn("title")?.getFilterValue() as string) ?? ""}
                        onChange={(event) =>
                            table.getColumn("title")?.setFilterValue(event.target.value)
                        }
                        className="max-w-sm text-lg"
                    />
                </div>

                <div className={'justify-self-center'}>
                    <DataPickerExpertise date={date} setDate={handleDateFilter}/>
                </div>

                {/*<CreateBtn />*/}
                {session?.user?.role === "ADMIN"
                    &&
                    <Link href={'/expertises/create'} className={'pr-3 text-lg font-black justify-self-end'}>
                        Создать
                    </Link>
                }
            </div>
            <div className="rounded-md border">
                <Table className={'max-h-[615]'}>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow key={headerGroup.id}>
                                {headerGroup.headers.map((header) => {
                                    return (
                                        <TableHead key={header.id}>
                                            {header.isPlaceholder
                                                ? null
                                                : flexRender(
                                                    header.column.columnDef.header,
                                                    header.getContext()
                                                )}
                                        </TableHead>
                                    )
                                })}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row) => (
                                <TableRow
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id}>
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow>
                                <TableCell colSpan={columns.length} className="h-24 text-center">
                                    Нет экпертиз.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
            <div className="flex items-center justify-end space-x-2 py-4">
                <Button
                    variant="outline"
                    size="lg"
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}
                >
                    Предыдущая
                </Button>
                <Button
                    variant="outline"
                    size="lg"
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                >
                    Следующая
                </Button>
            </div>
        </div>
    )
}
