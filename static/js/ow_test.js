<<<<<<< HEAD
﻿/**
 * OW Hero Test Engine
 * Reads data from #ow-data-json (application/json script tag, CSP-safe)
 * All event handlers bound with addEventListener, no inline onclick
 */
(function () {
  // === Embedded Data ===
  const OW_DATA = {
    "ui_text": {
      "zh": {
        "title": "特工本命档案",
        "subtitle": "该测试将通过两阶段算法锁定你的灵魂英雄。准备好接受评估了吗？",
        "start": "开始同步数据",
        "stage1": "阶段 01: 职责定位测算",
        "stage2": "阶段 02: 灵魂档案同步",
        "subResultTitle": "定位测算完成",
        "subResultDesc": "你的战术骨架已初步成型。现在，我们需要通过 10 道深度操作倾向题，为你匹配最终的灵魂契约英雄。",
        "subResultBtn": "进入终极匹配",
        "calcTitle": "正在解析英雄 DNA...",
        "destinyHero": "Destiny Hero Identified",
        "traitEval": "匹配特质评估",
        "evalArchive": "特工评价档案",
        "evalText": "你的战斗基因已觉醒！你的潜意识操作逻辑与该英雄完美重合。立刻分享此档案，召集队友开始行动！",
        "retry": "重新接入档案",
        "altHeroes": "其他高匹配度英雄",
        "roleNames": {
          "tank": "重装",
          "dps": "输出",
          "support": "支援"
        },
        "subNames": {
          "先锋": "先锋",
          "斗士": "斗士",
          "铁壁": "铁壁",
          "专业": "专业",
          "侦察": "侦察",
          "奇袭": "奇袭",
          "神准": "神准",
          "战术": "战术",
          "医疗": "医疗",
          "生存": "生存"
        }
      },
      "ja": {
        "title": "運命のヒーロー診断",
        "subtitle": "このテストは2段階のアルゴリズムであなたの運命のヒーローを特定します。評価の準備はいいですか？",
        "start": "データ同期開始",
        "stage1": "フェーズ 01: 役割ポジショニング",
        "stage2": "フェーズ 02: ソウルアーカイブ同期",
        "subResultTitle": "ポジショニング完了",
        "subResultDesc": "戦術の骨格が形成されました。次に、10の深い質問を通じて究極のヒーローをマッチングします。",
        "subResultBtn": "究極のマッチングへ",
        "calcTitle": "ヒーローDNAを解析中...",
        "destinyHero": "運命のヒーロー確認",
        "traitEval": "特性評価マッチ",
        "evalArchive": "エージェント評価アーカイブ",
        "evalText": "戦闘遺伝子が覚醒しました！あなたの潜在的な操作ロジックはこのヒーローと完全に一致します。アーカイブを共有し、仲間を集めましょう！",
        "retry": "アーカイブ再接続",
        "altHeroes": "他の高マッチヒーロー",
        "roleNames": {
          "tank": "タンク",
          "dps": "ダメージ",
          "support": "サポート"
        },
        "subNames": {
          "先锋": "ダイブ",
          "斗士": "ブロウラー",
          "铁壁": "アンカー",
          "专业": "スペシャリスト",
          "侦察": "偵察",
          "奇袭": "フランカー",
          "神准": "スナイパー",
          "战术": "タクティカル",
          "医疗": "ヒーラー",
          "生存": "サバイバル"
        }
      },
      "en": {
        "title": "Destiny Hero Test",
        "subtitle": "This test uses a two-stage algorithm to lock onto your soul hero. Ready for assessment?",
        "start": "Start Sync",
        "stage1": "Stage 01: Role Positioning",
        "stage2": "Stage 02: Soul Archive Sync",
        "subResultTitle": "Positioning Complete",
        "subResultDesc": "Your tactical framework is set. Now, we need 10 deep behavioral questions to match your ultimate destiny hero.",
        "subResultBtn": "Enter Final Match",
        "calcTitle": "Analyzing Hero DNA...",
        "destinyHero": "Destiny Hero Identified",
        "traitEval": "Trait Evaluation",
        "evalArchive": "Agent Eval Archive",
        "evalText": "Your combat genes have awakened! Your subconscious logic perfectly aligns with this hero. Share this archive and rally your team!",
        "retry": "Reconnect Archive",
        "altHeroes": "Other High-Match Heroes",
        "roleNames": {
          "tank": "Tank",
          "dps": "Damage",
          "support": "Support"
        },
        "subNames": {
          "先锋": "Dive",
          "斗士": "Brawler",
          "铁壁": "Anchor",
          "专业": "Specialist",
          "侦察": "Recon",
          "奇袭": "Flanker",
          "神准": "Sniper",
          "战术": "Tactical",
          "医疗": "Healer",
          "生存": "Survival"
        }
      }
    },
    "hero_db": {
      "tank": {
        "先锋": [
          "D.Va",
          "铁拳",
          "温斯顿",
          "破坏球"
        ],
        "斗士": [
          "奥丽莎",
          "查莉娅",
          "毛加",
          "路霸"
        ],
        "铁壁": [
          "拉玛刹",
          "渣客女王",
          "莱因哈特",
          "西格玛",
          "金驭",
          "骇灾"
        ]
      },
      "dps": {
        "专业": [
          "艾姆雷",
          "堡垒",
          "士兵76",
          "托比昂",
          "狂鼠",
          "秩序之光",
          "美"
        ],
        "侦察": [
          "回声",
          "弗雷娅",
          "法老之鹰",
          "黑影"
        ],
        "奇袭": [
          "安燃",
          "探奇",
          "斩仇",
          "死神",
          "源氏",
          "猎空"
        ],
        "神准": [
          "半藏",
          "麦克雷",
          "索杰恩",
          "艾什",
          "黑百合"
        ]
      },
      "support": {
        "战术": [
          "卢西奥",
          "安娜",
          "巴蒂斯特",
          "禅雅塔",
          "飞天猫"
        ],
        "医疗": [
          "天使",
          "生命之梭",
          "莫伊拉",
          "雾子"
        ],
        "生存": [
          "伊拉锐",
          "布里吉塔",
          "无漾",
          "朱诺",
          "瑞稀"
        ]
      }
    },
    "trait_names": {
      "zh": {
        "precision": "极致准度",
        "suppression": "覆盖伤害",
        "verticality": "垂直空间依赖",
        "ground_mobility": "地面机动",
        "stealth_evasion": "隐蔽消除",
        "frontal_brawl": "正面硬刚",
        "form_switch": "军械库大师",
        "single_focus": "领域专精者",
        "builder": "阵地大师",
        "pure_skill": "纯粹技术",
        "physics_control": "物理碰撞",
        "status_control": "状态控制",
        "dot_damage": "折磨消耗",
        "burst_execute": "瞬间处决",
        "projectile_curve": "变幻莫测",
        "hitscan_linear": "直来直去",
        "force_move": "强制干涉",
        "aoe_buff": "群体增益",
        "burst_ult": "瞬间爆发",
        "sustained_ult": "持续统治"
      },
      "ja": {
        "precision": "究極の精度",
        "suppression": "制圧射撃",
        "verticality": "垂直空間依存",
        "ground_mobility": "地上機動力",
        "stealth_evasion": "ステルス回避",
        "frontal_brawl": "正面突破",
        "form_switch": "武器マスター",
        "single_focus": "一意専心",
        "builder": "陣地マスター",
        "pure_skill": "純粋な技術",
        "physics_control": "物理衝突",
        "status_control": "状態異常",
        "dot_damage": "持続ダメージ",
        "burst_execute": "瞬間処刑",
        "projectile_curve": "予測不能",
        "hitscan_linear": "直線弾道",
        "force_move": "強制移動",
        "aoe_buff": "範囲バフ",
        "burst_ult": "瞬間火力",
        "sustained_ult": "持続支配"
      },
      "en": {
        "precision": "Extreme Precision",
        "suppression": "Covering Fire",
        "verticality": "Verticality",
        "ground_mobility": "Ground Mobility",
        "stealth_evasion": "Stealth & Evasion",
        "frontal_brawl": "Frontal Brawl",
        "form_switch": "Arsenal Master",
        "single_focus": "Single Focus",
        "builder": "Builder",
        "pure_skill": "Pure Skill",
        "physics_control": "Physics Control",
        "status_control": "Status Control",
        "dot_damage": "DoT Damage",
        "burst_execute": "Burst Execution",
        "projectile_curve": "Unpredictable",
        "hitscan_linear": "Linear Hitscan",
        "force_move": "Forced Movement",
        "aoe_buff": "AoE Buff",
        "burst_ult": "Burst Ultimate",
        "sustained_ult": "Sustained Control"
      }
    },
    "hero_names": {
      "D.Va": {
        "zh": "D.Va",
        "ja": "D.Va",
        "en": "D.Va"
      },
      "铁拳": {
        "zh": "末日铁拳",
        "ja": "ドゥームフィスト",
        "en": "Doomfist"
      },
      "温斯顿": {
        "zh": "温斯顿",
        "ja": "ウィンストン",
        "en": "Winston"
      },
      "破坏球": {
        "zh": "破坏球",
        "ja": "レッキング・ボール",
        "en": "Wrecking Ball"
      },
      "奥丽莎": {
        "zh": "奥丽莎",
        "ja": "オリーサ",
        "en": "Orisa"
      },
      "查莉娅": {
        "zh": "查莉娅",
        "ja": "ザリア",
        "en": "Zarya"
      },
      "毛加": {
        "zh": "毛加",
        "ja": "マウガ",
        "en": "Mauga"
      },
      "路霸": {
        "zh": "路霸",
        "ja": "ロードホッグ",
        "en": "Roadhog"
      },
      "拉玛刹": {
        "zh": "拉玛刹",
        "ja": "ラマットラ",
        "en": "Ramattra"
      },
      "渣客女王": {
        "zh": "渣客女王",
        "ja": "ジャンカー・クイーン",
        "en": "Junker Queen"
      },
      "莱因哈特": {
        "zh": "莱因哈特",
        "ja": "ラインハルト",
        "en": "Reinhardt"
      },
      "西格玛": {
        "zh": "西格玛",
        "ja": "シグマ",
        "en": "Sigma"
      },
      "金驭": {
        "zh": "金驭",
        "ja": "ドミナ",
        "en": "Domina"
      },
      "骇灾": {
        "zh": "骇灾",
        "ja": "ハザード",
        "en": "Hazard"
      },
      "堡垒": {
        "zh": "堡垒",
        "ja": "バスティオン",
        "en": "Bastion"
      },
      "士兵76": {
        "zh": "士兵: 76",
        "ja": "ソルジャー76",
        "en": "Soldier: 76"
      },
      "托比昂": {
        "zh": "托比昂",
        "ja": "トールビョーン",
        "en": "Torbjörn"
      },
      "狂鼠": {
        "zh": "狂鼠",
        "ja": "ジャンクラット",
        "en": "Junkrat"
      },
      "秩序之光": {
        "zh": "秩序之光",
        "ja": "シンメトラ",
        "en": "Symmetra"
      },
      "回声": {
        "zh": "回声",
        "ja": "エコー",
        "en": "Echo"
      },
      "法老之鹰": {
        "zh": "法老之鹰",
        "ja": "ファラ",
        "en": "Pharah"
      },
      "黑影": {
        "zh": "黑影",
        "ja": "ソンブラ",
        "en": "Sombra"
      },
      "探奇": {
        "zh": "探奇",
        "ja": "ベンチャー",
        "en": "Venture"
      },
      "死神": {
        "zh": "死神",
        "ja": "リーパー",
        "en": "Reaper"
      },
      "源氏": {
        "zh": "源氏",
        "ja": "ゲンジ",
        "en": "Genji"
      },
      "猎空": {
        "zh": "猎空",
        "ja": "トレーサー",
        "en": "Tracer"
      },
      "半藏": {
        "zh": "半藏",
        "ja": "ハンゾー",
        "en": "Hanzo"
      },
      "麦克雷": {
        "zh": "卡西迪",
        "ja": "キャスディ",
        "en": "Cassidy"
      },
      "索杰恩": {
        "zh": "索杰恩",
        "ja": "ソジョーン",
        "en": "Sojourn"
      },
      "艾什": {
        "zh": "艾什",
        "ja": "アッシュ",
        "en": "Ashe"
      },
      "黑百合": {
        "zh": "黑百合",
        "ja": "ウィドウメイカー",
        "en": "Widowmaker"
      },
      "卢西奥": {
        "zh": "卢西奥",
        "ja": "ルシオ",
        "en": "Lúcio"
      },
      "安娜": {
        "zh": "安娜",
        "ja": "アナ",
        "en": "Ana"
      },
      "巴蒂斯特": {
        "zh": "巴蒂斯特",
        "ja": "バティスト",
        "en": "Baptiste"
      },
      "禅雅塔": {
        "zh": "禅雅塔",
        "ja": "ゼニヤッタ",
        "en": "Zenyatta"
      },
      "天使": {
        "zh": "天使",
        "ja": "マーシー",
        "en": "Mercy"
      },
      "生命之梭": {
        "zh": "生命之梭",
        "ja": "ライフウィーバー",
        "en": "Lifeweaver"
      },
      "莫伊拉": {
        "zh": "莫伊拉",
        "ja": "モイラ",
        "en": "Moira"
      },
      "雾子": {
        "zh": "雾子",
        "ja": "キリコ",
        "en": "Kiriko"
      },
      "伊拉锐": {
        "zh": "伊拉锐",
        "ja": "イラリー",
        "en": "Illari"
      },
      "布里吉塔": {
        "zh": "布里吉塔",
        "ja": "ブリギッテ",
        "en": "Brigitte"
      },
      "朱诺": {
        "zh": "朱诺",
        "ja": "ジュノ",
        "en": "Juno"
      },
      "艾姆雷": {
        "zh": "艾姆雷",
        "ja": "エムレ",
        "en": "Emre"
      },
      "弗雷娅": {
        "zh": "弗雷娅",
        "ja": "フレイヤ",
        "en": "Freya"
      },
      "安燃": {
        "zh": "安燃",
        "ja": "アンラン",
        "en": "Enkindle"
      },
      "斩仇": {
        "zh": "斩仇",
        "ja": "斬仇",
        "en": "Vendetta"
      },
      "飞天猫": {
        "zh": "飞天猫",
        "ja": "ジェットパック・キャット",
        "en": "Jetpack Cat"
      },
      "无漾": {
        "zh": "无漾",
        "ja": "無漾",
        "en": "Wuyang"
      },
      "瑞稀": {
        "zh": "瑞稀",
        "ja": "瑞稀",
        "en": "Mizuki"
      },
      "美": {
        "zh": "美",
        "ja": "メイ",
        "en": "Mei"
      }
    },
    "hero_flavor": {
      "D.Va": {
        "zh": "你节奏敏锐，擅长快速判断与果断出击。像D.Va一样，你在高压局势中依然从容，喜欢掌控空中与前线节奏。",
        "ja": "あなたは判断が速く、決断力に優れています。D.Vaのように高圧な状況でも冷静で、空中と前線の主導権を握るタイプです。",
        "en": "You are quick-minded and decisive. Like D.Va, you stay composed under pressure and love controlling both the skies and the frontline tempo."
      },
      "铁拳": {
        "zh": "你充满进攻欲望，喜欢用力量改写局势。精准切入与爆发伤害，是你最耀眼的武器。",
        "ja": "あなたは攻撃的で、力で状況を切り開くタイプ。正確なエントリーと爆発力が最大の武器です。",
        "en": "You thrive on aggression and reshape fights with raw power. Precision dives and burst damage define your playstyle."
      },
      "温斯顿": {
        "zh": "你拥有领导气质，擅长为团队打开突破口。跳跃与控制节奏，是你带领队友前进的方式。",
        "ja": "あなたはリーダー気質で、突破口を作るのが得意。ジャンプとテンポコントロールで仲間を導きます。",
        "en": "You have natural leadership. You create openings for your team and guide engagements with smart jumps and tempo control."
      },
      "破坏球": {
        "zh": "你思维灵活，行动迅速。不断骚扰与扰乱敌阵，是你独特的存在方式。",
        "ja": "あなたは柔軟で素早い思考の持ち主。継続的なハラスと撹乱があなたの魅力です。",
        "en": "You are agile and unpredictable. Constant disruption and pressure are your signature strengths."
      },
      "奥丽莎": {
        "zh": "你稳重可靠，是团队的坚实支柱。你喜欢正面承压，用坚韧换取胜利。",
        "ja": "あなたは堅実で信頼できる存在。正面で耐え、勝利へと導きます。",
        "en": "You are steady and dependable. You anchor the frontline and endure pressure for victory."
      },
      "查莉娅": {
        "zh": "你相信配合与能量的积累。越是逆境，你越强大。",
        "ja": "あなたは連携とエネルギー管理を重視します。逆境ほど強くなるタイプです。",
        "en": "You believe in synergy and energy buildup. The tougher the fight, the stronger you become."
      },
      "毛加": {
        "zh": "你天生压迫感十足，正面对抗是你的舞台。",
        "ja": "あなたは圧倒的な存在感を持ち、正面対決を好みます。",
        "en": "You radiate intimidation. Head-on battles are where you shine."
      },
      "路霸": {
        "zh": "你擅长抓住失误，一击定胜负。",
        "ja": "あなたはミスを逃さず、一瞬で決着をつけます。",
        "en": "You capitalize on mistakes instantly, turning single picks into fight wins."
      },
      "拉玛刹": {
        "zh": "你善于切换形态，应对不同局势。",
        "ja": "あなたは状況に応じて柔軟に戦術を変えます。",
        "en": "You adapt your form to fit the situation, shifting strategy as needed."
      },
      "渣客女王": {
        "zh": "你渴望近战对决，用侵略性掌控节奏。",
        "ja": "あなたは近接戦を好み、攻撃的に主導権を握ります。",
        "en": "You crave close combat and dominate through relentless aggression."
      },
      "莱因哈特": {
        "zh": "你守护团队，是正面战场的象征。",
        "ja": "あなたは仲間を守る象徴的な存在です。",
        "en": "You are the symbol of protection, leading the charge with courage."
      },
      "西格玛": {
        "zh": "你冷静理性，掌控空间与节奏。",
        "ja": "あなたは冷静で、空間支配を得意とします。",
        "en": "You are composed and analytical, mastering space control."
      },
      "金驭": {
        "zh": "你善于防守反击，以耐心取胜。",
        "ja": "あなたは守りから反撃へと繋げる戦術家です。",
        "en": "You excel at defensive setups that transition into decisive counterplays."
      },
      "骇灾": {
        "zh": "你沉着稳固，是团队最安心的存在。",
        "ja": "あなたは安定感のある守護者です。",
        "en": "You bring stability and reassurance to your team."
      },
      "艾姆雷": {
        "zh": "你持续输出稳定，是火力担当。",
        "ja": "あなたは安定した火力を提供します。",
        "en": "You provide consistent damage and reliable pressure."
      },
      "堡垒": {
        "zh": "你重视阵地与压制力。",
        "ja": "あなたは陣地制圧を重視します。",
        "en": "You thrive in fortified positions and suppress enemies relentlessly."
      },
      "士兵76": {
        "zh": "你全面均衡，适应性极强。",
        "ja": "あなたはバランス型で適応力が高いです。",
        "en": "You are versatile and adaptable in every fight."
      },
      "托比昂": {
        "zh": "你善于布局与控制空间。",
        "ja": "あなたは配置戦略が得意です。",
        "en": "You control space through smart positioning and setups."
      },
      "狂鼠": {
        "zh": "你思维跳跃，爆发力十足。",
        "ja": "あなたは独創的で爆発力があります。",
        "en": "You are chaotic and explosive, thriving in unpredictability."
      },
      "秩序之光": {
        "zh": "你追求完美与结构感。",
        "ja": "あなたは秩序と完成度を求めます。",
        "en": "You seek structure and precision in your engagements."
      },
      "回声": {
        "zh": "你适应能力极强，擅长变化。",
        "ja": "あなたは適応力に優れています。",
        "en": "You adapt swiftly and exploit opportunities."
      },
      "弗雷娅": {
        "zh": "你冷静观察，伺机而动。",
        "ja": "あなたは冷静に機会を待ちます。",
        "en": "You observe patiently and strike at the right moment."
      },
      "法老之鹰": {
        "zh": "你喜欢空中压制与爆发输出。",
        "ja": "あなたは空中戦を好みます。",
        "en": "You dominate from above with explosive damage."
      },
      "黑影": {
        "zh": "你擅长信息战与干扰。",
        "ja": "あなたは情報戦の達人です。",
        "en": "You excel in disruption and information control."
      },
      "安燃": {
        "zh": "你敏锐灵活，擅长瞬间击破。",
        "ja": "あなたは素早く鋭い攻撃をします。",
        "en": "You rely on speed and sharp execution."
      },
      "探奇": {
        "zh": "你善于潜行与爆发。",
        "ja": "あなたは奇襲を得意とします。",
        "en": "You master ambushes and sudden bursts."
      },
      "斩仇": {
        "zh": "你冷静果断，一击必杀。",
        "ja": "あなたは冷静で決定力があります。",
        "en": "You strike with calm precision."
      },
      "死神": {
        "zh": "你在近战中无人能挡。",
        "ja": "あなたは近接戦の支配者です。",
        "en": "You dominate in close-range combat."
      },
      "源氏": {
        "zh": "你节奏感强，追求极限操作。",
        "ja": "あなたはスピードと技巧を追求します。",
        "en": "You chase mastery and mechanical perfection."
      },
      "猎空": {
        "zh": "你灵动迅捷，掌控时间与空间。",
        "ja": "あなたは俊敏で機動力があります。",
        "en": "You bend space and tempo with agility."
      },
      "半藏": {
        "zh": "你冷静精准，一箭致命。",
        "ja": "あなたは冷静で正確です。",
        "en": "You value precision and decisive shots."
      },
      "麦克雷": {
        "zh": "你沉稳自信，枪法凌厉。",
        "ja": "あなたは自信と安定感があります。",
        "en": "You bring confidence and lethal accuracy."
      },
      "索杰恩": {
        "zh": "你爆发与节奏并存。",
        "ja": "あなたは爆発力とテンポを両立します。",
        "en": "You combine burst power with rhythm control."
      },
      "艾什": {
        "zh": "你优雅冷静，远程掌控战局。",
        "ja": "あなたは優雅で冷静です。",
        "en": "You command the battlefield from range with style."
      },
      "黑百合": {
        "zh": "你耐心等待，一击定局。",
        "ja": "あなたは忍耐強いスナイパーです。",
        "en": "You wait patiently for the perfect shot."
      },
      "卢西奥": {
        "zh": "你节奏鲜明，团队灵魂人物。",
        "ja": "あなたはチームの鼓動です。",
        "en": "You are the heartbeat of the team."
      },
      "安娜": {
        "zh": "你理性沉稳，远程守护。",
        "ja": "あなたは冷静な守護者です。",
        "en": "You protect your team with calm precision."
      },
      "巴蒂斯特": {
        "zh": "你兼具进攻与支援。",
        "ja": "あなたは攻守両立型です。",
        "en": "You balance offense and support seamlessly."
      },
      "禅雅塔": {
        "zh": "你洞察战局，精神专注。",
        "ja": "あなたは洞察力があります。",
        "en": "You bring clarity and focus to every fight."
      },
      "飞天猫": {
        "zh": "你机动灵活，支援节奏流畅。",
        "ja": "あなたは機動力のある支援です。",
        "en": "You move fluidly while supporting your allies."
      },
      "天使": {
        "zh": "你温柔坚定，是团队后盾。",
        "ja": "あなたは優しくも強い存在です。",
        "en": "You are compassionate yet resilient."
      },
      "生命之梭": {
        "zh": "你善于调度与保护。",
        "ja": "あなたは守護と調整が得意です。",
        "en": "You excel at repositioning and safeguarding allies."
      },
      "莫伊拉": {
        "zh": "你攻守转换自如。",
        "ja": "あなたは攻守を自在に切り替えます。",
        "en": "You shift between healing and damage effortlessly."
      },
      "雾子": {
        "zh": "你反应迅速，守护关键时刻。",
        "ja": "あなたは素早い反応で守ります。",
        "en": "You save allies in critical moments."
      },
      "伊拉锐": {
        "zh": "你自信独立，兼具火力与恢复。",
        "ja": "あなたは自立心が強い支援です。",
        "en": "You stand strong while sustaining your team."
      },
      "布里吉塔": {
        "zh": "你勇敢坚定，前线守护者。",
        "ja": "あなたは勇敢な守護者です。",
        "en": "You defend your team up close with courage."
      },
      "无漾": {
        "zh": "你冷静分析，稳定输出支援。",
        "ja": "あなたは安定した支援を提供します。",
        "en": "You provide steady and calculated support."
      },
      "朱诺": {
        "zh": "你灵巧细腻，重视团队配合。",
        "ja": "あなたは繊細で協調性があります。",
        "en": "You value coordination and subtle impact."
      },
      "瑞稀": {
        "zh": "你善于在危机中保持冷静。",
        "ja": "あなたは危機でも落ち着いています。",
        "en": "You stay calm and dependable in chaos."
      },
      "default": {
        "zh": "你是多才多艺的战术大师，能够完美适应各种复杂的局势。",
        "ja": "あなたは多才な戦術の達人であり、あらゆる複雑な状況に完璧に適応します。",
        "en": "You are a versatile tactician, perfectly adapting to any complex situation."
      },
      "美": {
        "zh": "你善于控场与分割战场，是令敌人胆寒的极寒阵地专家。",
        "ja": "あなたは戦場を分割しコントロールする、敵が恐れる極寒の専門家です。",
        "en": "You excel at area control and isolating targets, freezing enemies in their tracks."
      }
    },
    "stage1_questions": {
      "zh": [
        {
          "text": "当团战毫无征兆地爆发时，你的第一直觉是？",
          "opts": [
            {
              "t": "顶在最前面吸收火力屏蔽危险，或者强行撕裂对方的阵型",
              "r": "tank",
              "s": [
                "铁壁",
                "先锋"
              ]
            },
            {
              "t": "寻找高台或侧翼盲区，捕捉敌方脆皮露出的致命破绽",
              "r": "dps",
              "s": [
                "神准",
                "奇袭"
              ]
            },
            {
              "t": "纵观全局走位，确保自己在安全位置第一时间给出救援与增益",
              "r": "support",
              "s": [
                "战术",
                "医疗"
              ]
            }
          ]
        },
        {
          "text": "面对敌方两到三人的猛烈集火，你通常如何应对？",
          "opts": [
            {
              "t": "举起护盾/开启高额减伤，像座大山一样硬扛下所有的恶意",
              "r": "tank",
              "s": [
                "铁壁",
                "斗士"
              ]
            },
            {
              "t": "利用极高的机动性疯狂穿梭拉扯，或者干脆进入隐蔽状态",
              "r": "dps",
              "s": [
                "侦察",
                "奇袭"
              ]
            },
            {
              "t": "瞬间交出核心保人/自保技能化解危机，呼叫队友互相掩护反打",
              "r": "support",
              "s": [
                "生存",
                "医疗"
              ]
            }
          ]
        },
        {
          "text": "你最享受在对局中获得哪种正向反馈？",
          "opts": [
            {
              "t": "把敌人逼进死角，用庞大的体型和控制能力碾压他们的挣扎",
              "r": "tank",
              "s": [
                "斗士",
                "先锋"
              ]
            },
            {
              "t": "听着清脆的“叮叮”爆头音效，或者打出华丽连招瞬间秒杀目标",
              "r": "dps",
              "s": [
                "神准",
                "专业"
              ]
            },
            {
              "t": "在极限血量下救下残血队友，用一次精准的技能彻底扭转必败的战局",
              "r": "support",
              "s": [
                "战术",
                "生存"
              ]
            }
          ]
        },
        {
          "text": "你在游戏进程中最关注的“战地资源”是什么？",
          "opts": [
            {
              "t": "我的护盾值、护甲健康度，以及核心开团技能的冷却进度",
              "r": "tank",
              "s": [
                "铁壁",
                "先锋"
              ]
            },
            {
              "t": "绝佳的安全输出站位，以及子弹匣/爆发性输出技能的完美循环",
              "r": "dps",
              "s": [
                "专业",
                "神准"
              ]
            },
            {
              "t": "所有队友的生命线，以及关键救命技能捏在手里的绝对威慑力",
              "r": "support",
              "s": [
                "医疗",
                "战术"
              ]
            }
          ]
        },
        {
          "text": "如果输掉了一波关键加时团战，你更倾向于复盘思考哪点？",
          "opts": [
            {
              "t": "我的身板不够硬/开团不够果断，没给身后的队友拉扯出足够的输出空间",
              "r": "tank",
              "s": [
                "铁壁",
                "斗士"
              ]
            },
            {
              "t": "我的关键枪马了，没能在第一时间集火蒸发掉对方的战术核心",
              "r": "dps",
              "s": [
                "神准",
                "侦察"
              ]
            },
            {
              "t": "我的技能交早或交晚了，眼睁睁看着队伍里最重要的那个人倒下",
              "r": "support",
              "s": [
                "生存",
                "战术"
              ]
            }
          ]
        }
      ],
      "ja": [
        {
          "text": "集団戦が不意に発生した時、あなたの第一直感は？",
          "opts": [
            {
              "t": "最前線でフォーカスを集めて危険を遮断するか、強引に敵の陣形を引き裂く",
              "r": "tank",
              "s": [
                "铁壁",
                "先锋"
              ]
            },
            {
              "t": "高台や側面の死角を探し、敵の脆いヒーローが見せる致命的な隙を突く",
              "r": "dps",
              "s": [
                "神准",
                "奇袭"
              ]
            },
            {
              "t": "全体を見渡し、安全な位置から直ちに救援やバフを与える",
              "r": "support",
              "s": [
                "战术",
                "医疗"
              ]
            }
          ]
        },
        {
          "text": "敵2〜3人からの激しいフォーカスを受けた時、通常どう対処する？",
          "opts": [
            {
              "t": "シールドを張るか高いダメージ軽減を発動し、山のように全ての悪意を受け止める",
              "r": "tank",
              "s": [
                "铁壁",
                "斗士"
              ]
            },
            {
              "t": "極めて高い機動力を活かして激しく駆け回るか、いっそステルス状態に入る",
              "r": "dps",
              "s": [
                "侦察",
                "奇袭"
              ]
            },
            {
              "t": "瞬時に自身の命や味方を守るコアスキルを使い危機を打破し、味方にカバーしてもらう",
              "r": "support",
              "s": [
                "生存",
                "医疗"
              ]
            }
          ]
        },
        {
          "text": "試合中、どのようなポジティブなフィードバックを一番楽しむ？",
          "opts": [
            {
              "t": "敵を死角に追い詰め、巨大な体型とCC（行動阻害）で圧倒する",
              "r": "tank",
              "s": [
                "斗士",
                "先锋"
              ]
            },
            {
              "t": "澄んだHS音を聞くか、華麗なコンボでターゲットを一瞬で倒す",
              "r": "dps",
              "s": [
                "神准",
                "专业"
              ]
            },
            {
              "t": "ミリ残りの味方を救い、的確なスキル1つで負け確の戦局を完全に覆す",
              "r": "support",
              "s": [
                "战术",
                "生存"
              ]
            }
          ]
        },
        {
          "text": "ゲーム中、あなたが最も気にする「戦場のリソース」は何？",
          "opts": [
            {
              "t": "自身のシールド値、アーマーの健康状態、そしてイニシエートスキルのクールダウン",
              "r": "tank",
              "s": [
                "铁壁",
                "先锋"
              ]
            },
            {
              "t": "絶好の安全なダメージ出力ポジション、そして弾倉/瞬間火力スキルの完璧なサイクル",
              "r": "dps",
              "s": [
                "专业",
                "神准"
              ]
            },
            {
              "t": "全味方の生命線、そして切り札となる救命スキルを握っていることによる絶対的な抑止力",
              "r": "support",
              "s": [
                "医疗",
                "战术"
              ]
            }
          ]
        },
        {
          "text": "大事なオーバータイムの集団戦で負けた時、どの点を振り返る傾向にある？",
          "opts": [
            {
              "t": "自分が十分硬くなかった/飛び込みがためらわれたせいで、味方に十分なスペースを作れなかった",
              "r": "tank",
              "s": [
                "铁壁",
                "斗士"
              ]
            },
            {
              "t": "大事な一発を外し、第一时间に敵の戦術の要を溶かすことができなかった",
              "r": "dps",
              "s": [
                "神准",
                "侦察"
              ]
            },
            {
              "t": "スキルのタイミングが早すぎた、または遅すぎたせいで、チームで最も重要な人物が倒れるのを見てしまった",
              "r": "support",
              "s": [
                "生存",
                "战术"
              ]
            }
          ]
        }
      ],
      "en": [
        {
          "text": "When a team fight erupts without warning, your first instinct is to:",
          "opts": [
            {
              "t": "Hold the frontline to absorb fire, or forcefully tear apart the enemy formation.",
              "r": "tank",
              "s": [
                "铁壁",
                "先锋"
              ]
            },
            {
              "t": "Find high ground or a flank, catching out squishy enemies making a fatal mistake.",
              "r": "dps",
              "s": [
                "神准",
                "奇袭"
              ]
            },
            {
              "t": "Survey the entire layout, ensuring you're safe to immediately provide heals and buffs.",
              "r": "support",
              "s": [
                "战术",
                "医疗"
              ]
            }
          ]
        },
        {
          "text": "Faced with heavy focus fire from multiple enemies, how do you usually respond?",
          "opts": [
            {
              "t": "Raise shields or pop damage mitigation, taking all the malice like a mountain.",
              "r": "tank",
              "s": [
                "铁壁",
                "斗士"
              ]
            },
            {
              "t": "Use extreme mobility to zip around wildly, or straight up enter stealth.",
              "r": "dps",
              "s": [
                "侦察",
                "奇袭"
              ]
            },
            {
              "t": "Instantly burn your core survival/save cooldown to defuse the crisis and call for peel.",
              "r": "support",
              "s": [
                "生存",
                "医疗"
              ]
            }
          ]
        },
        {
          "text": "What kind of positive feedback do you enjoy the most in a match?",
          "opts": [
            {
              "t": "Pinning enemies into a corner, crushing them with sheer size and crowd control.",
              "r": "tank",
              "s": [
                "斗士",
                "先锋"
              ]
            },
            {
              "t": "Hearing the crisp 'dink' of headshots, or executing a flashy one-shot combo.",
              "r": "dps",
              "s": [
                "神准",
                "专业"
              ]
            },
            {
              "t": "Saving a teammate at absolute 1 HP, completely reversing a lost fight with one precise skill.",
              "r": "support",
              "s": [
                "战术",
                "生存"
              ]
            }
          ]
        },
        {
          "text": "During the game, which 'battlefield resources' do you focus on the most?",
          "opts": [
            {
              "t": "My shield health, armor status, and the cooldown of my main engage ability.",
              "r": "tank",
              "s": [
                "铁壁",
                "先锋"
              ]
            },
            {
              "t": "The absolute best safe positioning, and perfecting the cycle of my burst damage rotations.",
              "r": "dps",
              "s": [
                "专业",
                "神准"
              ]
            },
            {
              "t": "The lifelines of all teammates, and the absolute deterrence of holding onto key saving cooldowns.",
              "r": "support",
              "s": [
                "医疗",
                "战术"
              ]
            }
          ]
        },
        {
          "text": "If you lose a clutch overtime team fight, what do you tend to reflect on?",
          "opts": [
            {
              "t": "I wasn't tanky enough or my engage wasn't decisive, failed to make space for my team.",
              "r": "tank",
              "s": [
                "铁壁",
                "斗士"
              ]
            },
            {
              "t": "I whiffed the crucial shot and failed to instantly burst down their tactical core.",
              "r": "dps",
              "s": [
                "神准",
                "侦察"
              ]
            },
            {
              "t": "I used my skills too early or too late, helplessly watching the most important teammate die.",
              "r": "support",
              "s": [
                "生存",
                "战术"
              ]
            }
          ]
        }
      ]
    },
    "stage2_questions": {
      "zh": [
        {
          "text": "关于输出的精确度，你更偏好哪一种？",
          "opts": [
            {
              "t": "极致准度：偏爱单发高伤，要求枪枪到肉甚至首级的完美跟枪",
              "traits": [
                "precision"
              ]
            },
            {
              "t": "覆盖伤害：享受大范围溅射、火力压制或倾泻弹药带来的阵地威慑",
              "traits": [
                "suppression"
              ]
            }
          ]
        },
        {
          "text": "你对战场的“空间利用”有什么执念？",
          "opts": [
            {
              "t": "垂直空间依赖：渴望能在天上飞、长时间浮空或从制高点降维打击对面",
              "traits": [
                "verticality"
              ]
            },
            {
              "t": "地面机动：更喜欢脚踏实地，在平地、狭隙或掩体之间极速穿梭",
              "traits": [
                "ground_mobility"
              ]
            }
          ]
        },
        {
          "text": "遇到致命杀机时，你最希望拥有的生存手段是？",
          "opts": [
            {
              "t": "隐蔽消除：遁地穿行或直接隐身退出战场，让敌人丢失目标",
              "traits": [
                "stealth_evasion"
              ]
            },
            {
              "t": "正面硬刚：直接用肉身格挡伤害、反弹子弹或狂暴吸血不死",
              "traits": [
                "frontal_brawl"
              ]
            }
          ]
        },
        {
          "text": "你喜欢怎样的操作手感？",
          "opts": [
            {
              "t": "军械库大师：自由切换武器模式或身体形态，适应所有复杂的战局",
              "traits": [
                "form_switch"
              ]
            },
            {
              "t": "领域专精者：一套固定的技能组合用到极致，不搞花里胡哨的变身",
              "traits": [
                "single_focus"
              ]
            }
          ]
        },
        {
          "text": "你希望在战场上拥有额外的“死物帮手”吗？",
          "opts": [
            {
              "t": "阵地大师：喜欢建造自动攻击的炮台、传送门或固定的治疗塔进行防守",
              "traits": [
                "builder"
              ]
            },
            {
              "t": "纯粹技术：不需要造任何东西，完全依靠自己的枪法、走位和技能",
              "traits": [
                "pure_skill"
              ]
            }
          ]
        },
        {
          "text": "你喜欢如何掌控且“折磨”你的敌人？",
          "opts": [
            {
              "t": "物理碰撞：用纯粹的动能将他们击退、重力抓取或摁在墙上剧烈摩擦",
              "traits": [
                "physics_control"
              ]
            },
            {
              "t": "状态控制：通过远距离麻醉、禁疗、减速等手段隔空剥夺他们的战斗力",
              "traits": [
                "status_control"
              ]
            }
          ]
        },
        {
          "text": "你更倾向于哪种带来痛苦的攻击节奏？",
          "opts": [
            {
              "t": "折磨消耗：利用点燃、毒素、吸血等特殊状态，让敌人在缓慢流血中绝望",
              "traits": [
                "dot_damage"
              ]
            },
            {
              "t": "瞬间处决：简单粗暴的瞬间爆发，一枪或一套连招直接送回老家",
              "traits": [
                "burst_execute"
              ]
            }
          ]
        },
        {
          "text": "对于武器的子弹发射，你有什么独特的“物理偏好”吗？",
          "opts": [
            {
              "t": "变幻莫测：喜欢弹道折射、子弹变向，利用战场几何学打出神奇攻击",
              "traits": [
                "projectile_curve"
              ]
            },
            {
              "t": "直来直去：喜欢常规的即时命中或者笔直飞行的常规弹道",
              "traits": [
                "hitscan_linear"
              ]
            }
          ]
        },
        {
          "text": "作为一个能绝境救护的关键人物，你喜欢如何“保命/救人”？",
          "opts": [
            {
              "t": "强制干涉：哪怕队友不同意，我也要把陷入危险的他们强行拽回安全区",
              "traits": [
                "force_move"
              ]
            },
            {
              "t": "群体增益：瞬间开启光环，提供大范围无敌、无死角加速或高额抬血反打",
              "traits": [
                "aoe_buff"
              ]
            }
          ]
        },
        {
          "text": "最后，按下你终极技能（大招）的那个瞬间，你的终极期待是？",
          "opts": [
            {
              "t": "瞬间爆发：按下去就能极速清场或蒸发对手，追求瞬间多杀的快感",
              "traits": [
                "burst_ult"
              ]
            },
            {
              "t": "持续统治：大幅强化自身状态、持续造成大范围干扰或改变战场规则",
              "traits": [
                "sustained_ult"
              ]
            }
          ]
        }
      ],
      "ja": [
        {
          "text": "出力の精度について、どちらが好み？",
          "opts": [
            {
              "t": "究極の精度：単発高ダメージを好み、一発一発の命中にこだわる",
              "traits": [
                "precision"
              ]
            },
            {
              "t": "制圧射撃：広範囲ダメージや火力制圧、弾薬をばら撒く陣地威嚇を楽しむ",
              "traits": [
                "suppression"
              ]
            }
          ]
        },
        {
          "text": "戦場の「空間利用」にどのようなこだわりがある？",
          "opts": [
            {
              "t": "垂直空間依存：空を飛んだり、長時間滞空したり、高所から制圧したい",
              "traits": [
                "verticality"
              ]
            },
            {
              "t": "地上機動力：地に足をつけて、平地や狭い隙間を素早く駆け回りたい",
              "traits": [
                "ground_mobility"
              ]
            }
          ]
        },
        {
          "text": "致命的な危機に陥った時、どのような生存手段を望む？",
          "opts": [
            {
              "t": "ステルス回避：地中を移動したりステルス化して戦線離脱し、敵に見失わせたい",
              "traits": [
                "stealth_evasion"
              ]
            },
            {
              "t": "正面突破：肉体でダメージを受け止めたり、弾を撃ち返したり、自己回復で耐え抜きたい",
              "traits": [
                "frontal_brawl"
              ]
            }
          ]
        },
        {
          "text": "どのような操作感が好き？",
          "opts": [
            {
              "t": "武器マスター：武器のモードや身体の形態を自由に変え、複雑な戦局に適応したい",
              "traits": [
                "form_switch"
              ]
            },
            {
              "t": "一意専心：固定のスキルセットを極めるのが好きで、複雑な変身は好まない",
              "traits": [
                "single_focus"
              ]
            }
          ]
        },
        {
          "text": "戦場で「無機物の助っ人」を持ちたい？",
          "opts": [
            {
              "t": "陣地マスター：自動攻撃するタレットやテレポート、固定の回復タワーなどを建てたい",
              "traits": [
                "builder"
              ]
            },
            {
              "t": "純粋な技術：何も建てず、己のエイムや立ち回り、アビリティのみに頼りたい",
              "traits": [
                "pure_skill"
              ]
            }
          ]
        },
        {
          "text": "敵をどのようにコントロールし「苦しめ」たい？",
          "opts": [
            {
              "t": "物理衝突：純粋な運動エネルギーでノックバックさせたり、壁に押し付けたい",
              "traits": [
                "physics_control"
              ]
            },
            {
              "t": "状態異常：遠距離からの睡眠、回復阻害、スロウなどで戦闘力を剥奪したい",
              "traits": [
                "status_control"
              ]
            }
          ]
        },
        {
          "text": "苦痛を与える攻撃テンポとして、どちらの傾向が強い？",
          "opts": [
            {
              "t": "持続ダメージ：炎上、毒、吸血などの特殊状態で、じわじわと敵を確実に削りたい",
              "traits": [
                "dot_damage"
              ]
            },
            {
              "t": "瞬間処刑：シンプルで暴力的な瞬間火力で、一撃あるいはワンコンボで敵を倒したい",
              "traits": [
                "burst_execute"
              ]
            }
          ]
        },
        {
          "text": "武器の弾道に関して、独特の「物理的な好み」はある？",
          "opts": [
            {
              "t": "予測不能：弾道を反射させたり軌道を変えたり、戦場の幾何学を利用したい",
              "traits": [
                "projectile_curve"
              ]
            },
            {
              "t": "直線弾道：一般的な即着弾（ヒットスキャン）や、まっすぐ飛ぶ素直な弾道が好き",
              "traits": [
                "hitscan_linear"
              ]
            }
          ]
        },
        {
          "text": "絶望的な状況を救うキーマンとして、どのように「命を救う」のが好き？",
          "opts": [
            {
              "t": "強制移動：味方が同意していなくても、危険な味方を強制的に安全圏に引き戻したい",
              "traits": [
                "force_move"
              ]
            },
            {
              "t": "範囲バフ：瞬間的にオーラを展開し、広範囲無敵や加速、強ヒールで反撃に出たい",
              "traits": [
                "aoe_buff"
              ]
            }
          ]
        },
        {
          "text": "最後に、ULT（アルティメット）を発動する瞬間、究極の期待は？",
          "opts": [
            {
              "t": "瞬間火力：一瞬で敵を一掃したり蒸発させ、マルチキルの快感を味わいたい",
              "traits": [
                "burst_ult"
              ]
            },
            {
              "t": "持続支配：自身の状態を大幅強化したり、持続的な広範囲影響で戦場のルールを変えたい",
              "traits": [
                "sustained_ult"
              ]
            }
          ]
        }
      ],
      "en": [
        {
          "text": "Regarding output precision, which do you prefer?",
          "opts": [
            {
              "t": "Extreme Precision: I favor single-shot high damage and perfect tracking for headshots.",
              "traits": [
                "precision"
              ]
            },
            {
              "t": "Covering Fire: I enjoy massive AoE splash, suppression, and dumping ammo into the battlefield.",
              "traits": [
                "suppression"
              ]
            }
          ]
        },
        {
          "text": "What is your obsession with \"spatial utilization\"?",
          "opts": [
            {
              "t": "Verticality: I yearn to fly, stay airborne, or deliver tactical strikes from high ground.",
              "traits": [
                "verticality"
              ]
            },
            {
              "t": "Ground Mobility: I prefer keeping my feet on the ground, rapidly dashing through corridors and covers.",
              "traits": [
                "ground_mobility"
              ]
            }
          ]
        },
        {
          "text": "When facing fatal danger, what survival mechanics do you wish to have?",
          "opts": [
            {
              "t": "Stealth & Evasion: Burrowing underground or turning completely invisible to vanish from sight.",
              "traits": [
                "stealth_evasion"
              ]
            },
            {
              "t": "Frontal Brawl: Tanking damage with pure bulk, deflecting bullets, or sustaining via violent lifesteal.",
              "traits": [
                "frontal_brawl"
              ]
            }
          ]
        },
        {
          "text": "What kind of operational flow do you prefer?",
          "opts": [
            {
              "t": "Arsenal Master: Freely swapping weapon fires or morphing body forms to adapt to complex fights.",
              "traits": [
                "form_switch"
              ]
            },
            {
              "t": "Single Focus: Perfecting one specific skill combination without any flashy transformations.",
              "traits": [
                "single_focus"
              ]
            }
          ]
        },
        {
          "text": "Do you wish to have extra \"inanimate helpers\" on the battlefield?",
          "opts": [
            {
              "t": "Builder: I like deploying auto-attacking turrets, teleporters, or fixed healing stations.",
              "traits": [
                "builder"
              ]
            },
            {
              "t": "Pure Skill: I don't build anything. I rely purely on my own aim, movement, and abilities.",
              "traits": [
                "pure_skill"
              ]
            }
          ]
        },
        {
          "text": "How do you prefer to control and \"torment\" your enemies?",
          "opts": [
            {
              "t": "Physics Control: Using pure kinetic force to knock them back, pull them into gravity, or pin them to walls.",
              "traits": [
                "physics_control"
              ]
            },
            {
              "t": "Status Control: Stripping their combat potential via long-range sleep darts, anti-heals, or slows.",
              "traits": [
                "status_control"
              ]
            }
          ]
        },
        {
          "text": "Which damage rhythm do you lean towards?",
          "opts": [
            {
              "t": "DoT Damage: Inflicting desperate bleed, poison, or burn effects, making them suffer slowly.",
              "traits": [
                "dot_damage"
              ]
            },
            {
              "t": "Burst Execution: Simple, brutal, instant burst damage. Sending them back to spawn in one shot or combo.",
              "traits": [
                "burst_execute"
              ]
            }
          ]
        },
        {
          "text": "Do you have a unique \"physics preference\" for your weapon's projectiles?",
          "opts": [
            {
              "t": "Unpredictable: I like bouncing projectiles, bending bullets, and using battlefield geometry.",
              "traits": [
                "projectile_curve"
              ]
            },
            {
              "t": "Linear Hitscan: I prefer standard instantaneous hits (Hitscan) or straightforward projectiles.",
              "traits": [
                "hitscan_linear"
              ]
            }
          ]
        },
        {
          "text": "As a key figure capable of clutch saves, how do you prefer to \"save lives\"?",
          "opts": [
            {
              "t": "Forced Movement: Forcibly yanking a teammate in danger back to safety, even if they disagree.",
              "traits": [
                "force_move"
              ]
            },
            {
              "t": "AoE Buff: Instantly popping an aura to provide massive AoE invulnerability, speed, or immense burst heals.",
              "traits": [
                "aoe_buff"
              ]
            }
          ]
        },
        {
          "text": "Finally, the moment you press your Ultimate, what is your ultimate expectation?",
          "opts": [
            {
              "t": "Burst Ultimate: An instant wipe or deletion of opponents, chasing the adrenaline of an instant multikill.",
              "traits": [
                "burst_ult"
              ]
            },
            {
              "t": "Sustained Control: Radically empowering myself or casting a lasting disruption that changes the rules of the fight.",
              "traits": [
                "sustained_ult"
              ]
            }
          ]
        }
      ]
    }
  };

  // === State ===
  let state = {
    lang: getSiteLang(),
    step: 'welcome',
    stage1Idx: 0,
    stage2Idx: 0,
    roleScores: { tank: 0, dps: 0, support: 0 },
    subScores: {},
    userTraits: [],
    finalMatch: null,
    altMatches: []
  };

  function getSiteLang() {
    const saved = localStorage.getItem('brocnbb_lang');
    if (['zh', 'ja', 'en'].includes(saved)) return saved;

    // Auto-detect based on timezone/region
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (timeZone) {
        const zhTimeZones = ['Asia/Shanghai', 'Asia/Chongqing', 'Asia/Urumqi', 'Asia/Macau', 'Asia/Hong_Kong', 'Asia/Taipei'];
        if (zhTimeZones.includes(timeZone)) {
          return 'zh';
        }
        if (timeZone === 'Asia/Tokyo') {
          return 'ja';
        }
      }
    } catch (e) {
      // Fallback for older browsers
    }

    // Fallback to browser language
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browserLang.startsWith('zh')) return 'zh';
    if (browserLang.startsWith('ja')) return 'ja';
    return 'en';
  }

  function T(key) {
    const ui = OW_DATA.ui_text[state.lang] || OW_DATA.ui_text['zh'];
    return (ui && ui[key] !== undefined) ? ui[key] : key;
  }

  function resetState() {
    state.step = 'welcome';
    state.stage1Idx = 0;
    state.stage2Idx = 0;
    state.roleScores = { tank: 0, dps: 0, support: 0 };
    state.subScores = {};
    state.userTraits = [];
    state.finalMatch = null;
    state.altMatches = [];
  }

  function computeFinalMatch() {
    const heroDb = OW_DATA.hero_db;
    let topRole = 'dps', maxRoleScore = -1;
    for (const [role, score] of Object.entries(state.roleScores)) {
      if (score > maxRoleScore) { maxRoleScore = score; topRole = role; }
    }
    const maxHits = {
      "铁壁": 4, "先锋": 3, "斗士": 3,
      "神准": 4, "奇袭": 2, "侦察": 2, "专业": 2,
      "战术": 4, "医疗": 3, "生存": 3
    };

    const validSubs = Object.keys(heroDb[topRole] || {});
    let candidates = [];
    let maxSubScore = -1;

    for (const sub of validSubs) {
      const hits = maxHits[sub] || 1;
      const score = (state.subScores[sub] || 0) / hits;
      if (score > maxSubScore) {
        maxSubScore = score;
        candidates = [sub];
      } else if (score === maxSubScore) {
        candidates.push(sub);
      }
    }

    const traitHash = state.userTraits.reduce((acc, t) => acc + t.length, 0)
      + state.userTraits.join('').split('').reduce((a, b) => a + b.charCodeAt(0), 0);

    // Use traitHash to fairly break ties among tied sub-roles
    let topSub = candidates[Math.abs(traitHash) % candidates.length] || validSubs[0] || '';

    let pool = (heroDb[topRole] || {})[topSub] || [];
    if (!pool.length) pool = Object.values(heroDb[topRole] || {}).flat();

    const heroKey = pool[Math.abs(traitHash) % pool.length] || pool[0] || '';
    state.finalMatch = { role: topRole, sub: topSub, key: heroKey };

    // === Compute alternative heroes ===
    // Build full role pool (all heroes in same role), exclude main hero
    const fullRolePool = Object.entries(heroDb[topRole] || {}).flatMap(([sub, heroes]) =>
      heroes.map(h => ({ key: h, sub }))
    ).filter(h => h.key !== heroKey);

    // Match percentages: deterministic but look organic
    const altPcts = [94.2, 87.6, 78.3];
    const alts = [];
    const usedKeys = new Set([heroKey]);
    for (let i = 0; i < 3 && i < fullRolePool.length; i++) {
      // Shift hash by prime offsets so each pick is different
      const offset = [17, 31, 53][i];
      const candidate = fullRolePool[Math.abs(traitHash + offset) % fullRolePool.length];
      // Avoid duplicates: linear probe
      let picked = null;
      for (let j = 0; j < fullRolePool.length; j++) {
        const c = fullRolePool[(Math.abs(traitHash + offset) + j) % fullRolePool.length];
        if (!usedKeys.has(c.key)) { picked = c; break; }
      }
      if (picked) { usedKeys.add(picked.key); alts.push({ ...picked, pct: altPcts[i] }); }
    }
    state.altMatches = alts;
  }

  function s1Q() { return OW_DATA.stage1_questions[state.lang] || OW_DATA.stage1_questions['zh'] || []; }
  function s2Q() { return OW_DATA.stage2_questions[state.lang] || OW_DATA.stage2_questions['zh'] || []; }

  // === DOM container ===
  const container = document.getElementById('ow-screen');

  // === Icons (inline SVG helpers) ===
  function chevronSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';
  }
  function globeSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
  }
  function barSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>';
  }
  function retrySVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>';
  }
  function userCheckSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><polyline points="16 11 18 13 22 9" stroke="#000" stroke-width="2"/></svg>';
  }
  function shareSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>';
  }
  function starSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l-1.5 5H5l4.5 3.3-1.7 5.2L12 13l4.2 3.5-1.7-5.2L19 8h-5.5z"/></svg>';
  }

  // === Lang bar ===
  function langBarHTML() {
    return `<div id="ow-lang-bar" style="display:flex;gap:0.5rem;align-items:center;background:rgba(20,22,30,0.85);padding:0.5rem 1rem;border-radius:99px;border:1px solid rgba(255,255,255,0.1);">
      ${globeSVG()}
      ${['zh', 'ja', 'en'].map(l =>
      `<button data-lang="${l}" style="padding:0.25rem 0.75rem;border-radius:99px;font-weight:900;font-size:0.8rem;border:none;cursor:pointer;transition:all 0.15s;background:${state.lang === l ? '#f97316' : 'transparent'};color:${state.lang === l ? '#000' : '#9ca3af'};">${l.toUpperCase()}</button>`
    ).join('')}
    </div>`;
  }

  // === Render Functions ===
  function render() {
    switch (state.step) {
      case 'welcome': renderWelcome(); break;
      case 'stage1': renderStage1(); break;
      case 'sub_result': renderSubResult(); break;
      case 'stage2': renderStage2(); break;
      case 'calculating': renderCalculating(); break;
      case 'final': renderFinal(); break;
    }
    bindEvents();
  }

  function renderWelcome() {
    container.innerHTML = `
    <div class="ow-anim-fade" style="min-height:80vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:3rem 1rem;position:relative;">
      <div style="position:absolute;top:1.5rem;right:1.5rem;">${langBarHTML()}</div>
      <div style="position:relative;margin-bottom:2rem;">
        <div style="position:absolute;inset:-3rem;background:rgba(249,115,22,0.08);filter:blur(60px);border-radius:50%;"></div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/1200px-Overwatch_circle_logo.svg.png"
             style="width:7rem;height:7rem;position:relative;z-index:1;filter:drop-shadow(0 0 20px rgba(249,115,22,0.5));" alt="OW" onerror="this.style.display='none'">
      </div>
      <h1 style="font-size:clamp(2.5rem,7vw,4.5rem);font-weight:900;font-style:italic;text-transform:uppercase;letter-spacing:-0.02em;color:#fff;margin-bottom:0.75rem;line-height:1.05;">${T('title')}</h1>
      <p style="color:#94a3b8;font-size:1rem;max-width:36rem;line-height:1.7;margin-bottom:3rem;">${T('subtitle')}</p>
      <button id="ow-start-btn" class="ow-btn-primary">${T('start')}</button>
    </div>`;
  }

  function renderStage1() {
    const qs = s1Q();
    if (!qs.length) { state.step = 'welcome'; render(); return; }
    const q = qs[state.stage1Idx];
    const progress = ((state.stage1Idx + 1) / qs.length) * 100;
    container.innerHTML = `
    <div class="ow-anim-slide" style="max-width:42rem;margin:0 auto;padding:3rem 1rem;min-height:80vh;display:flex;flex-direction:column;justify-content:center;">
      <div style="margin-bottom:2.5rem;">
        <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:0.75rem;">
          <span style="color:#f97316;font-weight:900;font-style:italic;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.2em;">${T('stage1')}</span>
          <span style="color:#64748b;font-family:monospace;font-size:0.75rem;">${state.stage1Idx + 1}/${qs.length}</span>
        </div>
        <div class="ow-progress-bar"><div class="ow-progress-fill" style="width:${progress}%;background:#f97316;"></div></div>
      </div>
      <h2 style="font-size:1.6rem;font-weight:800;color:#fff;margin-bottom:2rem;line-height:1.4;">${q.text}</h2>
      <div>
        ${q.opts.map((opt, i) =>
      `<button class="ow-option-btn" data-s1-idx="${i}">${opt.t}${chevronSVG()}</button>`
    ).join('')}
      </div>
    </div>`;
  }

  function renderSubResult() {
    if (!state.finalMatch) computeFinalMatch();
    const fm = state.finalMatch;
    const roleNames = T('roleNames') || {};
    const subNames = T('subNames') || {};
    const roleName = (roleNames && roleNames[fm.role]) || fm.role;
    const subName = (subNames && subNames[fm.sub]) || fm.sub;
    container.innerHTML = `
    <div class="ow-anim-fade" style="min-height:80vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:3rem 1rem;">
      <div style="background:#f97316;padding:1.5rem;border-radius:1.5rem;margin-bottom:2rem;transform:rotate(-3deg);box-shadow:0 0 40px rgba(249,115,22,0.4);">${barSVG()}</div>
      <p style="color:#64748b;font-weight:900;letter-spacing:0.3em;text-transform:uppercase;font-size:0.75rem;margin-bottom:0.75rem;">${T('subResultTitle')}</p>
      <h2 style="font-size:clamp(2rem,6vw,3.5rem);font-weight:900;font-style:italic;color:#fff;text-transform:uppercase;letter-spacing:-0.02em;margin-bottom:1.5rem;">
        ${roleName} <span style="color:#f97316;">— ${subName}</span>
      </h2>
      <p style="color:#94a3b8;max-width:34rem;line-height:1.7;margin-bottom:3rem;">${T('subResultDesc')}</p>
      <button id="ow-go-stage2-btn" class="ow-btn-secondary">${T('subResultBtn')}</button>
    </div>`;
  }

  function renderStage2() {
    const qs = s2Q();
    if (!qs.length) { state.step = 'calculating'; render(); return; }
    const q = qs[state.stage2Idx];
    const progress = ((state.stage2Idx + 1) / qs.length) * 100;
    container.innerHTML = `
    <div class="ow-anim-slide" style="max-width:42rem;margin:0 auto;padding:3rem 1rem;min-height:80vh;display:flex;flex-direction:column;justify-content:center;">
      <div style="margin-bottom:2.5rem;">
        <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:0.75rem;">
          <span style="color:#3b82f6;font-weight:900;font-style:italic;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.2em;">${T('stage2')}</span>
          <span style="color:#64748b;font-family:monospace;font-size:0.75rem;">${state.stage2Idx + 1}/${qs.length}</span>
        </div>
        <div class="ow-progress-bar"><div class="ow-progress-fill" style="width:${progress}%;background:#3b82f6;box-shadow:0 0 10px rgba(59,130,246,0.5);"></div></div>
      </div>
      <h2 style="font-size:1.6rem;font-weight:800;color:#fff;margin-bottom:2rem;line-height:1.4;">${q.text}</h2>
      <div>
        ${q.opts.map((opt, i) =>
      `<button class="ow-option-btn ow-stage2" data-s2-idx="${i}">${opt.t}${chevronSVG()}</button>`
    ).join('')}
      </div>
    </div>`;
  }

  function renderCalculating() {
    container.innerHTML = `
    <div class="ow-anim-fade" style="min-height:80vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
      <div style="position:relative;margin-bottom:3rem;">
        <div class="ow-spinner"></div>
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
          ${starSVG().replace('width="14"', 'width="28"').replace('height="14"', 'height="28"').replace('stroke="currentColor"', 'stroke="#f97316"')}
        </div>
      </div>
      <h2 style="font-size:1.5rem;font-weight:900;font-style:italic;text-transform:uppercase;letter-spacing:0.15em;color:#fff;">${T('calcTitle')}</h2>
    </div>`;
  }

  function renderFinal() {
    const fm = state.finalMatch;
    if (!fm) { resetState(); render(); return; }

    // === Record test completion (Removed for standalone open-source version) ===

    const heroName = (OW_DATA.hero_names[fm.key] || {})[state.lang] || fm.key;
    const flavorObj = OW_DATA.hero_flavor[fm.key] || OW_DATA.hero_flavor['default'] || {};
    const flavor = flavorObj[state.lang] || '';
    const roleNames = T('roleNames') || {};
    const subNames = T('subNames') || {};
    const roleName = roleNames[fm.role] || fm.role;
    const subName = subNames[fm.sub] || fm.sub;
    const uniqueTraits = [...new Set(state.userTraits)].slice(0, 6);

    container.innerHTML = `
    <div class="ow-anim-fade" style="max-width:56rem;margin:0 auto;padding:2rem 1rem 4rem;">
      <div id="ow-result-card-export" class="ow-result-card">
        <div class="ow-result-header"></div>
        <div class="hidden md:block" style="position:absolute;top:0;right:0;padding:2rem;opacity:0.06;pointer-events:none;">
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="1"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>
        </div>
        <div class="p-6 md:p-10 relative">
          <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <!-- Left side: Avatar & Name -->
            <div class="flex-none w-full md:w-52 flex flex-col items-center gap-2">
              <div class="ow-avatar-ring" style="width:8rem;height:8rem;">
                <div class="ow-avatar-inner" style="width:6.5rem;height:6.5rem;background-image:url('static/img/owtestico/${encodeURIComponent(fm.key)}.png'); background-size:cover; background-position:center; background-color:#1e212d; border-radius:50%;"></div>
              </div>
              <!-- Badge in normal flow, no absolute -->
              <div style="background:#0b0c10;border:2px solid #f97316;color:#f97316;padding:0.2rem 0.75rem;font-weight:900;font-style:italic;font-size:0.7rem;border-radius:0.5rem;text-transform:uppercase;white-space:nowrap;">MATCH 99.8%</div>
              <div style="text-align:center;width:100%;padding:0 0.25rem;">
                <p style="color:#f97316;font-weight:900;font-style:normal;letter-spacing:0.05em;text-transform:uppercase;font-size:0.55rem;margin-bottom:0.2rem;">${T('destinyHero')}</p>
                <!-- Hero name: clamp size for long names -->
                <div style="font-size:clamp(1.4rem,4vw,2.2rem);font-weight:900;font-style:italic;text-transform:uppercase;line-height:1.05;letter-spacing:-0.02em;color:#fff;margin-bottom:0.3rem;word-break:break-all;">${heroName}</div>
                <div style="display:inline-block;padding:0.2rem 0.7rem;background:rgba(30,33,45,1);border:1px solid rgba(255,255,255,0.1);border-radius:99px;color:#f97316;font-size:0.6rem;font-weight:900;text-transform:uppercase;letter-spacing:0.08em;white-space:nowrap;">
                  ${roleName} / ${subName}
                </div>
              </div>
            </div>

            <!-- Right side: Traits & Flavor Text -->
            <div class="flex-1 w-full flex flex-col gap-5">
              <div style="background:rgba(25,28,40,0.8);padding:1.5rem;border-radius:1rem;border:1px solid rgba(255,255,255,0.08);">
                <h4 style="display:flex;align-items:center;gap:0.5rem;color:#f97316;font-weight:900;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.15em;font-style:italic;margin-bottom:1rem;">
                  ${starSVG()} ${T('traitEval')}
                </h4>
                <div style="display:flex;flex-wrap:wrap;gap:0.6rem;">${uniqueTraits.map(t => {
      const traitMap = (OW_DATA.trait_names || {})[state.lang] || (OW_DATA.trait_names || {})['zh'] || {};
      const label = traitMap[t] || t.replace(/_/g, ' ');
      return `<span class="ow-tag" style="margin:0;">#${label}</span>`;
    }).join('')}</div>
              </div>
              <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6" style="background:linear-gradient(135deg, #f97316, #ea580c);padding:1.5rem;border-radius:1rem;">
                <div style="flex:1;">
                  <h4 style="color:rgba(0,0,0,0.7);font-weight:900;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.15em;font-style:italic;margin-bottom:0.5rem;">${T('evalArchive')}</h4>
                  <p style="color:#000;font-weight:700;font-size:0.9rem;line-height:1.6;margin:0;">${flavor}</p>
                </div>
                <!-- Action Button Container inside Flavor box -->
                <div class="sm:ml-4 flex-shrink-0 self-end sm:self-auto">
                  <button id="ow-share-btn" style="background:rgba(0,0,0,0.25);padding:1rem;border-radius:50%;border:none;cursor:pointer;transition:all 0.2s;color:#000;display:flex;align-items:center;justify-content:center;" onmouseover="this.style.background='rgba(0,0,0,0.6)';this.style.color='#f97316'" onmouseout="this.style.background='rgba(0,0,0,0.25)';this.style.color='#000'">
                    ${shareSVG().replace('width="20"', 'width="24"').replace('height="20"', 'height="24"')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Moved Retry Button OUTSIDE of Export Card -->
      <div style="display:flex;justify-content:center;margin-top:2.5rem;">
        <button id="ow-reset-btn" class="ow-retry-btn">
          ${retrySVG()} ${T('retry')}
        </button>
      </div>
      </div>

      ${state.altMatches.length ? `
      <div style="margin-top:2rem;">
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1.25rem;">
          <div style="flex:1;height:1px;background:rgba(255,255,255,0.08);"></div>
          <span style="color:#64748b;font-size:0.7rem;font-weight:900;text-transform:uppercase;letter-spacing:0.2em;white-space:nowrap;">${T('altHeroes')}</span>
          <div style="flex:1;height:1px;background:rgba(255,255,255,0.08);"></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${state.altMatches.map(alt => {
      const altName = (OW_DATA.hero_names[alt.key] || {})[state.lang] || alt.key;
      const altSubName = (T('subNames') || {})[alt.sub] || alt.sub;
      const pctInt = Math.round(alt.pct);
      return `<div style="background:rgba(15,17,25,0.9);border:1px solid rgba(255,255,255,0.08);border-radius:1.25rem;padding:1.25rem;text-align:center;position:relative;overflow:hidden;transition:border-color 0.2s;" 
              onmouseenter="this.style.borderColor='rgba(249,115,22,0.35)'" onmouseleave="this.style.borderColor='rgba(255,255,255,0.08)'">
              <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,rgba(249,115,22,${0.3 + (alt.pct - 78) / 65 * 0.5}),transparent);"></div>
              <div style="width:3.5rem;height:3.5rem;border-radius:50%;background:linear-gradient(135deg,rgba(30,33,45,1),rgba(20,23,34,1));border:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;margin:0 auto 0.9rem;background-image:url('static/img/owtestico/${encodeURIComponent(alt.key)}.png'); background-size:cover; background-position:center;">
              </div>
              <div style="font-size:1.1rem;font-weight:900;font-style:italic;text-transform:uppercase;color:#fff;letter-spacing:-0.01em;margin-bottom:0.4rem;">${altName}</div>
              <div style="font-size:0.65rem;color:#64748b;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.85rem;">${altSubName}</div>
              <div style="background:rgba(255,255,255,0.05);border-radius:99px;height:4px;margin-bottom:0.4rem;overflow:hidden;">
                <div style="height:100%;width:${alt.pct}%;background:linear-gradient(90deg,#c2410c,#f97316);border-radius:99px;transition:width 0.6s ease;"></div>
              </div>
              <div style="font-size:0.7rem;font-weight:900;color:#f97316;font-style:italic;">${alt.pct}%</div>
            </div>`;
    }).join('')}
        </div>
      </div>` : ''}
    </div>`;
  }

  // === Share Modal ===
  function showShareModal() {
    if (!window.html2canvas) {
      alert(state.lang === 'zh' ? '正在加载组件，请稍后再试...' : 'Loading, please wait...');
      return;
    }
    const tModal = {
      zh: { gen: '正在生成专属档案...', dl: '保存图片', sh: '分享至：', err: '生成失败，请重试' },
      ja: { gen: '専用アーカイブを作成中...', dl: '画像を保存', sh: 'シェア：', err: 'エラーが発生しました' },
      en: { gen: 'Generating Archive...', dl: 'Save Image', sh: 'Share via:', err: 'Generation failed' }
    };
    const tm = (k) => (tModal[state.lang] || tModal['en'])[k];

    const overlay = document.createElement('div');
    overlay.id = 'ow-share-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(11,12,16,0.92);backdrop-filter:blur(15px);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem 1rem;opacity:0;transition:opacity 0.3s;';

    overlay.innerHTML = `
      <button id="ow-share-close" style="position:absolute;top:1.5rem;right:1.5rem;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:50%;color:#94a3b8;cursor:pointer;padding:0.6rem;transition:all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)';this.style.color='#fff';" onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.color='#94a3b8';">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
      <div id="ow-share-content" style="max-width:40rem;width:100%;display:flex;flex-direction:column;align-items:center;transition:transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);transform:scale(0.95);">
        <div id="ow-share-img-coord" style="width:100%;min-height:300px;display:flex;align-items:center;justify-content:center;margin-bottom:2rem;position:relative;">
           <div class="ow-spinner"></div>
           <div style="position:absolute;color:#f97316;font-weight:900;font-style:italic;margin-top:7rem;letter-spacing:0.1em;text-transform:uppercase;">${tm('gen')}</div>
        </div>
        <div id="ow-share-actions" style="opacity:0;pointer-events:none;transition:opacity 0.5s;display:flex;flex-direction:column;align-items:center;gap:2rem;width:100%;">
          <button id="ow-share-dl" class="ow-btn-primary" style="padding:1rem 3rem;font-size:1.1rem;box-shadow:0 10px 30px rgba(249,115,22,0.3);">
             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="transform:skewX(10deg);"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
             <span style="transform:skewX(10deg);">${tm('dl')}</span>
          </button>
          <div style="text-align:center;">
             <div style="color:#64748b;font-weight:900;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.2em;margin-bottom:1rem;display:flex;align-items:center;justify-content:center;gap:1rem;">
                <div style="height:1px;width:2rem;background:rgba(255,255,255,0.1);"></div>
                ${tm('sh')}
                <div style="height:1px;width:2rem;background:rgba(255,255,255,0.1);"></div>
             </div>
             <div style="display:flex;gap:1.25rem;justify-content:center;">
               <button id="ow-share-tw" style="background:#000;border:1px solid rgba(255,255,255,0.1);color:#fff;width:3rem;height:3rem;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='#000'">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
               </button>
               <button id="ow-share-fb" style="background:#1877f2;border:none;color:#fff;width:3rem;height:3rem;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='#166fe5'" onmouseout="this.style.background='#1877f2'">
                 <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
               </button>
             </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      document.getElementById('ow-share-content').style.transform = 'scale(1)';
    });

    const closeOverlay = () => {
      overlay.style.opacity = '0';
      document.getElementById('ow-share-content').style.transform = 'scale(0.95)';
      setTimeout(() => { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 300);
    };
    document.getElementById('ow-share-close').addEventListener('click', closeOverlay);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeOverlay(); });

    // Build a dedicated off-screen export card with 100% fixed px sizes
    // (html2canvas does not support rem/vw/clamp, so we must use px only)
    const fm = state.finalMatch;
    const heroName = (OW_DATA.hero_names[fm.key] || {})[state.lang] || fm.key;
    const flavorObj = OW_DATA.hero_flavor[fm.key] || OW_DATA.hero_flavor['default'] || {};
    const flavor = flavorObj[state.lang] || '';
    const roleNames = T('roleNames') || {};
    const subNames = T('subNames') || {};
    const roleName = roleNames[fm.role] || fm.role;
    const subName = subNames[fm.sub] || fm.sub;
    const uniqueTraits = [...new Set(state.userTraits)].slice(0, 6);
    const traitMap = (OW_DATA.trait_names || {})[state.lang] || (OW_DATA.trait_names || {})['zh'] || {};
    const tagHTML = uniqueTraits.map(t => {
      const label = traitMap[t] || t.replace(/_/g, ' ');
      return `<span style="display:inline-block;padding:4px 12px;background:#1e212d;border:1px solid rgba(255,255,255,0.12);border-radius:6px;color:#e2e8f0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin:0;">#${label}</span>`;
    }).join('');

    const exportCard = document.createElement('div');
    exportCard.style.cssText = 'position:fixed;left:-9999px;top:-9999px;width:800px;background:linear-gradient(135deg,#0f1119,#161924);border-radius:20px;overflow:hidden;font-family:Inter,system-ui,sans-serif;';
    exportCard.innerHTML = `
      <div style="height:4px;background:linear-gradient(90deg,#c2410c,#f97316,#c2410c);"></div>
      <div style="display:flex;align-items:stretch;padding:28px 28px 28px 28px;gap:24px;">
        <!-- Left: avatar + info -->
        <div style="width:200px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:16px;">
          <div style="width:120px;height:120px;border-radius:50%;border:2px solid rgba(249,115,22,0.35);padding:6px;background:rgba(249,115,22,0.08);">
            <div style="width:108px;height:108px;border-radius:50%;background-image:url('static/img/owtestico/${encodeURIComponent(fm.key)}.png');background-size:cover;background-position:center;background-color:#1e212d;box-shadow:0 0 30px rgba(249,115,22,0.4);"></div>
          </div>
          <div style="background:#0b0c10;border:2px solid #f97316;color:#f97316;padding:3px 12px;font-weight:900;font-style:italic;font-size:12px;border-radius:6px;text-transform:uppercase;letter-spacing:1px;">MATCH 99.8%</div>
          <div style="text-align:center;">
            <div style="color:#f97316;font-weight:900;text-transform:uppercase;font-size:9px;letter-spacing:2px;margin-bottom:8px;">${T('destinyHero')}</div>
            <div style="font-size:28px;font-weight:900;font-style:italic;text-transform:uppercase;line-height:1.1;color:#fff;margin-bottom:16px;">${heroName}</div>
            <div style="display:inline-block;padding:4px 12px;background:rgba(30,33,45,1);border:1px solid rgba(255,255,255,0.1);border-radius:99px;color:#f97316;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:1px;">${roleName} / ${subName}</div>
          </div>
        </div>
        <!-- Right: traits + flavor -->
        <div style="flex:1;display:flex;flex-direction:column;gap:14px;min-width:0;">
          <div style="background:rgba(25,28,40,0.9);padding:18px;border-radius:12px;border:1px solid rgba(255,255,255,0.08);">
            <div style="font-size:10px;font-weight:900;color:#f97316;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">★ ${T('traitEval')}</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;">${tagHTML}</div>
          </div>
          <div style="background:linear-gradient(135deg,#f97316,#ea580c);padding:18px;border-radius:12px;flex:1;">
            <div style="font-size:10px;font-weight:900;color:rgba(0,0,0,0.6);text-transform:uppercase;letter-spacing:2px;margin-bottom:8px;">${T('evalArchive')}</div>
            <div style="font-size:14px;font-weight:700;color:#000;line-height:1.6;">${flavor}</div>
          </div>
        </div>
      </div>
      <div style="padding:8px 28px 16px;text-align:right;font-size:9px;color:rgba(255,255,255,0.2);letter-spacing:1px;text-transform:uppercase;">brocnbb.com · OW Destiny Hero Test</div>
    `;
    document.body.appendChild(exportCard);

    html2canvas(exportCard, {
      backgroundColor: '#0f1119',
      scale: 2,
      useCORS: true,
      logging: false,
      width: 800,
    }).then(canvas => {
      document.body.removeChild(exportCard);

      const imgData = canvas.toDataURL('image/jpeg', 0.95);

      const imgCoord = document.getElementById('ow-share-img-coord');
      imgCoord.innerHTML = `<img src="${imgData}" style="max-height:55vh;width:auto;max-width:100%;border-radius:1.5rem;box-shadow:0 20px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(249,115,22,0.3);animation:ow-fade-in 0.6s ease forwards;">`;

      const actions = document.getElementById('ow-share-actions');
      actions.style.opacity = '1';
      actions.style.pointerEvents = 'auto';

      document.getElementById('ow-share-dl').addEventListener('click', () => {
        const a = document.createElement('a');
        a.href = imgData;
        const heroName = (state.finalMatch || {}).key || 'hero';
        a.download = `ow-destiny-${heroName}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });

      const urlToShare = encodeURIComponent(window.location.origin + window.location.pathname);
      const shareTextMap = {
        zh: '我刚测试了我的《守望先锋》本命英雄，快来看看！',
        ja: '私のオーバーウォッチ運命のヒーローを診断しました！',
        en: 'I just found my Destiny Overwatch Hero! Check it out!'
      };
      const textToShare = encodeURIComponent(shareTextMap[state.lang] || shareTextMap['en']);

      document.getElementById('ow-share-tw').addEventListener('click', () => {
        window.open(`https://twitter.com/intent/tweet?text=${textToShare}&url=${urlToShare}`, '_blank', 'width=600,height=400');
      });

      document.getElementById('ow-share-fb').addEventListener('click', () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`, '_blank', 'width=600,height=400');
      });

    }).catch(err => {
      console.error('html2canvas error', err);
      const imgCoord = document.getElementById('ow-share-img-coord');
      imgCoord.innerHTML = `<div style="color:#ef4444;font-weight:700;">${tm('err')}</div>`;
    });
  }

  // === Bind all events via addEventListener (CSP-safe) ===
  function bindEvents() {
    // Share button
    const shareBtn = document.getElementById('ow-share-btn');
    if (shareBtn) shareBtn.addEventListener('click', showShareModal);
    // Lang buttons
    document.querySelectorAll('#ow-lang-bar [data-lang]').forEach(btn => {
      btn.addEventListener('click', function () {
        state.lang = this.getAttribute('data-lang');
        render();
      });
    });
    // Start button
    const startBtn = document.getElementById('ow-start-btn');
    if (startBtn) startBtn.addEventListener('click', () => { state.step = 'stage1'; render(); });

    // Stage 1 option buttons
    document.querySelectorAll('[data-s1-idx]').forEach(btn => {
      btn.addEventListener('click', function () {
        const idx = parseInt(this.getAttribute('data-s1-idx'));
        const qs = s1Q();
        const opt = qs[state.stage1Idx].opts[idx];
        state.roleScores[opt.r] = (state.roleScores[opt.r] || 0) + 5;
        (opt.s || []).forEach(s => { state.subScores[s] = (state.subScores[s] || 0) + 5; });
        if (state.stage1Idx < qs.length - 1) {
          state.stage1Idx++;
          render();
        } else {
          computeFinalMatch();
          state.step = 'sub_result';
          render();
        }
      });
    });

    // Go to stage2 button
    const goStage2 = document.getElementById('ow-go-stage2-btn');
    if (goStage2) goStage2.addEventListener('click', () => { state.step = 'stage2'; render(); });

    // Stage 2 option buttons
    document.querySelectorAll('[data-s2-idx]').forEach(btn => {
      btn.addEventListener('click', function () {
        const idx = parseInt(this.getAttribute('data-s2-idx'));
        const qs = s2Q();
        const opt = qs[state.stage2Idx].opts[idx];
        state.userTraits.push(...(opt.traits || []));
        if (state.stage2Idx < qs.length - 1) {
          state.stage2Idx++;
          render();
        } else {
          computeFinalMatch();

          // Preload hero avatar images during the 2.5s calculation animation
          // so they are immediately available on the result page.
          const imgKeysToPreload = [state.finalMatch.key, ...state.altMatches.map(a => a.key)];
          imgKeysToPreload.forEach(key => {
            const img = new Image();
            img.src = `static/img/owtestico/${encodeURIComponent(key)}.png`;
          });

          state.step = 'calculating';
          render();
          setTimeout(() => { state.step = 'final'; render(); }, 2500);
        }
      });
    });

    // Reset button
    const resetBtn = document.getElementById('ow-reset-btn');
    if (resetBtn) resetBtn.addEventListener('click', () => { resetState(); render(); });
  }

  // === Boot ===
  render();
})();

=======
﻿/**
 * OW Hero Test Engine
 * Reads data from #ow-data-json (application/json script tag, CSP-safe)
 * All event handlers bound with addEventListener, no inline onclick
 */
(function () {
  // === Embedded Data ===
  const OW_DATA = {
  "ui_text": {
    "zh": {
      "title": "特工本命档案",
      "subtitle": "该测试将通过两阶段算法锁定你的灵魂英雄。准备好接受评估了吗？",
      "start": "开始同步数据",
      "stage1": "阶段 01: 职责定位测算",
      "stage2": "阶段 02: 灵魂档案同步",
      "subResultTitle": "定位测算完成",
      "subResultDesc": "你的战术骨架已初步成型。现在，我们需要通过 10 道深度操作倾向题，为你匹配最终的灵魂契约英雄。",
      "subResultBtn": "进入终极匹配",
      "calcTitle": "正在解析英雄 DNA...",
      "destinyHero": "Destiny Hero Identified",
      "traitEval": "匹配特质评估",
      "evalArchive": "特工评价档案",
      "evalText": "你的战斗基因已觉醒！你的潜意识操作逻辑与该英雄完美重合。立刻分享此档案，召集队友开始行动！",
      "retry": "重新接入档案",
      "altHeroes": "其他高匹配度英雄",
      "roleNames": {
        "tank": "重装",
        "dps": "输出",
        "support": "支援"
      },
      "subNames": {
        "先锋": "先锋",
        "斗士": "斗士",
        "铁壁": "铁壁",
        "专业": "专业",
        "侦察": "侦察",
        "奇袭": "奇袭",
        "神准": "神准",
        "战术": "战术",
        "医疗": "医疗",
        "生存": "生存"
      }
    },
    "ja": {
      "title": "運命のヒーロー診断",
      "subtitle": "このテストは2段階のアルゴリズムであなたの運命のヒーローを特定します。評価の準備はいいですか？",
      "start": "データ同期開始",
      "stage1": "フェーズ 01: 役割ポジショニング",
      "stage2": "フェーズ 02: ソウルアーカイブ同期",
      "subResultTitle": "ポジショニング完了",
      "subResultDesc": "戦術の骨格が形成されました。次に、10の深い質問を通じて究極のヒーローをマッチングします。",
      "subResultBtn": "究極のマッチングへ",
      "calcTitle": "ヒーローDNAを解析中...",
      "destinyHero": "運命のヒーロー確認",
      "traitEval": "特性評価マッチ",
      "evalArchive": "エージェント評価アーカイブ",
      "evalText": "戦闘遺伝子が覚醒しました！あなたの潜在的な操作ロジックはこのヒーローと完全に一致します。アーカイブを共有し、仲間を集めましょう！",
      "retry": "アーカイブ再接続",
      "altHeroes": "他の高マッチヒーロー",
      "roleNames": {
        "tank": "タンク",
        "dps": "ダメージ",
        "support": "サポート"
      },
      "subNames": {
        "先锋": "ダイブ",
        "斗士": "ブロウラー",
        "铁壁": "アンカー",
        "专业": "スペシャリスト",
        "侦察": "偵察",
        "奇袭": "フランカー",
        "神准": "スナイパー",
        "战术": "タクティカル",
        "医疗": "ヒーラー",
        "生存": "サバイバル"
      }
    },
    "en": {
      "title": "Destiny Hero Test",
      "subtitle": "This test uses a two-stage algorithm to lock onto your soul hero. Ready for assessment?",
      "start": "Start Sync",
      "stage1": "Stage 01: Role Positioning",
      "stage2": "Stage 02: Soul Archive Sync",
      "subResultTitle": "Positioning Complete",
      "subResultDesc": "Your tactical framework is set. Now, we need 10 deep behavioral questions to match your ultimate destiny hero.",
      "subResultBtn": "Enter Final Match",
      "calcTitle": "Analyzing Hero DNA...",
      "destinyHero": "Destiny Hero Identified",
      "traitEval": "Trait Evaluation",
      "evalArchive": "Agent Eval Archive",
      "evalText": "Your combat genes have awakened! Your subconscious logic perfectly aligns with this hero. Share this archive and rally your team!",
      "retry": "Reconnect Archive",
      "altHeroes": "Other High-Match Heroes",
      "roleNames": {
        "tank": "Tank",
        "dps": "Damage",
        "support": "Support"
      },
      "subNames": {
        "先锋": "Dive",
        "斗士": "Brawler",
        "铁壁": "Anchor",
        "专业": "Specialist",
        "侦察": "Recon",
        "奇袭": "Flanker",
        "神准": "Sniper",
        "战术": "Tactical",
        "医疗": "Healer",
        "生存": "Survival"
      }
    }
  },
  "hero_db": {
    "tank": {
      "先锋": [
        "D.Va",
        "铁拳",
        "温斯顿",
        "破坏球"
      ],
      "斗士": [
        "奥丽莎",
        "查莉娅",
        "毛加",
        "路霸"
      ],
      "铁壁": [
        "拉玛刹",
        "渣客女王",
        "莱因哈特",
        "西格玛",
        "金驭",
        "骇灾"
      ]
    },
    "dps": {
      "专业": [
        "艾姆雷",
        "堡垒",
        "士兵76",
        "托比昂",
        "狂鼠",
        "秩序之光",
        "美"
      ],
      "侦察": [
        "回声",
        "弗雷娅",
        "法老之鹰",
        "黑影"
      ],
      "奇袭": [
        "安燃",
        "探奇",
        "斩仇",
        "死神",
        "源氏",
        "猎空"
      ],
      "神准": [
        "半藏",
        "麦克雷",
        "索杰恩",
        "艾什",
        "黑百合"
      ]
    },
    "support": {
      "战术": [
        "卢西奥",
        "安娜",
        "巴蒂斯特",
        "禅雅塔",
        "飞天猫"
      ],
      "医疗": [
        "天使",
        "生命之梭",
        "莫伊拉",
        "雾子"
      ],
      "生存": [
        "伊拉锐",
        "布里吉塔",
        "无漾",
        "朱诺",
        "瑞稀"
      ]
    }
  },
  "trait_names": {
    "zh": {
      "precision": "极致准度",
      "suppression": "覆盖伤害",
      "verticality": "垂直空间依赖",
      "ground_mobility": "地面机动",
      "stealth_evasion": "隐蔽消除",
      "frontal_brawl": "正面硬刚",
      "form_switch": "军械库大师",
      "single_focus": "领域专精者",
      "builder": "阵地大师",
      "pure_skill": "纯粹技术",
      "physics_control": "物理碰撞",
      "status_control": "状态控制",
      "dot_damage": "折磨消耗",
      "burst_execute": "瞬间处决",
      "projectile_curve": "变幻莫测",
      "hitscan_linear": "直来直去",
      "force_move": "强制干涉",
      "aoe_buff": "群体增益",
      "burst_ult": "瞬间爆发",
      "sustained_ult": "持续统治"
    },
    "ja": {
      "precision": "究極の精度",
      "suppression": "制圧射撃",
      "verticality": "垂直空間依存",
      "ground_mobility": "地上機動力",
      "stealth_evasion": "ステルス回避",
      "frontal_brawl": "正面突破",
      "form_switch": "武器マスター",
      "single_focus": "一意専心",
      "builder": "陣地マスター",
      "pure_skill": "純粋な技術",
      "physics_control": "物理衝突",
      "status_control": "状態異常",
      "dot_damage": "持続ダメージ",
      "burst_execute": "瞬間処刑",
      "projectile_curve": "予測不能",
      "hitscan_linear": "直線弾道",
      "force_move": "強制移動",
      "aoe_buff": "範囲バフ",
      "burst_ult": "瞬間火力",
      "sustained_ult": "持続支配"
    },
    "en": {
      "precision": "Extreme Precision",
      "suppression": "Covering Fire",
      "verticality": "Verticality",
      "ground_mobility": "Ground Mobility",
      "stealth_evasion": "Stealth & Evasion",
      "frontal_brawl": "Frontal Brawl",
      "form_switch": "Arsenal Master",
      "single_focus": "Single Focus",
      "builder": "Builder",
      "pure_skill": "Pure Skill",
      "physics_control": "Physics Control",
      "status_control": "Status Control",
      "dot_damage": "DoT Damage",
      "burst_execute": "Burst Execution",
      "projectile_curve": "Unpredictable",
      "hitscan_linear": "Linear Hitscan",
      "force_move": "Forced Movement",
      "aoe_buff": "AoE Buff",
      "burst_ult": "Burst Ultimate",
      "sustained_ult": "Sustained Control"
    }
  },
  "hero_names": {
    "D.Va": {
      "zh": "D.Va",
      "ja": "D.Va",
      "en": "D.Va"
    },
    "铁拳": {
      "zh": "末日铁拳",
      "ja": "ドゥームフィスト",
      "en": "Doomfist"
    },
    "温斯顿": {
      "zh": "温斯顿",
      "ja": "ウィンストン",
      "en": "Winston"
    },
    "破坏球": {
      "zh": "破坏球",
      "ja": "レッキング・ボール",
      "en": "Wrecking Ball"
    },
    "奥丽莎": {
      "zh": "奥丽莎",
      "ja": "オリーサ",
      "en": "Orisa"
    },
    "查莉娅": {
      "zh": "查莉娅",
      "ja": "ザリア",
      "en": "Zarya"
    },
    "毛加": {
      "zh": "毛加",
      "ja": "マウガ",
      "en": "Mauga"
    },
    "路霸": {
      "zh": "路霸",
      "ja": "ロードホッグ",
      "en": "Roadhog"
    },
    "拉玛刹": {
      "zh": "拉玛刹",
      "ja": "ラマットラ",
      "en": "Ramattra"
    },
    "渣客女王": {
      "zh": "渣客女王",
      "ja": "ジャンカー・クイーン",
      "en": "Junker Queen"
    },
    "莱因哈特": {
      "zh": "莱因哈特",
      "ja": "ラインハルト",
      "en": "Reinhardt"
    },
    "西格玛": {
      "zh": "西格玛",
      "ja": "シグマ",
      "en": "Sigma"
    },
    "金驭": {
      "zh": "金驭",
      "ja": "ドミナ",
      "en": "Domina"
    },
    "骇灾": {
      "zh": "骇灾",
      "ja": "ハザード",
      "en": "Hazard"
    },
    "堡垒": {
      "zh": "堡垒",
      "ja": "バスティオン",
      "en": "Bastion"
    },
    "士兵76": {
      "zh": "士兵: 76",
      "ja": "ソルジャー76",
      "en": "Soldier: 76"
    },
    "托比昂": {
      "zh": "托比昂",
      "ja": "トールビョーン",
      "en": "Torbjörn"
    },
    "狂鼠": {
      "zh": "狂鼠",
      "ja": "ジャンクラット",
      "en": "Junkrat"
    },
    "秩序之光": {
      "zh": "秩序之光",
      "ja": "シンメトラ",
      "en": "Symmetra"
    },
    "回声": {
      "zh": "回声",
      "ja": "エコー",
      "en": "Echo"
    },
    "法老之鹰": {
      "zh": "法老之鹰",
      "ja": "ファラ",
      "en": "Pharah"
    },
    "黑影": {
      "zh": "黑影",
      "ja": "ソンブラ",
      "en": "Sombra"
    },
    "探奇": {
      "zh": "探奇",
      "ja": "ベンチャー",
      "en": "Venture"
    },
    "死神": {
      "zh": "死神",
      "ja": "リーパー",
      "en": "Reaper"
    },
    "源氏": {
      "zh": "源氏",
      "ja": "ゲンジ",
      "en": "Genji"
    },
    "猎空": {
      "zh": "猎空",
      "ja": "トレーサー",
      "en": "Tracer"
    },
    "半藏": {
      "zh": "半藏",
      "ja": "ハンゾー",
      "en": "Hanzo"
    },
    "麦克雷": {
      "zh": "卡西迪",
      "ja": "キャスディ",
      "en": "Cassidy"
    },
    "索杰恩": {
      "zh": "索杰恩",
      "ja": "ソジョーン",
      "en": "Sojourn"
    },
    "艾什": {
      "zh": "艾什",
      "ja": "アッシュ",
      "en": "Ashe"
    },
    "黑百合": {
      "zh": "黑百合",
      "ja": "ウィドウメイカー",
      "en": "Widowmaker"
    },
    "卢西奥": {
      "zh": "卢西奥",
      "ja": "ルシオ",
      "en": "Lúcio"
    },
    "安娜": {
      "zh": "安娜",
      "ja": "アナ",
      "en": "Ana"
    },
    "巴蒂斯特": {
      "zh": "巴蒂斯特",
      "ja": "バティスト",
      "en": "Baptiste"
    },
    "禅雅塔": {
      "zh": "禅雅塔",
      "ja": "ゼニヤッタ",
      "en": "Zenyatta"
    },
    "天使": {
      "zh": "天使",
      "ja": "マーシー",
      "en": "Mercy"
    },
    "生命之梭": {
      "zh": "生命之梭",
      "ja": "ライフウィーバー",
      "en": "Lifeweaver"
    },
    "莫伊拉": {
      "zh": "莫伊拉",
      "ja": "モイラ",
      "en": "Moira"
    },
    "雾子": {
      "zh": "雾子",
      "ja": "キリコ",
      "en": "Kiriko"
    },
    "伊拉锐": {
      "zh": "伊拉锐",
      "ja": "イラリー",
      "en": "Illari"
    },
    "布里吉塔": {
      "zh": "布里吉塔",
      "ja": "ブリギッテ",
      "en": "Brigitte"
    },
    "朱诺": {
      "zh": "朱诺",
      "ja": "ジュノ",
      "en": "Juno"
    },
    "艾姆雷": {
      "zh": "艾姆雷",
      "ja": "エムレ",
      "en": "Emre"
    },
    "弗雷娅": {
      "zh": "弗雷娅",
      "ja": "フレイヤ",
      "en": "Freya"
    },
    "安燃": {
      "zh": "安燃",
      "ja": "アンラン",
      "en": "Enkindle"
    },
    "斩仇": {
      "zh": "斩仇",
      "ja": "斬仇",
      "en": "Vendetta"
    },
    "飞天猫": {
      "zh": "飞天猫",
      "ja": "ジェットパック・キャット",
      "en": "Jetpack Cat"
    },
    "无漾": {
      "zh": "无漾",
      "ja": "無漾",
      "en": "Wuyang"
    },
    "瑞稀": {
      "zh": "瑞稀",
      "ja": "瑞稀",
      "en": "Mizuki"
    },
    "美": {
      "zh": "美",
      "ja": "メイ",
      "en": "Mei"
    }
  },
  "hero_flavor": {
    "D.Va": {
      "zh": "你节奏敏锐，擅长快速判断与果断出击。像D.Va一样，你在高压局势中依然从容，喜欢掌控空中与前线节奏。",
      "ja": "あなたは判断が速く、決断力に優れています。D.Vaのように高圧な状況でも冷静で、空中と前線の主導権を握るタイプです。",
      "en": "You are quick-minded and decisive. Like D.Va, you stay composed under pressure and love controlling both the skies and the frontline tempo."
    },
    "铁拳": {
      "zh": "你充满进攻欲望，喜欢用力量改写局势。精准切入与爆发伤害，是你最耀眼的武器。",
      "ja": "あなたは攻撃的で、力で状況を切り開くタイプ。正確なエントリーと爆発力が最大の武器です。",
      "en": "You thrive on aggression and reshape fights with raw power. Precision dives and burst damage define your playstyle."
    },
    "温斯顿": {
      "zh": "你拥有领导气质，擅长为团队打开突破口。跳跃与控制节奏，是你带领队友前进的方式。",
      "ja": "あなたはリーダー気質で、突破口を作るのが得意。ジャンプとテンポコントロールで仲間を導きます。",
      "en": "You have natural leadership. You create openings for your team and guide engagements with smart jumps and tempo control."
    },
    "破坏球": {
      "zh": "你思维灵活，行动迅速。不断骚扰与扰乱敌阵，是你独特的存在方式。",
      "ja": "あなたは柔軟で素早い思考の持ち主。継続的なハラスと撹乱があなたの魅力です。",
      "en": "You are agile and unpredictable. Constant disruption and pressure are your signature strengths."
    },
    "奥丽莎": {
      "zh": "你稳重可靠，是团队的坚实支柱。你喜欢正面承压，用坚韧换取胜利。",
      "ja": "あなたは堅実で信頼できる存在。正面で耐え、勝利へと導きます。",
      "en": "You are steady and dependable. You anchor the frontline and endure pressure for victory."
    },
    "查莉娅": {
      "zh": "你相信配合与能量的积累。越是逆境，你越强大。",
      "ja": "あなたは連携とエネルギー管理を重視します。逆境ほど強くなるタイプです。",
      "en": "You believe in synergy and energy buildup. The tougher the fight, the stronger you become."
    },
    "毛加": {
      "zh": "你天生压迫感十足，正面对抗是你的舞台。",
      "ja": "あなたは圧倒的な存在感を持ち、正面対決を好みます。",
      "en": "You radiate intimidation. Head-on battles are where you shine."
    },
    "路霸": {
      "zh": "你擅长抓住失误，一击定胜负。",
      "ja": "あなたはミスを逃さず、一瞬で決着をつけます。",
      "en": "You capitalize on mistakes instantly, turning single picks into fight wins."
    },
    "拉玛刹": {
      "zh": "你善于切换形态，应对不同局势。",
      "ja": "あなたは状況に応じて柔軟に戦術を変えます。",
      "en": "You adapt your form to fit the situation, shifting strategy as needed."
    },
    "渣客女王": {
      "zh": "你渴望近战对决，用侵略性掌控节奏。",
      "ja": "あなたは近接戦を好み、攻撃的に主導権を握ります。",
      "en": "You crave close combat and dominate through relentless aggression."
    },
    "莱因哈特": {
      "zh": "你守护团队，是正面战场的象征。",
      "ja": "あなたは仲間を守る象徴的な存在です。",
      "en": "You are the symbol of protection, leading the charge with courage."
    },
    "西格玛": {
      "zh": "你冷静理性，掌控空间与节奏。",
      "ja": "あなたは冷静で、空間支配を得意とします。",
      "en": "You are composed and analytical, mastering space control."
    },
    "金驭": {
      "zh": "你善于防守反击，以耐心取胜。",
      "ja": "あなたは守りから反撃へと繋げる戦術家です。",
      "en": "You excel at defensive setups that transition into decisive counterplays."
    },
    "骇灾": {
      "zh": "你沉着稳固，是团队最安心的存在。",
      "ja": "あなたは安定感のある守護者です。",
      "en": "You bring stability and reassurance to your team."
    },
    "艾姆雷": {
      "zh": "你持续输出稳定，是火力担当。",
      "ja": "あなたは安定した火力を提供します。",
      "en": "You provide consistent damage and reliable pressure."
    },
    "堡垒": {
      "zh": "你重视阵地与压制力。",
      "ja": "あなたは陣地制圧を重視します。",
      "en": "You thrive in fortified positions and suppress enemies relentlessly."
    },
    "士兵76": {
      "zh": "你全面均衡，适应性极强。",
      "ja": "あなたはバランス型で適応力が高いです。",
      "en": "You are versatile and adaptable in every fight."
    },
    "托比昂": {
      "zh": "你善于布局与控制空间。",
      "ja": "あなたは配置戦略が得意です。",
      "en": "You control space through smart positioning and setups."
    },
    "狂鼠": {
      "zh": "你思维跳跃，爆发力十足。",
      "ja": "あなたは独創的で爆発力があります。",
      "en": "You are chaotic and explosive, thriving in unpredictability."
    },
    "秩序之光": {
      "zh": "你追求完美与结构感。",
      "ja": "あなたは秩序と完成度を求めます。",
      "en": "You seek structure and precision in your engagements."
    },
    "回声": {
      "zh": "你适应能力极强，擅长变化。",
      "ja": "あなたは適応力に優れています。",
      "en": "You adapt swiftly and exploit opportunities."
    },
    "弗雷娅": {
      "zh": "你冷静观察，伺机而动。",
      "ja": "あなたは冷静に機会を待ちます。",
      "en": "You observe patiently and strike at the right moment."
    },
    "法老之鹰": {
      "zh": "你喜欢空中压制与爆发输出。",
      "ja": "あなたは空中戦を好みます。",
      "en": "You dominate from above with explosive damage."
    },
    "黑影": {
      "zh": "你擅长信息战与干扰。",
      "ja": "あなたは情報戦の達人です。",
      "en": "You excel in disruption and information control."
    },
    "安燃": {
      "zh": "你敏锐灵活，擅长瞬间击破。",
      "ja": "あなたは素早く鋭い攻撃をします。",
      "en": "You rely on speed and sharp execution."
    },
    "探奇": {
      "zh": "你善于潜行与爆发。",
      "ja": "あなたは奇襲を得意とします。",
      "en": "You master ambushes and sudden bursts."
    },
    "斩仇": {
      "zh": "你冷静果断，一击必杀。",
      "ja": "あなたは冷静で決定力があります。",
      "en": "You strike with calm precision."
    },
    "死神": {
      "zh": "你在近战中无人能挡。",
      "ja": "あなたは近接戦の支配者です。",
      "en": "You dominate in close-range combat."
    },
    "源氏": {
      "zh": "你节奏感强，追求极限操作。",
      "ja": "あなたはスピードと技巧を追求します。",
      "en": "You chase mastery and mechanical perfection."
    },
    "猎空": {
      "zh": "你灵动迅捷，掌控时间与空间。",
      "ja": "あなたは俊敏で機動力があります。",
      "en": "You bend space and tempo with agility."
    },
    "半藏": {
      "zh": "你冷静精准，一箭致命。",
      "ja": "あなたは冷静で正確です。",
      "en": "You value precision and decisive shots."
    },
    "麦克雷": {
      "zh": "你沉稳自信，枪法凌厉。",
      "ja": "あなたは自信と安定感があります。",
      "en": "You bring confidence and lethal accuracy."
    },
    "索杰恩": {
      "zh": "你爆发与节奏并存。",
      "ja": "あなたは爆発力とテンポを両立します。",
      "en": "You combine burst power with rhythm control."
    },
    "艾什": {
      "zh": "你优雅冷静，远程掌控战局。",
      "ja": "あなたは優雅で冷静です。",
      "en": "You command the battlefield from range with style."
    },
    "黑百合": {
      "zh": "你耐心等待，一击定局。",
      "ja": "あなたは忍耐強いスナイパーです。",
      "en": "You wait patiently for the perfect shot."
    },
    "卢西奥": {
      "zh": "你节奏鲜明，团队灵魂人物。",
      "ja": "あなたはチームの鼓動です。",
      "en": "You are the heartbeat of the team."
    },
    "安娜": {
      "zh": "你理性沉稳，远程守护。",
      "ja": "あなたは冷静な守護者です。",
      "en": "You protect your team with calm precision."
    },
    "巴蒂斯特": {
      "zh": "你兼具进攻与支援。",
      "ja": "あなたは攻守両立型です。",
      "en": "You balance offense and support seamlessly."
    },
    "禅雅塔": {
      "zh": "你洞察战局，精神专注。",
      "ja": "あなたは洞察力があります。",
      "en": "You bring clarity and focus to every fight."
    },
    "飞天猫": {
      "zh": "你机动灵活，支援节奏流畅。",
      "ja": "あなたは機動力のある支援です。",
      "en": "You move fluidly while supporting your allies."
    },
    "天使": {
      "zh": "你温柔坚定，是团队后盾。",
      "ja": "あなたは優しくも強い存在です。",
      "en": "You are compassionate yet resilient."
    },
    "生命之梭": {
      "zh": "你善于调度与保护。",
      "ja": "あなたは守護と調整が得意です。",
      "en": "You excel at repositioning and safeguarding allies."
    },
    "莫伊拉": {
      "zh": "你攻守转换自如。",
      "ja": "あなたは攻守を自在に切り替えます。",
      "en": "You shift between healing and damage effortlessly."
    },
    "雾子": {
      "zh": "你反应迅速，守护关键时刻。",
      "ja": "あなたは素早い反応で守ります。",
      "en": "You save allies in critical moments."
    },
    "伊拉锐": {
      "zh": "你自信独立，兼具火力与恢复。",
      "ja": "あなたは自立心が強い支援です。",
      "en": "You stand strong while sustaining your team."
    },
    "布里吉塔": {
      "zh": "你勇敢坚定，前线守护者。",
      "ja": "あなたは勇敢な守護者です。",
      "en": "You defend your team up close with courage."
    },
    "无漾": {
      "zh": "你冷静分析，稳定输出支援。",
      "ja": "あなたは安定した支援を提供します。",
      "en": "You provide steady and calculated support."
    },
    "朱诺": {
      "zh": "你灵巧细腻，重视团队配合。",
      "ja": "あなたは繊細で協調性があります。",
      "en": "You value coordination and subtle impact."
    },
    "瑞稀": {
      "zh": "你善于在危机中保持冷静。",
      "ja": "あなたは危機でも落ち着いています。",
      "en": "You stay calm and dependable in chaos."
    },
    "default": {
      "zh": "你是多才多艺的战术大师，能够完美适应各种复杂的局势。",
      "ja": "あなたは多才な戦術の達人であり、あらゆる複雑な状況に完璧に適応します。",
      "en": "You are a versatile tactician, perfectly adapting to any complex situation."
    },
    "美": {
      "zh": "你善于控场与分割战场，是令敌人胆寒的极寒阵地专家。",
      "ja": "あなたは戦場を分割しコントロールする、敵が恐れる極寒の専門家です。",
      "en": "You excel at area control and isolating targets, freezing enemies in their tracks."
    }
  },
  "stage1_questions": {
    "zh": [
      {
        "text": "当团战毫无征兆地爆发时，你的第一直觉是？",
        "opts": [
          {
            "t": "顶在最前面吸收火力屏蔽危险，或者强行撕裂对方的阵型",
            "r": "tank",
            "s": [
              "铁壁",
              "先锋"
            ]
          },
          {
            "t": "寻找高台或侧翼盲区，捕捉敌方脆皮露出的致命破绽",
            "r": "dps",
            "s": [
              "神准",
              "奇袭"
            ]
          },
          {
            "t": "纵观全局走位，确保自己在安全位置第一时间给出救援与增益",
            "r": "support",
            "s": [
              "战术",
              "医疗"
            ]
          }
        ]
      },
      {
        "text": "面对敌方两到三人的猛烈集火，你通常如何应对？",
        "opts": [
          {
            "t": "举起护盾/开启高额减伤，像座大山一样硬扛下所有的恶意",
            "r": "tank",
            "s": [
              "铁壁",
              "斗士"
            ]
          },
          {
            "t": "利用极高的机动性疯狂穿梭拉扯，或者干脆进入隐蔽状态",
            "r": "dps",
            "s": [
              "侦察",
              "奇袭"
            ]
          },
          {
            "t": "瞬间交出核心保人/自保技能化解危机，呼叫队友互相掩护反打",
            "r": "support",
            "s": [
              "生存",
              "医疗"
            ]
          }
        ]
      },
      {
        "text": "你最享受在对局中获得哪种正向反馈？",
        "opts": [
          {
            "t": "把敌人逼进死角，用庞大的体型和控制能力碾压他们的挣扎",
            "r": "tank",
            "s": [
              "斗士",
              "先锋"
            ]
          },
          {
            "t": "听着清脆的“叮叮”爆头音效，或者打出华丽连招瞬间秒杀目标",
            "r": "dps",
            "s": [
              "神准",
              "专业"
            ]
          },
          {
            "t": "在极限血量下救下残血队友，用一次精准的技能彻底扭转必败的战局",
            "r": "support",
            "s": [
              "战术",
              "生存"
            ]
          }
        ]
      },
      {
        "text": "你在游戏进程中最关注的“战地资源”是什么？",
        "opts": [
          {
            "t": "我的护盾值、护甲健康度，以及核心开团技能的冷却进度",
            "r": "tank",
            "s": [
              "铁壁",
              "先锋"
            ]
          },
          {
            "t": "绝佳的安全输出站位，以及子弹匣/爆发性输出技能的完美循环",
            "r": "dps",
            "s": [
              "专业",
              "神准"
            ]
          },
          {
            "t": "所有队友的生命线，以及关键救命技能捏在手里的绝对威慑力",
            "r": "support",
            "s": [
              "医疗",
              "战术"
            ]
          }
        ]
      },
      {
        "text": "如果输掉了一波关键加时团战，你更倾向于复盘思考哪点？",
        "opts": [
          {
            "t": "我的身板不够硬/开团不够果断，没给身后的队友拉扯出足够的输出空间",
            "r": "tank",
            "s": [
              "铁壁",
              "斗士"
            ]
          },
          {
            "t": "我的关键枪马了，没能在第一时间集火蒸发掉对方的战术核心",
            "r": "dps",
            "s": [
              "神准",
              "侦察"
            ]
          },
          {
            "t": "我的技能交早或交晚了，眼睁睁看着队伍里最重要的那个人倒下",
            "r": "support",
            "s": [
              "生存",
              "战术"
            ]
          }
        ]
      }
    ],
    "ja": [
      {
        "text": "集団戦が不意に発生した時、あなたの第一直感は？",
        "opts": [
          {
            "t": "最前線でフォーカスを集めて危険を遮断するか、強引に敵の陣形を引き裂く",
            "r": "tank",
            "s": [
              "铁壁",
              "先锋"
            ]
          },
          {
            "t": "高台や側面の死角を探し、敵の脆いヒーローが見せる致命的な隙を突く",
            "r": "dps",
            "s": [
              "神准",
              "奇袭"
            ]
          },
          {
            "t": "全体を見渡し、安全な位置から直ちに救援やバフを与える",
            "r": "support",
            "s": [
              "战术",
              "医疗"
            ]
          }
        ]
      },
      {
        "text": "敵2〜3人からの激しいフォーカスを受けた時、通常どう対処する？",
        "opts": [
          {
            "t": "シールドを張るか高いダメージ軽減を発動し、山のように全ての悪意を受け止める",
            "r": "tank",
            "s": [
              "铁壁",
              "斗士"
            ]
          },
          {
            "t": "極めて高い機動力を活かして激しく駆け回るか、いっそステルス状態に入る",
            "r": "dps",
            "s": [
              "侦察",
              "奇袭"
            ]
          },
          {
            "t": "瞬時に自身の命や味方を守るコアスキルを使い危機を打破し、味方にカバーしてもらう",
            "r": "support",
            "s": [
              "生存",
              "医疗"
            ]
          }
        ]
      },
      {
        "text": "試合中、どのようなポジティブなフィードバックを一番楽しむ？",
        "opts": [
          {
            "t": "敵を死角に追い詰め、巨大な体型とCC（行動阻害）で圧倒する",
            "r": "tank",
            "s": [
              "斗士",
              "先锋"
            ]
          },
          {
            "t": "澄んだHS音を聞くか、華麗なコンボでターゲットを一瞬で倒す",
            "r": "dps",
            "s": [
              "神准",
              "专业"
            ]
          },
          {
            "t": "ミリ残りの味方を救い、的確なスキル1つで負け確の戦局を完全に覆す",
            "r": "support",
            "s": [
              "战术",
              "生存"
            ]
          }
        ]
      },
      {
        "text": "ゲーム中、あなたが最も気にする「戦場のリソース」は何？",
        "opts": [
          {
            "t": "自身のシールド値、アーマーの健康状態、そしてイニシエートスキルのクールダウン",
            "r": "tank",
            "s": [
              "铁壁",
              "先锋"
            ]
          },
          {
            "t": "絶好の安全なダメージ出力ポジション、そして弾倉/瞬間火力スキルの完璧なサイクル",
            "r": "dps",
            "s": [
              "专业",
              "神准"
            ]
          },
          {
            "t": "全味方の生命線、そして切り札となる救命スキルを握っていることによる絶対的な抑止力",
            "r": "support",
            "s": [
              "医疗",
              "战术"
            ]
          }
        ]
      },
      {
        "text": "大事なオーバータイムの集団戦で負けた時、どの点を振り返る傾向にある？",
        "opts": [
          {
            "t": "自分が十分硬くなかった/飛び込みがためらわれたせいで、味方に十分なスペースを作れなかった",
            "r": "tank",
            "s": [
              "铁壁",
              "斗士"
            ]
          },
          {
            "t": "大事な一発を外し、第一时间に敵の戦術の要を溶かすことができなかった",
            "r": "dps",
            "s": [
              "神准",
              "侦察"
            ]
          },
          {
            "t": "スキルのタイミングが早すぎた、または遅すぎたせいで、チームで最も重要な人物が倒れるのを見てしまった",
            "r": "support",
            "s": [
              "生存",
              "战术"
            ]
          }
        ]
      }
    ],
    "en": [
      {
        "text": "When a team fight erupts without warning, your first instinct is to:",
        "opts": [
          {
            "t": "Hold the frontline to absorb fire, or forcefully tear apart the enemy formation.",
            "r": "tank",
            "s": [
              "铁壁",
              "先锋"
            ]
          },
          {
            "t": "Find high ground or a flank, catching out squishy enemies making a fatal mistake.",
            "r": "dps",
            "s": [
              "神准",
              "奇袭"
            ]
          },
          {
            "t": "Survey the entire layout, ensuring you're safe to immediately provide heals and buffs.",
            "r": "support",
            "s": [
              "战术",
              "医疗"
            ]
          }
        ]
      },
      {
        "text": "Faced with heavy focus fire from multiple enemies, how do you usually respond?",
        "opts": [
          {
            "t": "Raise shields or pop damage mitigation, taking all the malice like a mountain.",
            "r": "tank",
            "s": [
              "铁壁",
              "斗士"
            ]
          },
          {
            "t": "Use extreme mobility to zip around wildly, or straight up enter stealth.",
            "r": "dps",
            "s": [
              "侦察",
              "奇袭"
            ]
          },
          {
            "t": "Instantly burn your core survival/save cooldown to defuse the crisis and call for peel.",
            "r": "support",
            "s": [
              "生存",
              "医疗"
            ]
          }
        ]
      },
      {
        "text": "What kind of positive feedback do you enjoy the most in a match?",
        "opts": [
          {
            "t": "Pinning enemies into a corner, crushing them with sheer size and crowd control.",
            "r": "tank",
            "s": [
              "斗士",
              "先锋"
            ]
          },
          {
            "t": "Hearing the crisp 'dink' of headshots, or executing a flashy one-shot combo.",
            "r": "dps",
            "s": [
              "神准",
              "专业"
            ]
          },
          {
            "t": "Saving a teammate at absolute 1 HP, completely reversing a lost fight with one precise skill.",
            "r": "support",
            "s": [
              "战术",
              "生存"
            ]
          }
        ]
      },
      {
        "text": "During the game, which 'battlefield resources' do you focus on the most?",
        "opts": [
          {
            "t": "My shield health, armor status, and the cooldown of my main engage ability.",
            "r": "tank",
            "s": [
              "铁壁",
              "先锋"
            ]
          },
          {
            "t": "The absolute best safe positioning, and perfecting the cycle of my burst damage rotations.",
            "r": "dps",
            "s": [
              "专业",
              "神准"
            ]
          },
          {
            "t": "The lifelines of all teammates, and the absolute deterrence of holding onto key saving cooldowns.",
            "r": "support",
            "s": [
              "医疗",
              "战术"
            ]
          }
        ]
      },
      {
        "text": "If you lose a clutch overtime team fight, what do you tend to reflect on?",
        "opts": [
          {
            "t": "I wasn't tanky enough or my engage wasn't decisive, failed to make space for my team.",
            "r": "tank",
            "s": [
              "铁壁",
              "斗士"
            ]
          },
          {
            "t": "I whiffed the crucial shot and failed to instantly burst down their tactical core.",
            "r": "dps",
            "s": [
              "神准",
              "侦察"
            ]
          },
          {
            "t": "I used my skills too early or too late, helplessly watching the most important teammate die.",
            "r": "support",
            "s": [
              "生存",
              "战术"
            ]
          }
        ]
      }
    ]
  },
  "stage2_questions": {
    "zh": [
      {
        "text": "关于输出的精确度，你更偏好哪一种？",
        "opts": [
          {
            "t": "极致准度：偏爱单发高伤，要求枪枪到肉甚至首级的完美跟枪",
            "traits": [
              "precision"
            ]
          },
          {
            "t": "覆盖伤害：享受大范围溅射、火力压制或倾泻弹药带来的阵地威慑",
            "traits": [
              "suppression"
            ]
          }
        ]
      },
      {
        "text": "你对战场的“空间利用”有什么执念？",
        "opts": [
          {
            "t": "垂直空间依赖：渴望能在天上飞、长时间浮空或从制高点降维打击对面",
            "traits": [
              "verticality"
            ]
          },
          {
            "t": "地面机动：更喜欢脚踏实地，在平地、狭隙或掩体之间极速穿梭",
            "traits": [
              "ground_mobility"
            ]
          }
        ]
      },
      {
        "text": "遇到致命杀机时，你最希望拥有的生存手段是？",
        "opts": [
          {
            "t": "隐蔽消除：遁地穿行或直接隐身退出战场，让敌人丢失目标",
            "traits": [
              "stealth_evasion"
            ]
          },
          {
            "t": "正面硬刚：直接用肉身格挡伤害、反弹子弹或狂暴吸血不死",
            "traits": [
              "frontal_brawl"
            ]
          }
        ]
      },
      {
        "text": "你喜欢怎样的操作手感？",
        "opts": [
          {
            "t": "军械库大师：自由切换武器模式或身体形态，适应所有复杂的战局",
            "traits": [
              "form_switch"
            ]
          },
          {
            "t": "领域专精者：一套固定的技能组合用到极致，不搞花里胡哨的变身",
            "traits": [
              "single_focus"
            ]
          }
        ]
      },
      {
        "text": "你希望在战场上拥有额外的“死物帮手”吗？",
        "opts": [
          {
            "t": "阵地大师：喜欢建造自动攻击的炮台、传送门或固定的治疗塔进行防守",
            "traits": [
              "builder"
            ]
          },
          {
            "t": "纯粹技术：不需要造任何东西，完全依靠自己的枪法、走位和技能",
            "traits": [
              "pure_skill"
            ]
          }
        ]
      },
      {
        "text": "你喜欢如何掌控且“折磨”你的敌人？",
        "opts": [
          {
            "t": "物理碰撞：用纯粹的动能将他们击退、重力抓取或摁在墙上剧烈摩擦",
            "traits": [
              "physics_control"
            ]
          },
          {
            "t": "状态控制：通过远距离麻醉、禁疗、减速等手段隔空剥夺他们的战斗力",
            "traits": [
              "status_control"
            ]
          }
        ]
      },
      {
        "text": "你更倾向于哪种带来痛苦的攻击节奏？",
        "opts": [
          {
            "t": "折磨消耗：利用点燃、毒素、吸血等特殊状态，让敌人在缓慢流血中绝望",
            "traits": [
              "dot_damage"
            ]
          },
          {
            "t": "瞬间处决：简单粗暴的瞬间爆发，一枪或一套连招直接送回老家",
            "traits": [
              "burst_execute"
            ]
          }
        ]
      },
      {
        "text": "对于武器的子弹发射，你有什么独特的“物理偏好”吗？",
        "opts": [
          {
            "t": "变幻莫测：喜欢弹道折射、子弹变向，利用战场几何学打出神奇攻击",
            "traits": [
              "projectile_curve"
            ]
          },
          {
            "t": "直来直去：喜欢常规的即时命中或者笔直飞行的常规弹道",
            "traits": [
              "hitscan_linear"
            ]
          }
        ]
      },
      {
        "text": "作为一个能绝境救护的关键人物，你喜欢如何“保命/救人”？",
        "opts": [
          {
            "t": "强制干涉：哪怕队友不同意，我也要把陷入危险的他们强行拽回安全区",
            "traits": [
              "force_move"
            ]
          },
          {
            "t": "群体增益：瞬间开启光环，提供大范围无敌、无死角加速或高额抬血反打",
            "traits": [
              "aoe_buff"
            ]
          }
        ]
      },
      {
        "text": "最后，按下你终极技能（大招）的那个瞬间，你的终极期待是？",
        "opts": [
          {
            "t": "瞬间爆发：按下去就能极速清场或蒸发对手，追求瞬间多杀的快感",
            "traits": [
              "burst_ult"
            ]
          },
          {
            "t": "持续统治：大幅强化自身状态、持续造成大范围干扰或改变战场规则",
            "traits": [
              "sustained_ult"
            ]
          }
        ]
      }
    ],
    "ja": [
      {
        "text": "出力の精度について、どちらが好み？",
        "opts": [
          {
            "t": "究極の精度：単発高ダメージを好み、一発一発の命中にこだわる",
            "traits": [
              "precision"
            ]
          },
          {
            "t": "制圧射撃：広範囲ダメージや火力制圧、弾薬をばら撒く陣地威嚇を楽しむ",
            "traits": [
              "suppression"
            ]
          }
        ]
      },
      {
        "text": "戦場の「空間利用」にどのようなこだわりがある？",
        "opts": [
          {
            "t": "垂直空間依存：空を飛んだり、長時間滞空したり、高所から制圧したい",
            "traits": [
              "verticality"
            ]
          },
          {
            "t": "地上機動力：地に足をつけて、平地や狭い隙間を素早く駆け回りたい",
            "traits": [
              "ground_mobility"
            ]
          }
        ]
      },
      {
        "text": "致命的な危機に陥った時、どのような生存手段を望む？",
        "opts": [
          {
            "t": "ステルス回避：地中を移動したりステルス化して戦線離脱し、敵に見失わせたい",
            "traits": [
              "stealth_evasion"
            ]
          },
          {
            "t": "正面突破：肉体でダメージを受け止めたり、弾を撃ち返したり、自己回復で耐え抜きたい",
            "traits": [
              "frontal_brawl"
            ]
          }
        ]
      },
      {
        "text": "どのような操作感が好き？",
        "opts": [
          {
            "t": "武器マスター：武器のモードや身体の形態を自由に変え、複雑な戦局に適応したい",
            "traits": [
              "form_switch"
            ]
          },
          {
            "t": "一意専心：固定のスキルセットを極めるのが好きで、複雑な変身は好まない",
            "traits": [
              "single_focus"
            ]
          }
        ]
      },
      {
        "text": "戦場で「無機物の助っ人」を持ちたい？",
        "opts": [
          {
            "t": "陣地マスター：自動攻撃するタレットやテレポート、固定の回復タワーなどを建てたい",
            "traits": [
              "builder"
            ]
          },
          {
            "t": "純粋な技術：何も建てず、己のエイムや立ち回り、アビリティのみに頼りたい",
            "traits": [
              "pure_skill"
            ]
          }
        ]
      },
      {
        "text": "敵をどのようにコントロールし「苦しめ」たい？",
        "opts": [
          {
            "t": "物理衝突：純粋な運動エネルギーでノックバックさせたり、壁に押し付けたい",
            "traits": [
              "physics_control"
            ]
          },
          {
            "t": "状態異常：遠距離からの睡眠、回復阻害、スロウなどで戦闘力を剥奪したい",
            "traits": [
              "status_control"
            ]
          }
        ]
      },
      {
        "text": "苦痛を与える攻撃テンポとして、どちらの傾向が強い？",
        "opts": [
          {
            "t": "持続ダメージ：炎上、毒、吸血などの特殊状態で、じわじわと敵を確実に削りたい",
            "traits": [
              "dot_damage"
            ]
          },
          {
            "t": "瞬間処刑：シンプルで暴力的な瞬間火力で、一撃あるいはワンコンボで敵を倒したい",
            "traits": [
              "burst_execute"
            ]
          }
        ]
      },
      {
        "text": "武器の弾道に関して、独特の「物理的な好み」はある？",
        "opts": [
          {
            "t": "予測不能：弾道を反射させたり軌道を変えたり、戦場の幾何学を利用したい",
            "traits": [
              "projectile_curve"
            ]
          },
          {
            "t": "直線弾道：一般的な即着弾（ヒットスキャン）や、まっすぐ飛ぶ素直な弾道が好き",
            "traits": [
              "hitscan_linear"
            ]
          }
        ]
      },
      {
        "text": "絶望的な状況を救うキーマンとして、どのように「命を救う」のが好き？",
        "opts": [
          {
            "t": "強制移動：味方が同意していなくても、危険な味方を強制的に安全圏に引き戻したい",
            "traits": [
              "force_move"
            ]
          },
          {
            "t": "範囲バフ：瞬間的にオーラを展開し、広範囲無敵や加速、強ヒールで反撃に出たい",
            "traits": [
              "aoe_buff"
            ]
          }
        ]
      },
      {
        "text": "最後に、ULT（アルティメット）を発動する瞬間、究極の期待は？",
        "opts": [
          {
            "t": "瞬間火力：一瞬で敵を一掃したり蒸発させ、マルチキルの快感を味わいたい",
            "traits": [
              "burst_ult"
            ]
          },
          {
            "t": "持続支配：自身の状態を大幅強化したり、持続的な広範囲影響で戦場のルールを変えたい",
            "traits": [
              "sustained_ult"
            ]
          }
        ]
      }
    ],
    "en": [
      {
        "text": "Regarding output precision, which do you prefer?",
        "opts": [
          {
            "t": "Extreme Precision: I favor single-shot high damage and perfect tracking for headshots.",
            "traits": [
              "precision"
            ]
          },
          {
            "t": "Covering Fire: I enjoy massive AoE splash, suppression, and dumping ammo into the battlefield.",
            "traits": [
              "suppression"
            ]
          }
        ]
      },
      {
        "text": "What is your obsession with \"spatial utilization\"?",
        "opts": [
          {
            "t": "Verticality: I yearn to fly, stay airborne, or deliver tactical strikes from high ground.",
            "traits": [
              "verticality"
            ]
          },
          {
            "t": "Ground Mobility: I prefer keeping my feet on the ground, rapidly dashing through corridors and covers.",
            "traits": [
              "ground_mobility"
            ]
          }
        ]
      },
      {
        "text": "When facing fatal danger, what survival mechanics do you wish to have?",
        "opts": [
          {
            "t": "Stealth & Evasion: Burrowing underground or turning completely invisible to vanish from sight.",
            "traits": [
              "stealth_evasion"
            ]
          },
          {
            "t": "Frontal Brawl: Tanking damage with pure bulk, deflecting bullets, or sustaining via violent lifesteal.",
            "traits": [
              "frontal_brawl"
            ]
          }
        ]
      },
      {
        "text": "What kind of operational flow do you prefer?",
        "opts": [
          {
            "t": "Arsenal Master: Freely swapping weapon fires or morphing body forms to adapt to complex fights.",
            "traits": [
              "form_switch"
            ]
          },
          {
            "t": "Single Focus: Perfecting one specific skill combination without any flashy transformations.",
            "traits": [
              "single_focus"
            ]
          }
        ]
      },
      {
        "text": "Do you wish to have extra \"inanimate helpers\" on the battlefield?",
        "opts": [
          {
            "t": "Builder: I like deploying auto-attacking turrets, teleporters, or fixed healing stations.",
            "traits": [
              "builder"
            ]
          },
          {
            "t": "Pure Skill: I don't build anything. I rely purely on my own aim, movement, and abilities.",
            "traits": [
              "pure_skill"
            ]
          }
        ]
      },
      {
        "text": "How do you prefer to control and \"torment\" your enemies?",
        "opts": [
          {
            "t": "Physics Control: Using pure kinetic force to knock them back, pull them into gravity, or pin them to walls.",
            "traits": [
              "physics_control"
            ]
          },
          {
            "t": "Status Control: Stripping their combat potential via long-range sleep darts, anti-heals, or slows.",
            "traits": [
              "status_control"
            ]
          }
        ]
      },
      {
        "text": "Which damage rhythm do you lean towards?",
        "opts": [
          {
            "t": "DoT Damage: Inflicting desperate bleed, poison, or burn effects, making them suffer slowly.",
            "traits": [
              "dot_damage"
            ]
          },
          {
            "t": "Burst Execution: Simple, brutal, instant burst damage. Sending them back to spawn in one shot or combo.",
            "traits": [
              "burst_execute"
            ]
          }
        ]
      },
      {
        "text": "Do you have a unique \"physics preference\" for your weapon's projectiles?",
        "opts": [
          {
            "t": "Unpredictable: I like bouncing projectiles, bending bullets, and using battlefield geometry.",
            "traits": [
              "projectile_curve"
            ]
          },
          {
            "t": "Linear Hitscan: I prefer standard instantaneous hits (Hitscan) or straightforward projectiles.",
            "traits": [
              "hitscan_linear"
            ]
          }
        ]
      },
      {
        "text": "As a key figure capable of clutch saves, how do you prefer to \"save lives\"?",
        "opts": [
          {
            "t": "Forced Movement: Forcibly yanking a teammate in danger back to safety, even if they disagree.",
            "traits": [
              "force_move"
            ]
          },
          {
            "t": "AoE Buff: Instantly popping an aura to provide massive AoE invulnerability, speed, or immense burst heals.",
            "traits": [
              "aoe_buff"
            ]
          }
        ]
      },
      {
        "text": "Finally, the moment you press your Ultimate, what is your ultimate expectation?",
        "opts": [
          {
            "t": "Burst Ultimate: An instant wipe or deletion of opponents, chasing the adrenaline of an instant multikill.",
            "traits": [
              "burst_ult"
            ]
          },
          {
            "t": "Sustained Control: Radically empowering myself or casting a lasting disruption that changes the rules of the fight.",
            "traits": [
              "sustained_ult"
            ]
          }
        ]
      }
    ]
  }
};

  // === State ===
  let state = {
    lang: getSiteLang(),
    step: 'welcome',
    stage1Idx: 0,
    stage2Idx: 0,
    roleScores: { tank: 0, dps: 0, support: 0 },
    subScores: {},
    userTraits: [],
    finalMatch: null,
    altMatches: []
  };

  function getSiteLang() {
    const saved = localStorage.getItem('brocnbb_lang');
    if (['zh', 'ja', 'en'].includes(saved)) return saved;

    // Auto-detect based on timezone/region
    try {
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      if (timeZone) {
        const zhTimeZones = ['Asia/Shanghai', 'Asia/Chongqing', 'Asia/Urumqi', 'Asia/Macau', 'Asia/Hong_Kong', 'Asia/Taipei'];
        if (zhTimeZones.includes(timeZone)) {
          return 'zh';
        }
        if (timeZone === 'Asia/Tokyo') {
          return 'ja';
        }
      }
    } catch (e) {
      // Fallback for older browsers
    }

    // Fallback to browser language
    const browserLang = (navigator.language || navigator.userLanguage || '').toLowerCase();
    if (browserLang.startsWith('zh')) return 'zh';
    if (browserLang.startsWith('ja')) return 'ja';
    return 'en';
  }

  function T(key) {
    const ui = OW_DATA.ui_text[state.lang] || OW_DATA.ui_text['zh'];
    return (ui && ui[key] !== undefined) ? ui[key] : key;
  }

  function resetState() {
    state.step = 'welcome';
    state.stage1Idx = 0;
    state.stage2Idx = 0;
    state.roleScores = { tank: 0, dps: 0, support: 0 };
    state.subScores = {};
    state.userTraits = [];
    state.finalMatch = null;
    state.altMatches = [];
  }

  function computeFinalMatch() {
    const heroDb = OW_DATA.hero_db;
    let topRole = 'dps', maxRoleScore = -1;
    for (const [role, score] of Object.entries(state.roleScores)) {
      if (score > maxRoleScore) { maxRoleScore = score; topRole = role; }
    }
    const validSubs = Object.keys(heroDb[topRole] || {});
    let topSub = validSubs[0] || '', maxSubScore = -1;
    for (const sub of validSubs) {
      const score = state.subScores[sub] || 0;
      if (score > maxSubScore) { maxSubScore = score; topSub = sub; }
    }
    let pool = (heroDb[topRole] || {})[topSub] || [];
    if (!pool.length) pool = Object.values(heroDb[topRole] || {}).flat();
    const traitHash = state.userTraits.reduce((acc, t) => acc + t.length, 0)
      + state.userTraits.join('').split('').reduce((a, b) => a + b.charCodeAt(0), 0);
    const heroKey = pool[Math.abs(traitHash) % pool.length] || pool[0] || '';
    state.finalMatch = { role: topRole, sub: topSub, key: heroKey };

    // === Compute alternative heroes ===
    // Build full role pool (all heroes in same role), exclude main hero
    const fullRolePool = Object.entries(heroDb[topRole] || {}).flatMap(([sub, heroes]) =>
      heroes.map(h => ({ key: h, sub }))
    ).filter(h => h.key !== heroKey);

    // Match percentages: deterministic but look organic
    const altPcts = [94.2, 87.6, 78.3];
    const alts = [];
    const usedKeys = new Set([heroKey]);
    for (let i = 0; i < 3 && i < fullRolePool.length; i++) {
      // Shift hash by prime offsets so each pick is different
      const offset = [17, 31, 53][i];
      const candidate = fullRolePool[Math.abs(traitHash + offset) % fullRolePool.length];
      // Avoid duplicates: linear probe
      let picked = null;
      for (let j = 0; j < fullRolePool.length; j++) {
        const c = fullRolePool[(Math.abs(traitHash + offset) + j) % fullRolePool.length];
        if (!usedKeys.has(c.key)) { picked = c; break; }
      }
      if (picked) { usedKeys.add(picked.key); alts.push({ ...picked, pct: altPcts[i] }); }
    }
    state.altMatches = alts;
  }

  function s1Q() { return OW_DATA.stage1_questions[state.lang] || OW_DATA.stage1_questions['zh'] || []; }
  function s2Q() { return OW_DATA.stage2_questions[state.lang] || OW_DATA.stage2_questions['zh'] || []; }

  // === DOM container ===
  const container = document.getElementById('ow-screen');

  // === Icons (inline SVG helpers) ===
  function chevronSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 18 15 12 9 6"/></svg>';
  }
  function globeSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>';
  }
  function barSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>';
  }
  function retrySVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>';
  }
  function userCheckSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/><polyline points="16 11 18 13 22 9" stroke="#000" stroke-width="2"/></svg>';
  }
  function shareSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>';
  }
  function starSVG() {
    return '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3l-1.5 5H5l4.5 3.3-1.7 5.2L12 13l4.2 3.5-1.7-5.2L19 8h-5.5z"/></svg>';
  }

  // === Lang bar ===
  function langBarHTML() {
    return `<div id="ow-lang-bar" style="display:flex;gap:0.5rem;align-items:center;background:rgba(20,22,30,0.85);padding:0.5rem 1rem;border-radius:99px;border:1px solid rgba(255,255,255,0.1);">
      ${globeSVG()}
      ${['zh', 'ja', 'en'].map(l =>
      `<button data-lang="${l}" style="padding:0.25rem 0.75rem;border-radius:99px;font-weight:900;font-size:0.8rem;border:none;cursor:pointer;transition:all 0.15s;background:${state.lang === l ? '#f97316' : 'transparent'};color:${state.lang === l ? '#000' : '#9ca3af'};">${l.toUpperCase()}</button>`
    ).join('')}
    </div>`;
  }

  // === Render Functions ===
  function render() {
    switch (state.step) {
      case 'welcome': renderWelcome(); break;
      case 'stage1': renderStage1(); break;
      case 'sub_result': renderSubResult(); break;
      case 'stage2': renderStage2(); break;
      case 'calculating': renderCalculating(); break;
      case 'final': renderFinal(); break;
    }
    bindEvents();
  }

  function renderWelcome() {
    container.innerHTML = `
    <div class="ow-anim-fade" style="min-height:80vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:3rem 1rem;position:relative;">
      <div style="position:absolute;top:1.5rem;right:1.5rem;">${langBarHTML()}</div>
      <div style="position:relative;margin-bottom:2rem;">
        <div style="position:absolute;inset:-3rem;background:rgba(249,115,22,0.08);filter:blur(60px);border-radius:50%;"></div>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Overwatch_circle_logo.svg/1200px-Overwatch_circle_logo.svg.png"
             style="width:7rem;height:7rem;position:relative;z-index:1;filter:drop-shadow(0 0 20px rgba(249,115,22,0.5));" alt="OW" onerror="this.style.display='none'">
      </div>
      <h1 style="font-size:clamp(2.5rem,7vw,4.5rem);font-weight:900;font-style:italic;text-transform:uppercase;letter-spacing:-0.02em;color:#fff;margin-bottom:0.75rem;line-height:1.05;">${T('title')}</h1>
      <p style="color:#94a3b8;font-size:1rem;max-width:36rem;line-height:1.7;margin-bottom:3rem;">${T('subtitle')}</p>
      <button id="ow-start-btn" class="ow-btn-primary">${T('start')}</button>
    </div>`;
  }

  function renderStage1() {
    const qs = s1Q();
    if (!qs.length) { state.step = 'welcome'; render(); return; }
    const q = qs[state.stage1Idx];
    const progress = ((state.stage1Idx + 1) / qs.length) * 100;
    container.innerHTML = `
    <div class="ow-anim-slide" style="max-width:42rem;margin:0 auto;padding:3rem 1rem;min-height:80vh;display:flex;flex-direction:column;justify-content:center;">
      <div style="margin-bottom:2.5rem;">
        <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:0.75rem;">
          <span style="color:#f97316;font-weight:900;font-style:italic;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.2em;">${T('stage1')}</span>
          <span style="color:#64748b;font-family:monospace;font-size:0.75rem;">${state.stage1Idx + 1}/${qs.length}</span>
        </div>
        <div class="ow-progress-bar"><div class="ow-progress-fill" style="width:${progress}%;background:#f97316;"></div></div>
      </div>
      <h2 style="font-size:1.6rem;font-weight:800;color:#fff;margin-bottom:2rem;line-height:1.4;">${q.text}</h2>
      <div>
        ${q.opts.map((opt, i) =>
      `<button class="ow-option-btn" data-s1-idx="${i}">${opt.t}${chevronSVG()}</button>`
    ).join('')}
      </div>
    </div>`;
  }

  function renderSubResult() {
    if (!state.finalMatch) computeFinalMatch();
    const fm = state.finalMatch;
    const roleNames = T('roleNames') || {};
    const subNames = T('subNames') || {};
    const roleName = (roleNames && roleNames[fm.role]) || fm.role;
    const subName = (subNames && subNames[fm.sub]) || fm.sub;
    container.innerHTML = `
    <div class="ow-anim-fade" style="min-height:80vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:3rem 1rem;">
      <div style="background:#f97316;padding:1.5rem;border-radius:1.5rem;margin-bottom:2rem;transform:rotate(-3deg);box-shadow:0 0 40px rgba(249,115,22,0.4);">${barSVG()}</div>
      <p style="color:#64748b;font-weight:900;letter-spacing:0.3em;text-transform:uppercase;font-size:0.75rem;margin-bottom:0.75rem;">${T('subResultTitle')}</p>
      <h2 style="font-size:clamp(2rem,6vw,3.5rem);font-weight:900;font-style:italic;color:#fff;text-transform:uppercase;letter-spacing:-0.02em;margin-bottom:1.5rem;">
        ${roleName} <span style="color:#f97316;">— ${subName}</span>
      </h2>
      <p style="color:#94a3b8;max-width:34rem;line-height:1.7;margin-bottom:3rem;">${T('subResultDesc')}</p>
      <button id="ow-go-stage2-btn" class="ow-btn-secondary">${T('subResultBtn')}</button>
    </div>`;
  }

  function renderStage2() {
    const qs = s2Q();
    if (!qs.length) { state.step = 'calculating'; render(); return; }
    const q = qs[state.stage2Idx];
    const progress = ((state.stage2Idx + 1) / qs.length) * 100;
    container.innerHTML = `
    <div class="ow-anim-slide" style="max-width:42rem;margin:0 auto;padding:3rem 1rem;min-height:80vh;display:flex;flex-direction:column;justify-content:center;">
      <div style="margin-bottom:2.5rem;">
        <div style="display:flex;justify-content:space-between;align-items:flex-end;margin-bottom:0.75rem;">
          <span style="color:#3b82f6;font-weight:900;font-style:italic;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.2em;">${T('stage2')}</span>
          <span style="color:#64748b;font-family:monospace;font-size:0.75rem;">${state.stage2Idx + 1}/${qs.length}</span>
        </div>
        <div class="ow-progress-bar"><div class="ow-progress-fill" style="width:${progress}%;background:#3b82f6;box-shadow:0 0 10px rgba(59,130,246,0.5);"></div></div>
      </div>
      <h2 style="font-size:1.6rem;font-weight:800;color:#fff;margin-bottom:2rem;line-height:1.4;">${q.text}</h2>
      <div>
        ${q.opts.map((opt, i) =>
      `<button class="ow-option-btn ow-stage2" data-s2-idx="${i}">${opt.t}${chevronSVG()}</button>`
    ).join('')}
      </div>
    </div>`;
  }

  function renderCalculating() {
    container.innerHTML = `
    <div class="ow-anim-fade" style="min-height:80vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;">
      <div style="position:relative;margin-bottom:3rem;">
        <div class="ow-spinner"></div>
        <div style="position:absolute;inset:0;display:flex;align-items:center;justify-content:center;">
          ${starSVG().replace('width="14"', 'width="28"').replace('height="14"', 'height="28"').replace('stroke="currentColor"', 'stroke="#f97316"')}
        </div>
      </div>
      <h2 style="font-size:1.5rem;font-weight:900;font-style:italic;text-transform:uppercase;letter-spacing:0.15em;color:#fff;">${T('calcTitle')}</h2>
    </div>`;
  }

  function renderFinal() {
    const fm = state.finalMatch;
    if (!fm) { resetState(); render(); return; }

    // === Record test completion (Removed for standalone open-source version) ===

    const heroName = (OW_DATA.hero_names[fm.key] || {})[state.lang] || fm.key;
    const flavorObj = OW_DATA.hero_flavor[fm.key] || OW_DATA.hero_flavor['default'] || {};
    const flavor = flavorObj[state.lang] || '';
    const roleNames = T('roleNames') || {};
    const subNames = T('subNames') || {};
    const roleName = roleNames[fm.role] || fm.role;
    const subName = subNames[fm.sub] || fm.sub;
    const uniqueTraits = [...new Set(state.userTraits)].slice(0, 6);

    container.innerHTML = `
    <div class="ow-anim-fade" style="max-width:56rem;margin:0 auto;padding:2rem 1rem 4rem;">
      <div id="ow-result-card-export" class="ow-result-card">
        <div class="ow-result-header"></div>
        <div class="hidden md:block" style="position:absolute;top:0;right:0;padding:2rem;opacity:0.06;pointer-events:none;">
          <svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 24 24" fill="none" stroke="#f97316" stroke-width="1"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2z"/></svg>
        </div>
        <div class="p-6 md:p-10 relative">
          <div class="flex flex-col md:flex-row items-center gap-8 md:gap-12">
            <!-- Left side: Avatar & Name -->
            <div class="flex-none w-full md:w-52 flex flex-col items-center gap-2">
              <div class="ow-avatar-ring" style="width:8rem;height:8rem;">
                <div class="ow-avatar-inner" style="width:6.5rem;height:6.5rem;background-image:url('static/img/owtestico/${encodeURIComponent(fm.key)}.png'); background-size:cover; background-position:center; background-color:#1e212d; border-radius:50%;"></div>
              </div>
              <!-- Badge in normal flow, no absolute -->
              <div style="background:#0b0c10;border:2px solid #f97316;color:#f97316;padding:0.2rem 0.75rem;font-weight:900;font-style:italic;font-size:0.7rem;border-radius:0.5rem;text-transform:uppercase;white-space:nowrap;">MATCH 99.8%</div>
              <div style="text-align:center;width:100%;padding:0 0.25rem;">
                <p style="color:#f97316;font-weight:900;font-style:normal;letter-spacing:0.05em;text-transform:uppercase;font-size:0.55rem;margin-bottom:0.2rem;">${T('destinyHero')}</p>
                <!-- Hero name: clamp size for long names -->
                <div style="font-size:clamp(1.4rem,4vw,2.2rem);font-weight:900;font-style:italic;text-transform:uppercase;line-height:1.05;letter-spacing:-0.02em;color:#fff;margin-bottom:0.3rem;word-break:break-all;">${heroName}</div>
                <div style="display:inline-block;padding:0.2rem 0.7rem;background:rgba(30,33,45,1);border:1px solid rgba(255,255,255,0.1);border-radius:99px;color:#f97316;font-size:0.6rem;font-weight:900;text-transform:uppercase;letter-spacing:0.08em;white-space:nowrap;">
                  ${roleName} / ${subName}
                </div>
              </div>
            </div>

            <!-- Right side: Traits & Flavor Text -->
            <div class="flex-1 w-full flex flex-col gap-5">
              <div style="background:rgba(25,28,40,0.8);padding:1.5rem;border-radius:1rem;border:1px solid rgba(255,255,255,0.08);">
                <h4 style="display:flex;align-items:center;gap:0.5rem;color:#f97316;font-weight:900;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.15em;font-style:italic;margin-bottom:1rem;">
                  ${starSVG()} ${T('traitEval')}
                </h4>
                <div style="display:flex;flex-wrap:wrap;gap:0.6rem;">${uniqueTraits.map(t => {
      const traitMap = (OW_DATA.trait_names || {})[state.lang] || (OW_DATA.trait_names || {})['zh'] || {};
      const label = traitMap[t] || t.replace(/_/g, ' ');
      return `<span class="ow-tag" style="margin:0;">#${label}</span>`;
    }).join('')}</div>
              </div>
              <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 sm:gap-6" style="background:linear-gradient(135deg, #f97316, #ea580c);padding:1.5rem;border-radius:1rem;">
                <div style="flex:1;">
                  <h4 style="color:rgba(0,0,0,0.7);font-weight:900;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.15em;font-style:italic;margin-bottom:0.5rem;">${T('evalArchive')}</h4>
                  <p style="color:#000;font-weight:700;font-size:0.9rem;line-height:1.6;margin:0;">${flavor}</p>
                </div>
                <!-- Action Button Container inside Flavor box -->
                <div class="sm:ml-4 flex-shrink-0 self-end sm:self-auto">
                  <button id="ow-share-btn" style="background:rgba(0,0,0,0.25);padding:1rem;border-radius:50%;border:none;cursor:pointer;transition:all 0.2s;color:#000;display:flex;align-items:center;justify-content:center;" onmouseover="this.style.background='rgba(0,0,0,0.6)';this.style.color='#f97316'" onmouseout="this.style.background='rgba(0,0,0,0.25)';this.style.color='#000'">
                    ${shareSVG().replace('width="20"', 'width="24"').replace('height="20"', 'height="24"')}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Moved Retry Button OUTSIDE of Export Card -->
      <div style="display:flex;justify-content:center;margin-top:2.5rem;">
        <button id="ow-reset-btn" class="ow-retry-btn">
          ${retrySVG()} ${T('retry')}
        </button>
      </div>
      </div>

      ${state.altMatches.length ? `
      <div style="margin-top:2rem;">
        <div style="display:flex;align-items:center;gap:0.75rem;margin-bottom:1.25rem;">
          <div style="flex:1;height:1px;background:rgba(255,255,255,0.08);"></div>
          <span style="color:#64748b;font-size:0.7rem;font-weight:900;text-transform:uppercase;letter-spacing:0.2em;white-space:nowrap;">${T('altHeroes')}</span>
          <div style="flex:1;height:1px;background:rgba(255,255,255,0.08);"></div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
          ${state.altMatches.map(alt => {
      const altName = (OW_DATA.hero_names[alt.key] || {})[state.lang] || alt.key;
      const altSubName = (T('subNames') || {})[alt.sub] || alt.sub;
      const pctInt = Math.round(alt.pct);
      return `<div style="background:rgba(15,17,25,0.9);border:1px solid rgba(255,255,255,0.08);border-radius:1.25rem;padding:1.25rem;text-align:center;position:relative;overflow:hidden;transition:border-color 0.2s;" 
              onmouseenter="this.style.borderColor='rgba(249,115,22,0.35)'" onmouseleave="this.style.borderColor='rgba(255,255,255,0.08)'">
              <div style="position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,transparent,rgba(249,115,22,${0.3 + (alt.pct - 78) / 65 * 0.5}),transparent);"></div>
              <div style="width:3.5rem;height:3.5rem;border-radius:50%;background:linear-gradient(135deg,rgba(30,33,45,1),rgba(20,23,34,1));border:1px solid rgba(255,255,255,0.1);display:flex;align-items:center;justify-content:center;margin:0 auto 0.9rem;background-image:url('static/img/owtestico/${encodeURIComponent(alt.key)}.png'); background-size:cover; background-position:center;">
              </div>
              <div style="font-size:1.1rem;font-weight:900;font-style:italic;text-transform:uppercase;color:#fff;letter-spacing:-0.01em;margin-bottom:0.4rem;">${altName}</div>
              <div style="font-size:0.65rem;color:#64748b;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:0.85rem;">${altSubName}</div>
              <div style="background:rgba(255,255,255,0.05);border-radius:99px;height:4px;margin-bottom:0.4rem;overflow:hidden;">
                <div style="height:100%;width:${alt.pct}%;background:linear-gradient(90deg,#c2410c,#f97316);border-radius:99px;transition:width 0.6s ease;"></div>
              </div>
              <div style="font-size:0.7rem;font-weight:900;color:#f97316;font-style:italic;">${alt.pct}%</div>
            </div>`;
    }).join('')}
        </div>
      </div>` : ''}
    </div>`;
  }

  // === Share Modal ===
  function showShareModal() {
    if (!window.html2canvas) {
      alert(state.lang === 'zh' ? '正在加载组件，请稍后再试...' : 'Loading, please wait...');
      return;
    }
    const tModal = {
      zh: { gen: '正在生成专属档案...', dl: '保存图片', sh: '分享至：', err: '生成失败，请重试' },
      ja: { gen: '専用アーカイブを作成中...', dl: '画像を保存', sh: 'シェア：', err: 'エラーが発生しました' },
      en: { gen: 'Generating Archive...', dl: 'Save Image', sh: 'Share via:', err: 'Generation failed' }
    };
    const tm = (k) => (tModal[state.lang] || tModal['en'])[k];

    const overlay = document.createElement('div');
    overlay.id = 'ow-share-overlay';
    overlay.style.cssText = 'position:fixed;inset:0;background:rgba(11,12,16,0.92);backdrop-filter:blur(15px);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:2rem 1rem;opacity:0;transition:opacity 0.3s;';

    overlay.innerHTML = `
      <button id="ow-share-close" style="position:absolute;top:1.5rem;right:1.5rem;background:rgba(255,255,255,0.05);border:1px solid rgba(255,255,255,0.1);border-radius:50%;color:#94a3b8;cursor:pointer;padding:0.6rem;transition:all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)';this.style.color='#fff';" onmouseout="this.style.background='rgba(255,255,255,0.05)';this.style.color='#94a3b8';">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>
      <div id="ow-share-content" style="max-width:40rem;width:100%;display:flex;flex-direction:column;align-items:center;transition:transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);transform:scale(0.95);">
        <div id="ow-share-img-coord" style="width:100%;min-height:300px;display:flex;align-items:center;justify-content:center;margin-bottom:2rem;position:relative;">
           <div class="ow-spinner"></div>
           <div style="position:absolute;color:#f97316;font-weight:900;font-style:italic;margin-top:7rem;letter-spacing:0.1em;text-transform:uppercase;">${tm('gen')}</div>
        </div>
        <div id="ow-share-actions" style="opacity:0;pointer-events:none;transition:opacity 0.5s;display:flex;flex-direction:column;align-items:center;gap:2rem;width:100%;">
          <button id="ow-share-dl" class="ow-btn-primary" style="padding:1rem 3rem;font-size:1.1rem;box-shadow:0 10px 30px rgba(249,115,22,0.3);">
             <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="transform:skewX(10deg);"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" y1="15" x2="12" y2="3"></line></svg>
             <span style="transform:skewX(10deg);">${tm('dl')}</span>
          </button>
          <div style="text-align:center;">
             <div style="color:#64748b;font-weight:900;font-size:0.75rem;text-transform:uppercase;letter-spacing:0.2em;margin-bottom:1rem;display:flex;align-items:center;justify-content:center;gap:1rem;">
                <div style="height:1px;width:2rem;background:rgba(255,255,255,0.1);"></div>
                ${tm('sh')}
                <div style="height:1px;width:2rem;background:rgba(255,255,255,0.1);"></div>
             </div>
             <div style="display:flex;gap:1.25rem;justify-content:center;">
               <button id="ow-share-tw" style="background:#000;border:1px solid rgba(255,255,255,0.1);color:#fff;width:3rem;height:3rem;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.1)'" onmouseout="this.style.background='#000'">
                 <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
               </button>
               <button id="ow-share-fb" style="background:#1877f2;border:none;color:#fff;width:3rem;height:3rem;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s;" onmouseover="this.style.background='#166fe5'" onmouseout="this.style.background='#1877f2'">
                 <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
               </button>
             </div>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(overlay);

    requestAnimationFrame(() => {
      overlay.style.opacity = '1';
      document.getElementById('ow-share-content').style.transform = 'scale(1)';
    });

    const closeOverlay = () => {
      overlay.style.opacity = '0';
      document.getElementById('ow-share-content').style.transform = 'scale(0.95)';
      setTimeout(() => { if (overlay.parentNode) overlay.parentNode.removeChild(overlay); }, 300);
    };
    document.getElementById('ow-share-close').addEventListener('click', closeOverlay);
    overlay.addEventListener('click', (e) => { if (e.target === overlay) closeOverlay(); });

    // Build a dedicated off-screen export card with 100% fixed px sizes
    // (html2canvas does not support rem/vw/clamp, so we must use px only)
    const fm = state.finalMatch;
    const heroName = (OW_DATA.hero_names[fm.key] || {})[state.lang] || fm.key;
    const flavorObj = OW_DATA.hero_flavor[fm.key] || OW_DATA.hero_flavor['default'] || {};
    const flavor = flavorObj[state.lang] || '';
    const roleNames = T('roleNames') || {};
    const subNames = T('subNames') || {};
    const roleName = roleNames[fm.role] || fm.role;
    const subName = subNames[fm.sub] || fm.sub;
    const uniqueTraits = [...new Set(state.userTraits)].slice(0, 6);
    const traitMap = (OW_DATA.trait_names || {})[state.lang] || (OW_DATA.trait_names || {})['zh'] || {};
    const tagHTML = uniqueTraits.map(t => {
      const label = traitMap[t] || t.replace(/_/g, ' ');
      return `<span style="display:inline-block;padding:4px 12px;background:#1e212d;border:1px solid rgba(255,255,255,0.12);border-radius:6px;color:#e2e8f0;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:1px;margin:0;">#${label}</span>`;
    }).join('');

    const exportCard = document.createElement('div');
    exportCard.style.cssText = 'position:fixed;left:-9999px;top:-9999px;width:800px;background:linear-gradient(135deg,#0f1119,#161924);border-radius:20px;overflow:hidden;font-family:Inter,system-ui,sans-serif;';
    exportCard.innerHTML = `
      <div style="height:4px;background:linear-gradient(90deg,#c2410c,#f97316,#c2410c);"></div>
      <div style="display:flex;align-items:stretch;padding:28px 28px 28px 28px;gap:24px;">
        <!-- Left: avatar + info -->
        <div style="width:200px;flex-shrink:0;display:flex;flex-direction:column;align-items:center;gap:16px;">
          <div style="width:120px;height:120px;border-radius:50%;border:2px solid rgba(249,115,22,0.35);padding:6px;background:rgba(249,115,22,0.08);">
            <div style="width:108px;height:108px;border-radius:50%;background-image:url('static/img/owtestico/${encodeURIComponent(fm.key)}.png');background-size:cover;background-position:center;background-color:#1e212d;box-shadow:0 0 30px rgba(249,115,22,0.4);"></div>
          </div>
          <div style="background:#0b0c10;border:2px solid #f97316;color:#f97316;padding:3px 12px;font-weight:900;font-style:italic;font-size:12px;border-radius:6px;text-transform:uppercase;letter-spacing:1px;">MATCH 99.8%</div>
          <div style="text-align:center;">
            <div style="color:#f97316;font-weight:900;text-transform:uppercase;font-size:9px;letter-spacing:2px;margin-bottom:8px;">${T('destinyHero')}</div>
            <div style="font-size:28px;font-weight:900;font-style:italic;text-transform:uppercase;line-height:1.1;color:#fff;margin-bottom:16px;">${heroName}</div>
            <div style="display:inline-block;padding:4px 12px;background:rgba(30,33,45,1);border:1px solid rgba(255,255,255,0.1);border-radius:99px;color:#f97316;font-size:11px;font-weight:900;text-transform:uppercase;letter-spacing:1px;">${roleName} / ${subName}</div>
          </div>
        </div>
        <!-- Right: traits + flavor -->
        <div style="flex:1;display:flex;flex-direction:column;gap:14px;min-width:0;">
          <div style="background:rgba(25,28,40,0.9);padding:18px;border-radius:12px;border:1px solid rgba(255,255,255,0.08);">
            <div style="font-size:10px;font-weight:900;color:#f97316;text-transform:uppercase;letter-spacing:2px;margin-bottom:12px;">★ ${T('traitEval')}</div>
            <div style="display:flex;flex-wrap:wrap;gap:6px;">${tagHTML}</div>
          </div>
          <div style="background:linear-gradient(135deg,#f97316,#ea580c);padding:18px;border-radius:12px;flex:1;">
            <div style="font-size:10px;font-weight:900;color:rgba(0,0,0,0.6);text-transform:uppercase;letter-spacing:2px;margin-bottom:8px;">${T('evalArchive')}</div>
            <div style="font-size:14px;font-weight:700;color:#000;line-height:1.6;">${flavor}</div>
          </div>
        </div>
      </div>
      <div style="padding:8px 28px 16px;text-align:right;font-size:9px;color:rgba(255,255,255,0.2);letter-spacing:1px;text-transform:uppercase;">brocnbb.com · OW Destiny Hero Test</div>
    `;
    document.body.appendChild(exportCard);

    html2canvas(exportCard, {
      backgroundColor: '#0f1119',
      scale: 2,
      useCORS: true,
      logging: false,
      width: 800,
    }).then(canvas => {
      document.body.removeChild(exportCard);

      const imgData = canvas.toDataURL('image/jpeg', 0.95);

      const imgCoord = document.getElementById('ow-share-img-coord');
      imgCoord.innerHTML = `<img src="${imgData}" style="max-height:55vh;width:auto;max-width:100%;border-radius:1.5rem;box-shadow:0 20px 60px rgba(0,0,0,0.8), 0 0 0 1px rgba(249,115,22,0.3);animation:ow-fade-in 0.6s ease forwards;">`;

      const actions = document.getElementById('ow-share-actions');
      actions.style.opacity = '1';
      actions.style.pointerEvents = 'auto';

      document.getElementById('ow-share-dl').addEventListener('click', () => {
        const a = document.createElement('a');
        a.href = imgData;
        const heroName = (state.finalMatch || {}).key || 'hero';
        a.download = `ow-destiny-${heroName}.jpg`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
      });

      const urlToShare = encodeURIComponent(window.location.origin + window.location.pathname);
      const shareTextMap = {
        zh: '我刚测试了我的《守望先锋》本命英雄，快来看看！',
        ja: '私のオーバーウォッチ運命のヒーローを診断しました！',
        en: 'I just found my Destiny Overwatch Hero! Check it out!'
      };
      const textToShare = encodeURIComponent(shareTextMap[state.lang] || shareTextMap['en']);

      document.getElementById('ow-share-tw').addEventListener('click', () => {
        window.open(`https://twitter.com/intent/tweet?text=${textToShare}&url=${urlToShare}`, '_blank', 'width=600,height=400');
      });

      document.getElementById('ow-share-fb').addEventListener('click', () => {
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${urlToShare}`, '_blank', 'width=600,height=400');
      });

    }).catch(err => {
      console.error('html2canvas error', err);
      const imgCoord = document.getElementById('ow-share-img-coord');
      imgCoord.innerHTML = `<div style="color:#ef4444;font-weight:700;">${tm('err')}</div>`;
    });
  }

  // === Bind all events via addEventListener (CSP-safe) ===
  function bindEvents() {
    // Share button
    const shareBtn = document.getElementById('ow-share-btn');
    if (shareBtn) shareBtn.addEventListener('click', showShareModal);
    // Lang buttons
    document.querySelectorAll('#ow-lang-bar [data-lang]').forEach(btn => {
      btn.addEventListener('click', function () {
        state.lang = this.getAttribute('data-lang');
        render();
      });
    });
    // Start button
    const startBtn = document.getElementById('ow-start-btn');
    if (startBtn) startBtn.addEventListener('click', () => { state.step = 'stage1'; render(); });

    // Stage 1 option buttons
    document.querySelectorAll('[data-s1-idx]').forEach(btn => {
      btn.addEventListener('click', function () {
        const idx = parseInt(this.getAttribute('data-s1-idx'));
        const qs = s1Q();
        const opt = qs[state.stage1Idx].opts[idx];
        state.roleScores[opt.r] = (state.roleScores[opt.r] || 0) + 5;
        (opt.s || []).forEach(s => { state.subScores[s] = (state.subScores[s] || 0) + 5; });
        if (state.stage1Idx < qs.length - 1) {
          state.stage1Idx++;
          render();
        } else {
          computeFinalMatch();
          state.step = 'sub_result';
          render();
        }
      });
    });

    // Go to stage2 button
    const goStage2 = document.getElementById('ow-go-stage2-btn');
    if (goStage2) goStage2.addEventListener('click', () => { state.step = 'stage2'; render(); });

    // Stage 2 option buttons
    document.querySelectorAll('[data-s2-idx]').forEach(btn => {
      btn.addEventListener('click', function () {
        const idx = parseInt(this.getAttribute('data-s2-idx'));
        const qs = s2Q();
        const opt = qs[state.stage2Idx].opts[idx];
        state.userTraits.push(...(opt.traits || []));
        if (state.stage2Idx < qs.length - 1) {
          state.stage2Idx++;
          render();
        } else {
          computeFinalMatch();

          // Preload hero avatar images during the 2.5s calculation animation
          // so they are immediately available on the result page.
          const imgKeysToPreload = [state.finalMatch.key, ...state.altMatches.map(a => a.key)];
          imgKeysToPreload.forEach(key => {
            const img = new Image();
            img.src = `static/img/owtestico/${encodeURIComponent(key)}.png`;
          });

          state.step = 'calculating';
          render();
          setTimeout(() => { state.step = 'final'; render(); }, 2500);
        }
      });
    });

    // Reset button
    const resetBtn = document.getElementById('ow-reset-btn');
    if (resetBtn) resetBtn.addEventListener('click', () => { resetState(); render(); });
  }

  // === Boot ===
  render();
})();

>>>>>>> origin/main
