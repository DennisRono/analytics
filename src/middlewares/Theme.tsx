'use client'
import React from 'react'
import { useAppSelector } from '@/store/hooks'

const Theme = ({ children }: { children: React.ReactNode }) => {
  const theme: any = useAppSelector((state: any) => state.theme).theme
  return <div data-theme={theme}>{children}</div>
}

export default Theme
