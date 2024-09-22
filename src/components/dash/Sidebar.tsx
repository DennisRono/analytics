'use client'
import { useAppSelector, useAppDispatch } from '@/store/hooks'
import { setDashTab } from '@/store/slices/dashTabSlice'
import {
  Menu,
  Home,
  Activity,
  BarChart,
  Briefcase,
  FileText,
  PieChart,
  Settings,
  Users,
} from 'lucide-react'
import React, { useState } from 'react'

const Sidebar = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)
  const playtab = useAppSelector((state) => state.dashtab).tab
  const dispatch = useAppDispatch()
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed)
  }

  const menuItems = [
    { name: 'Dashboard', icon: <Home className="w-6 h-6" />, key: 'dashboard' },
    {
      name: 'Analytics',
      icon: <PieChart className="w-6 h-6" />,
      key: 'analytics',
    },
    { name: 'Reports', icon: <BarChart className="w-6 h-6" />, key: 'reports' },
    { name: 'Users', icon: <Users className="w-6 h-6" />, key: 'users' },
    {
      name: 'Settings',
      icon: <Settings className="w-6 h-6" />,
      key: 'settings',
    },
    {
      name: 'Documents',
      icon: <FileText className="w-6 h-6" />,
      key: 'documents',
    },
    {
      name: 'Activities',
      icon: <Activity className="w-6 h-6" />,
      key: 'activities',
    },
    {
      name: 'Projects',
      icon: <Briefcase className="w-6 h-6" />,
      key: 'projects',
    },
  ]

  return (
    <aside
      className={`bg-blue-500 text-white transition-width duration-300 ease-in-out ${
        isSidebarCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      <div className="p-4">
        <h2
          className={`text-2xl font-bold transition-opacity duration-300 ${
            isSidebarCollapsed ? 'opacity-0' : 'opacity-100'
          }`}
        >
          nullchemy
        </h2>
        <button
          onClick={toggleSidebar}
          className="mt-4 p-2 -ml-2 hover:bg-blue-600 rounded"
        >
          <Menu className="w-6 h-6" />
        </button>
      </div>
      <nav className="mt-8">
        <ul className="m-2 space-y-4">
          {menuItems.map((item) => (
            <li
              key={item.key}
              className={`flex items-center p-2 hover:bg-blue-600 rounded-md overflow-hidden ${
                playtab === item.key ? 'bg-[#000000d7]' : ''
              } ${
                isSidebarCollapsed ? 'justify-center' : ''
              } transition-all duration-300 ease-in-out`}
              onClick={() => dispatch(setDashTab({ tab: item.key }))}
            >
              {item.icon}
              <span
                className={`text-xs text-nowrap ml-2 text-white transition-opacity duration-300 ${
                  isSidebarCollapsed ? 'opacity-0 hidden' : 'opacity-100'
                }`}
              >
                {item.name}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar
