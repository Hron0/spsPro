// @flow
import * as React from 'react';
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    navigationMenuTriggerStyle
} from "@/components/ui/navigation-menu";
import Image from 'next/image'
import logo from "/img/logo.jpg"
import {cn} from "@/lib/utils";

const mainLinks = [
    {name: "Главная", href: "/"},
    {name: "Навигация", href: "#"},
]

const rightLinks = [
    {name: "Страница1", href: "#"},
    {name: "Страница2", href: "#"},
    {name: "Страница3", href: "#"},
    {name: "Страница4", href: "#"},
]

type Props = {};
export const Navbar = (props: Props) => {
    return (
        <NavigationMenu
            className={"w-full bg-background rounded-sm absolute top-0 h-20 flex flex-row items-center justify-between px-10 mt-4 container z-10"}>
            <div className={"flex flex-row items-center gap-6 w-[40%] list-none"}>
                {mainLinks.map((link, index) => (
                    <NavigationMenuItem key={index}>
                        <Link href={link.href} legacyBehavior passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-xl font-light")}>
                                {link.name}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ))}
            </div>
            <div className={"relative top-12 w-[208px] bg-background aspect-square rounded-md flex flex-col items-center justify-between shadow-xl"}>
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
            <div className={"flex flex-row items-center gap-2 w-[40%] list-none"}>
                {rightLinks.map((link, index) => (
                    <NavigationMenuItem key={index}>
                        <Link href={link.href} legacyBehavior passHref>
                            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "text-xl font-light px-0.5  text-nowrap")}>
                                {link.name}
                            </NavigationMenuLink>
                        </Link>
                    </NavigationMenuItem>
                ))}
            </div>
        </NavigationMenu>
    );
};