"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { navItems } from "@/lib/constants"
import { ModeToggle } from "./themetoggle"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

export function Navbar() {
  const router = useRouter()

  return (
    <aside className="-ml-2 mb-16 tracking-tight w-full max-w-2xl">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:relative"
          id="nav"
        >
          <div className="flex flex-row items-center pr-10 w-full">
            <NavigationMenu>
              <NavigationMenuList>
                {navItems.map(({ name, href }) => {
                  if (href === "/about") {
                    return (
                      <NavigationMenuItem key={href} className="relative">
                        {/* Click navigates to /about, hover still shows dropdown */}
                        <NavigationMenuTrigger
                          className="bg-transparent px-2 py-1 m-1 font-normal transition-all hover:text-neutral-800 dark:hover:text-neutral-200"
                        >
                          {name}
                        </NavigationMenuTrigger>

                        <NavigationMenuContent className="z-50">
                          <ul className="grid gap-0.5 p-1 w-25">
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/about/"
                                  className="block rounded-md px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                >
                                  About Me
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            <li>
                              <NavigationMenuLink asChild>
                                <Link
                                  href="/about/job_hunt"
                                  className="block rounded-md px-3 py-2 text-sm hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                >
                                  Job Hunt
                                </Link>
                              </NavigationMenuLink>
                            </li>
                            
                          </ul>
                        </NavigationMenuContent>
                      </NavigationMenuItem>
                    )
                  }

                  return (
                    <NavigationMenuItem key={href}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={href}
                          className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                        >
                          {name}
                        </Link>
                      </NavigationMenuLink>
                    </NavigationMenuItem>
                  )
                })}
              </NavigationMenuList>
            </NavigationMenu>

            <div className="ml-auto">
              <ModeToggle />
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}