import {QueryProvider} from "@/components/providers/query-provider"
import {siteConfig} from "../../config/site"
import {Toaster} from "@/components/ui/sonner"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "@/globals.css"
import {Navbar} from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";
import {SpeedInsights} from "@vercel/speed-insights/next"
import {SidebarInset, SidebarProvider, SidebarTrigger} from "@/components/ui/sidebar";
import {AppSidebar} from "@/components/shared/AppSidebar";


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
        <body className={"bg-background container flex flex-col items-center"}>
        <QueryProvider>
            <SidebarProvider defaultOpen={true}>
                <AppSidebar/>
                <main className={"flex flex-col items-center"}>
                    <Navbar/>
                    <SidebarTrigger/>
                    {children}
                    {modal}
                    <Footer/>
                    <Toaster/>
                </main>
            </SidebarProvider>
        </QueryProvider>

        <SpeedInsights/>
        </body>
        </html>
    )
}