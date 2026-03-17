import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '杀戮尖塔 Slay the Spire - 攻略 wiki',
  description: '杀戮尖塔 Slay the Spire 攻略 wiki - 角色、卡牌、遗物、敌人全攻略',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className="antialiased">{children}</body>
    </html>
  )
}
