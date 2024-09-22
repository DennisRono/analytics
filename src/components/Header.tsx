'use client'
import React from 'react'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { setTheme } from '@/store/slices/themeSlice'
import { Moon, Sun } from 'lucide-react'
import Link from 'next/link'

const Header = () => {
  const theme: any = useAppSelector((state: any) => state.theme).theme

  const dispatch = useAppDispatch()
  return (
    <header className="border-b border-border-color">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary">
          Nullchemy Analytics
        </Link>
        <nav className="hidden md:flex space-x-4">
          <Link
            href="/features"
            className="hover:text-primary transition-colors"
          >
            Features
          </Link>
          <Link
            href="/pricing"
            className="hover:text-primary transition-colors"
          >
            Pricing
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            About
          </Link>
          <Link href="/contact" className="text-primary font-semibold">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              dispatch(
                setTheme({ theme: theme === 'light' ? 'dark' : 'light' })
              )
            }}
            className="p-2 rounded-full bg-light dark:bg-dark"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="w-5 h-5" />
            ) : (
              <Sun className="w-5 h-5" />
            )}
          </button>
          <Link
            href="/login"
            className="hidden sm:inline-block px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
          >
            Log In
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
