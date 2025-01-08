"use client"
import {ScrollArea} from "@/components/ui/scroll-area";
import Link, {LinkProps} from "next/link";
import * as React from "react";
import {useUpdatedSession} from "@/lib/hooks/useUpdateSession";
import {useState} from "react";
import {Drawer, DrawerTrigger, DrawerContent} from "@/components/ui/drawer";
import {Separator} from "@/components/ui/separator";
import {useRouter} from "next/navigation";
import {cn} from "@/lib/utils";
import {HamburgerMenuIcon} from "@radix-ui/react-icons"

const alwaysAvailableLinks = [
    {name: "Экспертизы", href: "/expertises/"},
    {name: "Проф", href: "/community"},
    {name: "Страница3", href: "#"},
]

export function MobileDrawer() {
    const {session, status} = useUpdatedSession()
    const [open, setOpen] = useState<boolean>(false)

    return (
        <Drawer open={open} onOpenChange={setOpen}>
            <DrawerTrigger asChild className={"fixed z-40 top-2 left-2 text-black bg-white rounded-full p-1.5 opacity-70 lg:hidden"}>
               <HamburgerMenuIcon onClick={setOpen} className={"h-7 w-7"}/>
            </DrawerTrigger>
            <DrawerContent side={"bottom"} className={"h-[47vh] text-xl font-light"} onClick={!setOpen}>
                <ScrollArea className="rounded-md py-1 px-3 h-full">
                    <div className={"flex flex-col items-start gap-2"}>
                        <MobileLink href={"/"} onOpenChange={setOpen} className={"mt-1"}>
                            Главная
                        </MobileLink>
                        <Separator/>
                        {alwaysAvailableLinks.map((link, index) => (
                            <MobileLink href={link.href} onOpenChange={setOpen} key={index}>
                                {link.name}
                            </MobileLink>
                        ))}
                        <Separator/>
                        {!session
                            ?
                            <MobileLink href={"/auth"} onOpenChange={setOpen}>
                                Авторизация
                            </MobileLink>
                            :
                            <MobileLink href={"/profile"} onOpenChange={setOpen}>
                                Профиль
                            </MobileLink>
                        }
                    </div>
                </ScrollArea>
            </DrawerContent>
        </Drawer>
    )
}

interface MobileLinkProps extends LinkProps {
    onOpenChange?: (open: boolean) => void
    children: React.ReactNode
    className?: string
}

function MobileLink({
                        href,
                        onOpenChange,
                        className,
                        children,
                        ...props
                    }: MobileLinkProps) {
    const router = useRouter()
    return (
        <Link
            href={href}
            onClick={() => {
                router.push(href.toString())
                onOpenChange?.(false)
            }}
            className={cn("text-lg", className)}
            {...props}
        >
            {children}
        </Link>
    )
}