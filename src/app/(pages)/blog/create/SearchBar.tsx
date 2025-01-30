import {Input} from "@/components/ui/input";
import { Search } from 'lucide-react'

interface SearchBarProps {
    onSearch: (query: string) => void
}

export function SearchBar({ onSearch }: SearchBarProps) {
    return (
        <div className="relative w-[70vw] lg:w-1/3 my-4">
            <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500"/>
            <Input type="text" placeholder="Поиск..." onChange={(e) => onSearch(e.target.value)}
                   className="pl-8"/>
        </div>
    );
}