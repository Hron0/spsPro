'use client'
import {Calendar, Home, Inbox, Search, Settings} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import {useIsMobile} from "@/lib/hooks/use-mobile";
import * as React from "react";

// Menu items.
const items = [
    {
        title: "Главная",
        url: "#",
        icon: Home,
    },
    {
        title: "Навигация",
        url: "#",
        icon: Inbox,
    },
    {
        title: "Страница1",
        url: "#",
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
    },{
        title: "Страница4",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {
    const isMobile = useIsMobile()

    return (
        {isMobile} ?
            <div className={"hidden"}></div>
            :
            <Sidebar variant={"sidebar"}>
                <SidebarContent>
                    <SidebarGroup>
                        <SidebarGroupLabel>Меню</SidebarGroupLabel>
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => (
                                    <SidebarMenuItem key={item.title}>
                                        <SidebarMenuButton asChild>
                                            <a href={item.url}>
                                                <span>{item.title}</span>
                                            </a>
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
