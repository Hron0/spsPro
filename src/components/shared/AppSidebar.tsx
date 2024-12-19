'use client'
import {Home, Inbox, Settings} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem, SidebarSeparator, useSidebar,
} from "@/components/ui/sidebar"
import * as React from "react";
import Link from "next/link";
import {cn} from "@/lib/utils";
import {ViewVerticalIcon} from "@radix-ui/react-icons";
import {Button} from "@/components/ui/button";

// Menu items.
const itemsMain = [
    {
        title: "Главная",
        url: "#",
        icon: Home,
    },
    {
        title: "Профиль",
        url: "/profile",
        icon: Inbox,
    }

]

const itemsSecond = [
    {
        title: "Экспертизы",
        url: "/expertises/",
        icon: Settings,
    },
    {
        title: "Страница2",
        url: "#",
        icon: Settings,
    },
    {
        title: "Страница3",
        url: "#",
        icon: Settings,
    }, {
        title: "login",
        url: {pathname: "/auth", query: {type: 'login'}},
        icon: Settings,
    },
]

export function AppSidebar() {
    const {toggleSidebar} = useSidebar()

    return (
        <Sidebar variant={"sidebar"}>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>
                        <div className={"w-full flex flex-row items-center justify-between"}>
                            Меню
                            <Button
                                data-sidebar="trigger"
                                variant="ghost"
                                size="icon"
                                className={cn("bg-secondary text-white p-1 w-7 h-7")}
                                onClick={() => {
                                    toggleSidebar()
                                }}
                            >
                                <ViewVerticalIcon/>
                                <span className="sr-only">Toggle Sidebar</span>
                            </Button>
                        </div>
                    </SidebarGroupLabel>
                    <SidebarSeparator/>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {itemsMain.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                    <SidebarSeparator className={"my-2"}/>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {itemsSecond.map((item) => (
                                <SidebarMenuItem key={item.title}>
                                    <SidebarMenuButton asChild>
                                        <Link href={item.url}>
                                            <span>{item.title}</span>
                                        </Link>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            ))}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
        </Sidebar>
    )
}
