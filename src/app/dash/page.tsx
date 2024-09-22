'use client'
import AnalyticsPage from './pages/dash'
import Header from '@/components/dash/Header'
import Sidebar from '@/components/dash/Sidebar'
import { useAppSelector } from '@/store/hooks'
import Analytics from './pages/analytics'
import Activities from './pages/Activities'
import Documents from './pages/Documents'
import Projects from './pages/Projects'
import Reports from './pages/reports'
import Users from './pages/Users'
import Settings from './pages/Settings'

export default function Dashboard() {
  const playtab = useAppSelector((state) => state.dashtab).tab
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-x-hidden overflow-y-auto">
          {playtab === 'dashboard' ? (
            <AnalyticsPage />
          ) : playtab === 'analytics' ? (
            <Analytics />
          ) : playtab === 'reports' ? (
            <Reports />
          ) : playtab === 'users' ? (
            <Users />
          ) : playtab === 'settings' ? (
            <Settings />
          ) : playtab === 'documents' ? (
            <Documents />
          ) : playtab === 'activities' ? (
            <Activities />
          ) : playtab === 'projects' ? (
            <Projects />
          ) : (
            <AnalyticsPage />
          )}
        </main>
      </div>
    </div>
  )
}
