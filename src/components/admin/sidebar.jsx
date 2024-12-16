'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navItems = [
  { href: '/admin/createpost', label: 'Create Blog' },
  { href: '/admin/bloglist', label: 'Blog List' },
  { href: '/admin/subscription', label: 'Subscription List' },
]

export function Sidebar() {
  const pathname = usePathname()

  return (
    <div className="bg-gray-800 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`block py-2.5 px-4 rounded transition duration-200 ${
              pathname === item.href
                ? 'bg-blue-500 hover:bg-blue-600'
                : 'hover:bg-gray-700'
            }`}
          >
            {item.label}
          </Link>
        ))}
      </nav>
    </div>
  )
}

