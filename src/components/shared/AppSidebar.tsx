import {Home, Inbox, Settings} from "lucide-react"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem, SidebarSeparator,
} from "@/components/ui/sidebar"
import * as React from "react";

// Menu items.
const itemsMain = [
    {
        title: "Главная",
        url: "#",
        icon: Home,
    },
    {
        title: "Навигация",
        url: "#",
        icon: Inbox,
    }

]

const itemsSecond = [
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
    }, {
        title: "Страница4",
        url: "#",
        icon: Settings,
    },
]

export function AppSidebar() {

    return (
        <Sidebar variant={"sidebar"}>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Меню</SidebarGroupLabel>
                    <SidebarSeparator />
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {itemsMain.map((item) => (
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
                    <SidebarSeparator className={"my-2"}/>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {itemsSecond.map((item) => (
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
