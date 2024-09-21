'use client'
import { useState } from 'react'
import {
  Bell,
  Home,
  PenSquare,
  BookOpen,
  MessageSquare,
  MessageCircle,
  FileText,
  Users,
  Clock,
  UserX,
  Settings,
  Menu,
  LogOut,
  Sun,
  Moon,
} from 'lucide-react'
import Link from 'next/link'
import AnalyticsPage from './dash'
import { useAppDispatch, useAppSelector } from '@/store/hooks'
import { setTheme } from '@/store/slices/themeSlice'

export default function Dashboard() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const theme: any = useAppSelector((state: any) => state.theme).theme

  const dispatch = useAppDispatch()

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  return (
    <div className="flex h-screen">
      <aside
        className={`bg-blue-500 text-white transition-all duration-300 ease-in-out ${
          isSidebarCollapsed ? 'w-16' : 'w-64'
        }`}
      >
        <div className="p-4">
          <h2
            className={`text-2xl font-bold ${
              isSidebarCollapsed ? 'hidden' : 'block'
            }`}
          >
            nullchemy
          </h2>
          <button
            onClick={toggleSidebar}
            className="mt-4 p-2 hover:bg-blue-600 rounded"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
        <nav className="mt-8">
          {[
            { icon: Home, label: 'Home' },
            { icon: PenSquare, label: 'new blog' },
            { icon: BookOpen, label: 'Blogs' },
            { icon: MessageSquare, label: 'Contacts' },
            { icon: MessageCircle, label: 'Comments' },
            { icon: FileText, label: 'Files' },
            { icon: Users, label: 'Partners' },
            { icon: Clock, label: 'Logs' },
            { icon: UserX, label: 'BLocked Users' },
            { icon: Settings, label: 'Settings' },
          ].map((item, index) => (
            <Link
              href="#"
              key={index}
              className="flex items-center px-4 py-2 hover:bg-blue-600"
            >
              <item.icon className="w-6 h-6" />
              {!isSidebarCollapsed && (
                <span className="ml-2">{item.label}</span>
              )}
            </Link>
          ))}
        </nav>
      </aside>
      <div className="flex-1 flex flex-col overflow-hidden">
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

        {/* Content */}
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          <AnalyticsPage />
        </main>
      </div>
    </div>
  )
}
