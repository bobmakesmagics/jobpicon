import React from 'react'
import Dashboard from './dashboard'

export default function TailwindD({ children, pageNum }: { children: React.ReactNode, pageNum: number }): JSX.Element {
  return <Dashboard pageNum={pageNum}>{children}</Dashboard>
}
