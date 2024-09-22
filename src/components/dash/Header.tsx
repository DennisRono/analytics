'use client'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { setTheme } from '@/store/slices/themeSlice'
import { Moon, Sun, Bell, LogOut } from 'lucide-react'
import React from 'react'

const Header = () => {
  const theme: any = useAppSelector((state: any) => state.theme).theme

  const dispatch = useAppDispatch()

  return (
    <header className="bg-[var(--modal-background)] shadow-sm">
      <div className="flex items-center justify-between px-4 py-3">
        <h1 className="text-xl font-semibold">nullchemy admin</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={() => {
              dispatch(
                setTheme({ theme: theme === 'light' ? 'dark' : 'light' })
              )
            }}
          >
            {theme === 'light' ? (
              <Moon className="w-6 h-6" />
            ) : (
              <Sun className="w-6 h-6" />
            )}
          </button>
          <button className="p-1 rounded-full hover:bg-gray-200">
            <Bell className="w-6 h-6" />
          </button>
          <button className="p-1 rounded-full hover:bg-gray-200">
            <LogOut className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
