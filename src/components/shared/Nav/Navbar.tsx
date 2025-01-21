"use client"
import * as React from 'react';
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Image from 'next/image'
import {cn} from "@/lib/utils";
import {useUpdatedSession} from "@/lib/hooks/useUpdateSession";
const rightLinks = [
    {name: "Экспертизы", href: "/expertises/"},
    {name: "Проф", href: "/community"},
    {name: "Страница3", href: "#"},
]

export const Navbar = () => {
    const {session, status} = useUpdatedSession()
    return (
        <NavigationMenu
            className={"hidden lg:flex bg-background drop-shadow rounded-sm absolute top-0 h-20 flex-row items-center justify-between mt-4 px-10 container w-full z-10"}>
            <div className={"flex flex-row items-center gap-4 w-[40%] list-none"}>
                <NavigationMenuItem>
                    <Link href={"/"} legacyBehavior passHref>
                        <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-xl font-light")}>
                            Главная
                        </NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>

                {session &&
                    <NavigationMenuItem>
                        <Link href={"/profile"} legacyBehavior passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-xl font-light")}>
                                Профиль
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                }
            </div>
            <div
                className={"relative top-12 w-[208px] bg-background aspect-square rounded-md flex flex-col items-center justify-between shadow-xl"}>
                <Image
                    src={'/img/logo.png'}
                    width={115}
                    height={100}
                    alt={"Логотип"}
                />
                <div className={"flex flex-col items-center pb-3"}>
                    <h1 className={"font-timesnew text-xl"}>ЛУЧШЕЕ РЕШЕНИЕ</h1>
                    <h3 className={"text-center text-base font-extralight"}>Центр независимых исследований.</h3>
                </div>
            </div>
            <div className={"flex flex-row items-center justify-between gap-2 w-[40%] list-none"}>
                {rightLinks.map((link, index) => (
                    <NavigationMenuItem key={index}>
                        <Link href={link.href} legacyBehavior passHref>
                            <NavigationMenuLink
                                className={cn(navigationMenuTriggerStyle(), "text-xl font-light px-0.5  text-nowrap")}>
                                {link.name}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ))}
                {!session
                    &&
                    <NavigationMenuItem>
                        <Link href={"/auth"} legacyBehavior passHref>
                            <NavigationMenuLink
                                className={cn(navigationMenuTriggerStyle(), "text-xl font-light px-0.5  text-nowrap")}>
                                Авторизация
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>}
            </div>
        </NavigationMenu>
    );
};