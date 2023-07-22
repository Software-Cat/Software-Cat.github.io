"use client";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";
import React from "react";
import { Badge } from "@/components/ui/badge";
import { LucideGithub, LucideLinkedin } from "lucide-react";

const menuItems = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/bowen-wu-53113b282/",
  },
  {
    label: "GitHub",
    href: "https://github.com/Software-Cat",
  },
];

export default function NavBar({ ...props }) {
  return (
    <NavigationMenu
      className="max-w-full px-[30vh] py-4 border-b-[1px] flex flex-row justify-between sticky top-0 backdrop-blur-xl backdrop-brightness-50"
      {...props}
    >
      <div className="flex flex-row gap-5 items-center">
        <Link href="/" className="font-light text-xl">
          ⌘ | Bowen Wu
        </Link>
        <NavigationMenuList>
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <Link href={item.href} legacyBehavior passHref>
                <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                  {item.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </div>
      <Badge>v0.1.0b</Badge>
    </NavigationMenu>
  );
}
