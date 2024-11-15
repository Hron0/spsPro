import {QueryProvider} from "@/components/providers/query-provider"
import {siteConfig} from "../../config/site"
import {Toaster} from "@/components/ui/sonner"
import type {Metadata} from "next"
import {Inter} from "next/font/google"
import "@/globals.css"
import {Navbar} from "@/components/shared/Navbar";
import Footer from "@/components/shared/Footer";

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
            <title>dog</title>
            <link rel="manifest" href="/manifest.json"/>
            <link rel="apple-touch-icon" href="/icon.png"/>
            <link rel="theme-color" href="#14B8A6"/>
        </head>
        <body className={"bg-background container flex flex-col items-center"}>
        <QueryProvider>
            <Navbar/>
            {children}
            {modal}
            <Footer />
            <Toaster/>
        </QueryProvider>
        </body>
        </html>
    )
}