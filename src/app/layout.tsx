import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: '杀戮尖塔 Slay the Spire 攻略 wiki - 角色|卡牌|遗物|敌人全攻略',
  description: '杀戮尖塔 Slay the Spire 攻略 wiki，提供最全面的角色攻略、卡牌推荐、遗物搭配、BOSS 打法等攻略内容。铁甲战士、静默猎手、故障机器人、观者四大角色完全指南，新手入门必看的卡牌roguelike游戏攻略网站',
  keywords: ['杀戮尖塔', 'Slay the Spire', '攻略', 'wiki', '卡牌游戏', '角色攻略', '遗物推荐'],
  authors: [{ name: 'jhrsya' }],
  openGraph: {
    title: '杀戮尖塔 Slay the Spire 攻略 wiki',
    description: '杀戮尖塔 Slay the Spire 攻略 wiki - 角色、卡牌、遗物、敌人全攻略',
    url: 'https://jhrsya.github.io/slay-the-spire-wiki/',
    siteName: '杀戮尖塔攻略',
    locale: 'zh_CN',
    type: 'website',
    images: [
      {
        url: 'https://jhrsya.github.io/slay-the-spire-wiki/og-image.png',
        width: 1200,
        height: 630,
        alt: '杀戮尖塔攻略'
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '杀戮尖塔 Slay the Spire 攻略 wiki',
    description: '杀戮尖塔 Slay the Spire 攻略 wiki - 角色、卡牌、遗物、敌人全攻略',
  },
  alternates: {
    canonical: 'https://jhrsya.github.io/slay-the-spire-wiki/',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "杀戮尖塔攻略",
              "url": "https://jhrsya.github.io/slay-the-spire-wiki/",
              "description": "杀戮尖塔 Slay the Spire 攻略 wiki - 角色、卡牌、遗物、敌人全攻略",
              "publisher": {
                "@type": "Person",
                "name": "jhrsya"
              }
            })
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
