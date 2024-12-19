import {QueryProvider} from "@/components/providers/query-provider"
import {siteConfig} from "../../config/site"
import {Toaster} from "@/components/ui/sonner"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "@/globals.css"
import {SpeedInsights} from "@vercel/speed-insights/next"
import {AppSidebar} from "@/components/shared/AppSidebar";
import Menu from "@/components/shared/Menu";
import {SidebarProvider} from "@/components/ui/sidebar";
import React from "react";

const font = Inter({
    weight: ["300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin-ext"],
})

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
        <html lang="en" className={font.className} suppressHydrationWarning>
        <head>
        </head>
        <body className={"bg-background w-full flex flex-col items-center"}>
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

        <SpeedInsights/>
        </body>
        </html>
    )
}