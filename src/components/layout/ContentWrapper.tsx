'use client'

import { useSidebar } from './Sidebar'

export function ContentWrapper({ children }: { children: React.ReactNode }) {
  const { isCollapsed } = useSidebar()

  return (
    <div className={`main-content-wrapper${isCollapsed ? ' sidebar-hidden' : ''}`}>
      {children}
    </div>
  )
}
