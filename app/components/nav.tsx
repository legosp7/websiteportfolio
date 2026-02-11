import Link from 'next/link'
import { navItems } from '@/lib/constants'
import { ModeToggle } from './themetoggle'

export function Navbar() {
  return (
    <aside className="-ml-2 mb-16 tracking-tight w-full max-w-2xl">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row items-center pr-10 w-full">
            {navItems.map(({ name, href }) => {
              return (
                <Link
                  key={href}
                  href={href}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2 m-1"
                >
                  {name}
                </Link>
                
              )
            })}
            <div className="ml-auto">
            <ModeToggle />
            </div>
          </div>
        </nav>
      </div>
    </aside>
  )
}
