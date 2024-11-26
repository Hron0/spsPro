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
        shortcut: "/favicon-16x16.png",
        apple: "/apple-touch-icon.png",
    },
}

export default function RootLayout({children, modal}: {
    children: React.ReactNode,
    modal: React.ReactNode,
}) {
    return (
        <html lang="en" className={font.className} suppressHydrationWarning>
        <head>
        </head>
        <body className={"bg-background w-full flex flex-col items-center "}>
        <QueryProvider>
            <SidebarProvider defaultOpen={false}>
                <AppSidebar/>
                <main className={"flex flex-col items-center justify-center w-full"}>
                    <Menu/>
                    {children}
                    {modal}
                    <Toaster/>
                </main>
            </SidebarProvider>
        </QueryProvider>

        <SpeedInsights/>
        </body>
        </html>
    )
}