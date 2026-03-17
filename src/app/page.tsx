'use client'

import { useState } from 'react'
import { Search, Shield, Zap, Flame, Wind, Crown, Sword, Skull, Gem, Sparkles, Github, Users, BookOpen, Target, Heart } from 'lucide-react'

// 游戏数据
const gameData = {
  characters: [
    {
      name: '铁甲战士',
      nameEn: 'Ironclad',
      icon: Shield,
      color: 'from-red-600 to-red-800',
      desc: '初始角色，拥有强大的力量和防御能力',
      skills: [
        { name: '力量', desc: '每次攻击额外造成等于力量值的伤害' },
        { name: '壁垒', desc: '获得等于壁垒值的临时护甲' },
        { name: '易伤', desc: '敌人受到的伤害增加50%' },
        { name: '虚弱', desc: '敌人力量-3，持续3回合' }
      ],
      tips: '推荐遗物：化石项链、力量手套、多重打击'
    },
    {
      name: '静默猎手',
      nameEn: 'The Silent',
      icon: Zap,
      color: 'from-green-600 to-green-800',
      desc: '使用毒液和迅捷攻击的角色',
      skills: [
        { name: '毒液', desc: '每回合结束时造成等于层数的伤害' },
        { name: '闪避', desc: '25%几率闪避攻击' },
        { name: '脆弱', desc: '敌人力量-50%，持续3回合' },
        { name: '抽卡', desc: '额外抽牌' }
      ],
      tips: '推荐遗物：解毒药、疾跑鞋、毒液瓶'
    },
    {
      name: '故障机器人',
      nameEn: 'Defect',
      icon: Flame,
      color: 'from-blue-600 to-blue-800',
      desc: '使用充能和球体的角色',
      skills: [
        { name: '闪电球', desc: '充能球，造成周期性伤害' },
        { name: '冰霜球', desc: '获得临时护甲' },
        { name: '暗影球', desc: '造成大量伤害' },
        { name: '充能', desc: '每回合获得充能球' }
      ],
      tips: '推荐遗物：裂隙核心、球体生成器'
    },
    {
      name: '观者',
      nameEn: 'Watcher',
      icon: Crown,
      color: 'from-purple-600 to-purple-800',
      desc: '使用姿态和spirit的角色',
      skills: [
        { name: '愤怒姿态', desc: '力量+2，攻击后退出' },
        { name: '冷静姿态', desc: '闪避+25%，退出时抽2张' },
        { name: '维持姿态', desc: '保留姿态效果' },
        { name: 'Spirit', desc: '使用技能消耗Spirit' }
      ],
      tips: '推荐遗物：菩提手串、金刚经'
    }
  ],
  tips: [
    {
      title: '新手入门',
      icon: Target,
      content: '建议从铁甲战士开始，机制简单容易上手。优先升级卡牌移除和获取遗物。'
    },
    {
      title: 'BOSS攻略',
      icon: Skull,
      content: '精英和BOSS战前确保血量健康。A20难度需要针对BOSS制定特定策略。'
    },
    {
      title: '卡牌构建',
      icon: Sword,
      content: '每场战斗限制在10-15张卡牌左右。优先保留移除费用和抽牌能力。'
    },
    {
      title: '遗物选择',
      icon: Gem,
      content: '开局选择提供充能或额外资源的遗物。后期遗物往往能改变战局。'
    }
  ],
  bosses: [
    { name: 'Slime Boss', hp: '150', reward: '熔火核心' },
    { name: 'Guardian', hp: '250', reward: '钥匙' },
    { name: 'Hexaghost', hp: '250', reward: '蜡烛' },
    { name: 'Champ', hp: '330', reward: '红钥匙' },
    { name: 'Awakened One', hp: '355', reward: 'Necronomicon' },
    { name: 'Time Eater', hp: '333', reward: 'Snecko Eye' },
    { name: 'Donu & Deca', hp: '353', reward: 'Tough Bandages' },
    { name: 'Heart', hp: '750', reward: 'Gods' }
  ]
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeTab, setActiveTab] = useState('characters')

  const filteredData = gameData.characters.filter(char => 
    char.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    char.nameEn.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <header className="relative overflow-hidden bg-gradient-to-r from-red-900 via-purple-900 to-blue-900 py-20">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-32 h-32 bg-red-500 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-20 w-40 h-40 bg-purple-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/3 w-36 h-36 bg-blue-500 rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-6xl mx-auto px-4 relative text-center">
          <div className="text-6xl mb-4">🗡️</div>
          <h1 className="text-5xl md:text-6xl font-bold gradient-text mb-4 animate-fadeIn">
            杀戮尖塔
          </h1>
          <p className="text-2xl text-white/80 mb-2">Slay the Spire</p>
          <p className="text-lg text-white/60 mb-8">最强卡牌构建肉鸽游戏</p>
          
          <div className="max-w-xl mx-auto">
            <input
              type="text"
              placeholder="搜索角色、卡牌、遗物..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full search-input"
            />
          </div>
        </div>

        {/* 波浪分隔 */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="#1a1a2e"/>
          </svg>
        </div>
      </header>

      {/* 统计栏 */}
      <div className="bg-black/30 py-6">
        <div className="max-w-6xl mx-auto px-4 flex justify-center gap-8 flex-wrap">
          {[
            { icon: Users, label: '角色', value: '4' },
            { icon: Sword, label: '卡牌', value: '200+' },
            { icon: Gem, label: '遗物', value: '150+' },
            { icon: Skull, label: '敌人', value: '80+' }
          ].map((stat, i) => (
            <div key={i} className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full">
              <stat.icon className="w-5 h-5 text-red-400" />
              <span className="font-bold">{stat.value}</span>
              <span className="text-white/60">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 导航 */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8 flex-wrap">
          {[
            { id: 'characters', icon: Users, label: '角色' },
            { id: 'tips', icon: BookOpen, label: '攻略' },
            { id: 'bosses', icon: Skull, label: 'BOSS' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                activeTab === tab.id 
                  ? 'bg-gradient-to-r from-red-600 to-pink-600 text-white' 
                  : 'bg-white/10 text-white/70 hover:bg-white/20'
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* 角色 */}
        {activeTab === 'characters' && (
          <div className="grid md:grid-cols-2 gap-6">
            {filteredData.map((char, idx) => {
              const Icon = char.icon
              return (
                <div key={idx} className="card p-6 animate-fadeIn" style={{animationDelay: `${idx * 0.1}s`}}>
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${char.color} flex items-center justify-center mb-4`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-1">{char.name}</h3>
                  <p className="text-white/50 text-sm mb-1">{char.nameEn}</p>
                  <p className="text-white/70 mb-4">{char.desc}</p>
                  
                  <div className="space-y-2 mb-4">
                    {char.skills.map((skill, i) => (
                      <div key={i} className="flex items-start gap-2 bg-white/5 p-2 rounded-lg">
                        <Sparkles className="w-4 h-4 text-yellow-400 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-semibold text-red-400">{skill.name}</span>
                          <p className="text-xs text-white/60">{skill.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="bg-gradient-to-r from-red-900/50 to-purple-900/50 p-3 rounded-lg">
                    <p className="text-sm text-white/80">{char.tips}</p>
                  </div>
                </div>
              )
            })}
          </div>
        )}

        {/* 攻略 */}
        {activeTab === 'tips' && (
          <div className="grid md:grid-cols-2 gap-6">
            {gameData.tips.map((tip, idx) => {
              const Icon = tip.icon
              return (
                <div key={idx} className="card p-6 animate-fadeIn" style={{animationDelay: `${idx * 0.1}s`}}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-600 to-orange-600 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold">{tip.title}</h3>
                  </div>
                  <p className="text-white/70 leading-relaxed">{tip.content}</p>
                </div>
              )
            })}
          </div>
        )}

        {/* BOSS */}
        {activeTab === 'bosses' && (
          <div className="card overflow-hidden">
            <div className="bg-gradient-to-r from-red-900 to-purple-900 p-4">
              <h3 className="text-xl font-bold flex items-center gap-2">
                <Skull className="w-6 h-6" />
                BOSS 列表
              </h3>
            </div>
            <div className="p-4">
              <table className="w-full">
                <thead>
                  <tr className="text-left text-white/50 border-b border-white/10">
                    <th className="pb-2">名称</th>
                    <th className="pb-2">血量</th>
                    <th className="pb-2">击败奖励</th>
                  </tr>
                </thead>
                <tbody>
                  {gameData.bosses.map((boss, idx) => (
                    <tr key={idx} className="border-b border-white/5 hover:bg-white/5">
                      <td className="py-3 font-semibold">{boss.name}</td>
                      <td className="py-3 text-red-400">{boss.hp}</td>
                      <td className="py-3 text-yellow-400">{boss.reward}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>

      {/* Footer */}
      <footer className="bg-black/50 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 text-center text-white/50">
          <p>杀戮尖塔 Slay the Spire © MegaCrit</p>
          <p className="text-sm mt-2">本页面为粉丝制作的攻略指南，与官方无关</p>
        </div>
      </footer>
    </div>
  )
}
