import {QueryProvider} from "@/components/providers/query-provider"
import {siteConfig} from "../../config/site"
import {Toaster} from "@/components/ui/sonner"
import type {Metadata} from "next"
import "@/globals.css"
import {SpeedInsights} from "@vercel/speed-insights/next"
import {AppSidebar} from "@/components/shared/Nav/AppSidebar";
import Menu from "@/components/shared/Nav/Menu";
import {SidebarProvider} from "@/components/ui/sidebar";
import React from "react";
import {SessionProvider} from "next-auth/react";
import {cn} from "@/lib/utils";
import {Inter} from "../../public/fonts/fonts";


export const metadata: Metadata = {
    title: {
        default: siteConfig.title,
        template: `%s - ${siteConfig.name}`,
    },
    description: siteConfig.description,
    openGraph: {
        title: siteConfig.title,
        description: siteConfig.description,
    },
    icons: {
        icon: "/favicon.ico",
    },
}

export default function RootLayout({children}: {
    children: React.ReactNode,
}) {
    return (
        <html lang="en" suppressHydrationWarning>
        <head>
        </head>
        <body className={cn("bg-background w-full flex flex-col items-center", Inter.className)}>
        <SessionProvider>
            <QueryProvider>
                <SidebarProvider defaultOpen={false}>
                    <AppSidebar/>
                    <main className={"flex flex-col items-center justify-between w-full min-h-full"}>
                        <Menu/>
                        {children}
                        <Toaster/>
                    </main>
                </SidebarProvider>
            </QueryProvider>
        </SessionProvider>
        <SpeedInsights/>
        </body>
        </html>
    )
}