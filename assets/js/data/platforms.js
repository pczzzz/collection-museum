/* 平台与获取方式（入口索引，不含任何实际内容） */
window.DB = window.DB || {};
window.DB.platforms =  {
  "groups": [
    {
      "id": "game-stores",
      "name": "正版游戏商店",
      "icon": "🎮",
      "desc": "PC / 主机正版数字发行平台与授权零售商",
      "items": [
        {
          "name": "Steam",
          "desc": "Valve 旗下全球最大 PC 数字发行平台",
          "nature": "official",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://store.steampowered.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Epic Games Store",
          "desc": "Epic 运营，每周赠送免费游戏",
          "nature": "official",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://store.epicgames.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "GOG.com",
          "desc": "CD Projekt 旗下无 DRM 经典游戏平台",
          "nature": "official",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.gog.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Humble Bundle",
          "desc": "慈善捆绑包 + 数字商店，部分收入捐给公益",
          "nature": "official",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.humblebundle.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Fanatical",
          "desc": "Fandom 旗下正版游戏捆绑零售站",
          "nature": "official",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.fanatical.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Green Man Gaming",
          "desc": "英国授权数字游戏零售商",
          "nature": "official",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.greenmangaming.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "IndieGala",
          "desc": "专注独立游戏的捆绑与商店",
          "nature": "official",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.indiegala.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "itch.io",
          "desc": "独立创作者发布与销售平台",
          "nature": "official",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://itch.io/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Nintendo eShop",
          "desc": "任天堂 Switch / 3DS 官方数字商店",
          "nature": "official",
          "for": "switch",
          "links": [
            {
              "label": "官网",
              "url": "https://www.nintendo.com/store/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "PlayStation Store",
          "desc": "索尼 PS5 / PS4 官方数字商店",
          "nature": "official",
          "for": "ps",
          "links": [
            {
              "label": "官网",
              "url": "https://store.playstation.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Xbox Store",
          "desc": "微软 Xbox Series / One 官方数字商店",
          "nature": "official",
          "for": "xbox",
          "links": [
            {
              "label": "官网",
              "url": "https://www.xbox.com/games/store",
              "kind": "官方"
            }
          ]
        }
      ]
    },
    {
      "id": "emulator-frontends",
      "name": "模拟器前端 / 库管理",
      "icon": "🕹️",
      "desc": "统一启动多平台 ROM、自动刮削元数据的前端工具",
      "items": [
        {
          "name": "RetroArch",
          "desc": "libretro API 跨平台模拟器前端，支持数百个核心",
          "nature": "community",
          "for": "multi",
          "links": [
            {
              "label": "官网",
              "url": "https://www.retroarch.com/",
              "kind": "官方"
            },
            {
              "label": "文档",
              "url": "https://docs.libretro.com/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/libretro/RetroArch",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "EmulationStation Desktop Edition",
          "desc": "ES-DE，现代化跨平台模拟器前端",
          "nature": "community",
          "for": "multi",
          "links": [
            {
              "label": "官网",
              "url": "https://es-de.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/ES-DE/emulationstation-de",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "LaunchBox",
          "desc": "Windows 下流行的游戏库管理与前端",
          "nature": "official",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.launchbox-app.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Playnite",
          "desc": "开源 Windows 游戏库管理器，整合多平台启动",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://playnite.link/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/JosefNemec/Playnite",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Lutris",
          "desc": "Linux 开放游戏平台，统一管理 Wine / 模拟器 / 原生游戏",
          "nature": "community",
          "for": "linux",
          "links": [
            {
              "label": "官网",
              "url": "https://lutris.net/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/lutris/lutris",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Heroic Games Launcher",
          "desc": "开源 Epic / GOG / Amazon 游戏启动器",
          "nature": "community",
          "for": "pc / linux",
          "links": [
            {
              "label": "官网",
              "url": "https://heroicgameslauncher.com/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/Heroic-Games-Launcher/HeroicGamesLauncher",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Steam ROM Manager",
          "desc": "将非 Steam 游戏批量导入 Steam 库并生成封面",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://steamrommanager.com/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/doZenn/Steam-ROM-Manager",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "EmuDeck",
          "desc": "Steam Deck / Windows / macOS 一键配置模拟器环境",
          "nature": "community",
          "for": "deck / pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.emudeck.com/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/dragoonDorise/EmuDeck",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Batocera.linux",
          "desc": "即插即用复古游戏 Linux 发行版",
          "nature": "community",
          "for": "multi",
          "links": [
            {
              "label": "官网",
              "url": "https://batocera.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/batocera-linux/batocera.linux",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Recalbox",
          "desc": "面向树莓派 / PC 的复古游戏系统",
          "nature": "community",
          "for": "multi",
          "links": [
            {
              "label": "官网",
              "url": "https://www.recalbox.com/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/recalbox/recalbox-os",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "RetroPie",
          "desc": "基于 Raspbian 的树莓派复古游戏套件",
          "nature": "community",
          "for": "raspberry",
          "links": [
            {
              "label": "官网",
              "url": "https://retropie.org.uk/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/RetroPie/RetroPie-Setup",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "HyperSpin",
          "desc": "高度可定制的街机风格前端",
          "nature": "official",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "http://www.hyperspin-fe.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Attract Mode",
          "desc": "轻量级命令行友好的街机前端",
          "nature": "community",
          "for": "multi",
          "links": [
            {
              "label": "官网",
              "url": "http://attractmode.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/mickelson/attract",
              "kind": "资料"
            }
          ]
        }
      ]
    },
    {
      "id": "console-emulators",
      "name": "家用机 / 掌机模拟器",
      "icon": "📼",
      "desc": "各世代主机与掌机的开源或免费模拟器（需自备合法 BIOS / ROM）",
      "items": [
        {
          "name": "Dolphin",
          "desc": "GameCube / Wii 高精度模拟器",
          "nature": "community",
          "for": "nintendo",
          "links": [
            {
              "label": "官网",
              "url": "https://dolphin-emu.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/dolphin-emu/dolphin",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Cemu",
          "desc": "Wii U 模拟器，现已开源",
          "nature": "community",
          "for": "nintendo",
          "links": [
            {
              "label": "官网",
              "url": "https://cemu.info/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/cemu-project/Cemu",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Ryujinx",
          "desc": "Switch 模拟器，注重精度与兼容性",
          "nature": "gray",
          "for": "nintendo",
          "links": [
            {
              "label": "官网",
              "url": "https://ryujinx.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/Ryujinx/Ryujinx",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Sudachi",
          "desc": "Yuzu 停更后社区维护的 Switch 模拟器分支",
          "nature": "gray",
          "for": "nintendo",
          "links": [
            {
              "label": "官网",
              "url": "https://sudachi.dev/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/sudachi-emu/sudachi",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Suyu",
          "desc": "Yuzu 另一社区分支，仍在早期开发阶段",
          "nature": "gray",
          "for": "nintendo",
          "links": [
            {
              "label": "官网",
              "url": "https://suyu.dev/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/suyu-emu/suyu",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Citra",
          "desc": "3DS 模拟器（原版已停更，PabloMK7 fork 仍活跃）",
          "nature": "gray",
          "for": "nintendo",
          "links": [
            {
              "label": "官网",
              "url": "https://citra-emu.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/PabloMK7/citra",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "melonDS",
          "desc": "DS / DSi 高精度模拟器",
          "nature": "community",
          "for": "nintendo",
          "links": [
            {
              "label": "官网",
              "url": "https://melonds.kuribo64.net/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/melonDS-emu/melonDS",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "DeSmuME",
          "desc": "老牌 DS 模拟器，兼容性强",
          "nature": "community",
          "for": "nintendo",
          "links": [
            {
              "label": "官网",
              "url": "https://desmume.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/TASVideos/desmume",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "mGBA",
          "desc": "GBA / GB / GBC 高精度模拟器",
          "nature": "community",
          "for": "nintendo",
          "links": [
            {
              "label": "官网",
              "url": "https://mgba.io/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/mgba-emu/mgba",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "VisualBoyAdvance-M",
          "desc": "VBA 社区维护版，修复大量 bug",
          "nature": "community",
          "for": "nintendo",
          "links": [
            {
              "label": "官网",
              "url": "https://github.com/visualboyadvance-m/visualboyadvance-m",
              "kind": "资料"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/visualboyadvance-m/visualboyadvance-m",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Snes9x",
          "desc": "SNES / Super Famicom 模拟器",
          "nature": "community",
          "for": "nintendo",
          "links": [
            {
              "label": "官网",
              "url": "https://www.snes9x.com/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/snes9xgit/snes9x",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "bsnes / higan",
          "desc": "byuu 开发的 SNES 周期精确模拟器",
          "nature": "community",
          "for": "nintendo",
          "links": [
            {
              "label": "官网",
              "url": "https://byuu.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/bsnes-emu/bsnes",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Mesen",
          "desc": "NES / Famicom 高精度模拟器",
          "nature": "community",
          "for": "nintendo",
          "links": [
            {
              "label": "官网",
              "url": "https://www.mesen.ca/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/SourMesen/Mesen2",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "PCSX2",
          "desc": "PS2 模拟器，兼容性极佳",
          "nature": "community",
          "for": "sony",
          "links": [
            {
              "label": "官网",
              "url": "https://pcsx2.net/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/PCSX2/pcsx2",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "RPCS3",
          "desc": "PS3 模拟器，可运行大量商业游戏",
          "nature": "community",
          "for": "sony",
          "links": [
            {
              "label": "官网",
              "url": "https://rpcs3.net/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/RPCS3/rpcs3",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "PPSSPP",
          "desc": "PSP 模拟器，支持高清渲染",
          "nature": "community",
          "for": "sony",
          "links": [
            {
              "label": "官网",
              "url": "https://www.ppsspp.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/hrydgard/ppsspp",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "DuckStation",
          "desc": "PS1 模拟器，注重易用性与画质增强",
          "nature": "community",
          "for": "sony",
          "links": [
            {
              "label": "官网",
              "url": "https://www.duckstation.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/stenzek/duckstation",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Beetle PSX HW",
          "desc": "libretro 核心，PS1 硬件级模拟",
          "nature": "community",
          "for": "sony",
          "links": [
            {
              "label": "官网",
              "url": "https://docs.libretro.com/library/beetle_psx_hw/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/libretro/beetle-psx-libretro",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Kronos",
          "desc": "Sega Saturn 模拟器 Yaba Sanshiro fork",
          "nature": "community",
          "for": "sega",
          "links": [
            {
              "label": "官网",
              "url": "https://segaretro.org/Kronos",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/FCare/Kronos",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Flycast",
          "desc": "Dreamcast / Naomi / Atomiswave 模拟器",
          "nature": "community",
          "for": "sega",
          "links": [
            {
              "label": "官网",
              "url": "https://flycast.app/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/flyinghead/flycast",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Redream",
          "desc": "Dreamcast 模拟器，开箱即用",
          "nature": "official",
          "for": "sega",
          "links": [
            {
              "label": "官网",
              "url": "https://redream.io/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Genesis Plus GX",
          "desc": "Mega Drive / Genesis / Master System libretro 核心",
          "nature": "community",
          "for": "sega",
          "links": [
            {
              "label": "官网",
              "url": "https://docs.libretro.com/library/genesis_plus_gx/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/libretro/Genesis-Plus-GX",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "BlastEm",
          "desc": "高精度 Genesis / Mega Drive 模拟器",
          "nature": "community",
          "for": "sega",
          "links": [
            {
              "label": "官网",
              "url": "https://www.retrodev.com/blastem/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/plasmo/blastem",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Xenia",
          "desc": "Xbox 360 模拟器",
          "nature": "gray",
          "for": "xbox",
          "links": [
            {
              "label": "官网",
              "url": "https://xenia.jp/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/xenia-project/xenia",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Xemu",
          "desc": "初代 Xbox 模拟器",
          "nature": "gray",
          "for": "xbox",
          "links": [
            {
              "label": "官网",
              "url": "https://xemu.app/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/xemu-project/xemu",
              "kind": "资料"
            }
          ]
        }
      ]
    },
    {
      "id": "media-servers",
      "name": "自托管媒体服务器",
      "icon": "🖥️",
      "desc": "在 NAS / VPS / 本地搭建私有影音、图书、漫画服务",
      "items": [
        {
          "name": "Jellyfin",
          "desc": "完全开源免费的 Plex 替代方案",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://jellyfin.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/jellyfin/jellyfin",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Plex",
          "desc": "最流行的个人媒体服务器（基础功能免费）",
          "nature": "official",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://www.plex.tv/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Emby",
          "desc": "功能丰富的媒体服务器，高级功能需订阅",
          "nature": "official",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://emby.media/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Navidrome",
          "desc": "轻量级自托管音乐流媒体服务器",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://www.navidrome.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/navidrome/navidrome",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Audiobookshelf",
          "desc": "自托管有声书 / 播客服务器",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://www.audiobookshelf.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/advplyr/audiobookshelf",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Calibre-Web",
          "desc": "基于 Calibre 数据库的 Web 电子书阅读器",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://github.com/janeczku/calibre-web",
              "kind": "资料"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/janeczku/calibre-web",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Komga",
          "desc": "自托管漫画 / 电子书服务器与阅读器",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://komga.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/gotson/komga",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Kavita",
          "desc": "高性能自托管电子书 / 漫画库",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://kavitareader.com/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/Kareadita/Kavita",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Stump",
          "desc": "Rust 编写的轻量级漫画服务器",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://www.stumpapp.dev/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/stumpapp/stump",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Dim",
          "desc": "Rust 编写的极简自托管媒体服务器",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://dim.video/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/Dusk-Labs/dim",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Tube Archivist",
          "desc": "YouTube 频道归档与自托管播放",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://www.tubearchivist.com/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/tubearchivist/tubearchivist",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "MeTube",
          "desc": "自托管 YouTube-DL Web UI",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://github.com/nanochess/metube",
              "kind": "资料"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/alexta69/metube",
              "kind": "资料"
            }
          ]
        }
      ]
    },
    {
      "id": "arr-stack",
      "name": "*arr 自动化生态",
      "icon": "⚙️",
      "desc": "影视 / 音乐 / 书籍自动化索引、下载与整理工具链",
      "items": [
        {
          "name": "Radarr",
          "desc": "电影自动化收集与管理",
          "nature": "gray",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://radarr.video/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/Radarr/Radarr",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Sonarr",
          "desc": "剧集自动化收集与管理",
          "nature": "gray",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://sonarr.tv/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/Sonarr/Sonarr",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Lidarr",
          "desc": "音乐自动化收集与管理",
          "nature": "gray",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://lidarr.audio/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/Lidarr/Lidarr",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Readarr",
          "desc": "电子书 / 有声书自动化收集",
          "nature": "gray",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://readarr.com/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/Readarr/Readarr",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Bazarr",
          "desc": "字幕自动搜索与下载",
          "nature": "gray",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://www.bazarr.media/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/morpheus65535/bazarr",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Prowlarr",
          "desc": "索引器 / Tracker 统一管理",
          "nature": "gray",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://prowlarr.com/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/Prowlarr/Prowlarr",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Overseerr",
          "desc": "媒体请求与发现面板",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://overseerr.dev/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/sct/overseerr",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Jellyseerr",
          "desc": "Overseerr 的 Jellyfin 适配 fork",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://github.com/Fallenbagel/jellyseerr",
              "kind": "资料"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/Fallenbagel/jellyseerr",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Tdarr",
          "desc": "媒体文件自动转码 / 清理流水线",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://tdarr.io/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/HaveAGitGat/Tdarr",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Unpackerr",
          "desc": "自动解压下载完成的压缩包",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://unpackerr.com/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/Unpackerr/unpackerr",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Maintainerr",
          "desc": "自动清理未观看 / 过期媒体",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://github.com/jorenn92/Maintainerr",
              "kind": "资料"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/jorenn92/Maintainerr",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Recyclarr",
          "desc": "同步 TRaSH-Guides 质量配置到 *arr",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://recyclarr.dev/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/recyclarr/recyclarr",
              "kind": "资料"
            }
          ]
        }
      ]
    },
    {
      "id": "download-clients",
      "name": "BT / 下载客户端",
      "icon": "⬇️",
      "desc": "BitTorrent / HTTP / Usenet 下载工具",
      "items": [
        {
          "name": "qBittorrent",
          "desc": "开源无广告 BT 客户端，自带 WebUI",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.qbittorrent.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/qbittorrent/qBittorrent",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Deluge",
          "desc": "轻量级跨平台 BT 客户端，插件丰富",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://deluge-torrent.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/deluge-torrent/deluge",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Transmission",
          "desc": "macOS / Linux 常用极简 BT 客户端",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://transmissionbt.com/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/transmission/transmission",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "ruTorrent",
          "desc": "rTorrent 的 Web 前端，适合 NAS / Seedbox",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://github.com/Novik/ruTorrent",
              "kind": "资料"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/Novik/ruTorrent",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "aria2",
          "desc": "命令行多协议下载工具（HTTP / FTP / BT / Metalink）",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://aria2.github.io/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/aria2/aria2",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Motrix",
          "desc": "基于 aria2 的跨平台 GUI 下载器",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://motrix.app/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/agalwood/Motrix",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Free Download Manager",
          "desc": "老牌多线程下载加速器",
          "nature": "official",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.freedownloadmanager.org/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "IDM (Internet Download Manager)",
          "desc": "Windows 付费下载加速标杆",
          "nature": "official",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.internetdownloadmanager.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "SABnzbd",
          "desc": "Usenet NZB 自动化下载器",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://sabnzbd.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/sabnzbd/sabnzbd",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "NZBGet",
          "desc": "高效 C++ Usenet 下载器",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://nzbget.net/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/nzbget-ng/nzbget",
              "kind": "资料"
            }
          ]
        }
      ]
    },
    {
      "id": "streaming-services",
      "name": "在线流媒体 & 聚合",
      "icon": "📺",
      "desc": "正版订阅流媒体与多源聚合工具",
      "items": [
        {
          "name": "Netflix",
          "desc": "全球最大订阅制流媒体",
          "nature": "official",
          "for": "stream",
          "links": [
            {
              "label": "官网",
              "url": "https://www.netflix.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Disney+",
          "desc": "迪士尼 / 漫威 / 星战 / 皮克斯内容",
          "nature": "official",
          "for": "stream",
          "links": [
            {
              "label": "官网",
              "url": "https://www.disneyplus.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Amazon Prime Video",
          "desc": "亚马逊会员附赠流媒体",
          "nature": "official",
          "for": "stream",
          "links": [
            {
              "label": "官网",
              "url": "https://www.primevideo.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Apple TV+",
          "desc": "苹果原创剧集 / 电影",
          "nature": "official",
          "for": "stream",
          "links": [
            {
              "label": "官网",
              "url": "https://tv.apple.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "HBO Max / Max",
          "desc": "华纳兄弟 / HBO 内容",
          "nature": "official",
          "for": "stream",
          "links": [
            {
              "label": "官网",
              "url": "https://www.max.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Spotify",
          "desc": "全球最大音乐流媒体",
          "nature": "official",
          "for": "stream",
          "links": [
            {
              "label": "官网",
              "url": "https://www.spotify.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "YouTube Music",
          "desc": "YouTube 音乐流媒体服务",
          "nature": "official",
          "for": "stream",
          "links": [
            {
              "label": "官网",
              "url": "https://music.youtube.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Tidal",
          "desc": "Hi-Fi 无损 / Dolby Atmos 音乐",
          "nature": "official",
          "for": "stream",
          "links": [
            {
              "label": "官网",
              "url": "https://tidal.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Stremio",
          "desc": "开源流媒体聚合器 + 插件生态",
          "nature": "gray",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.stremio.com/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/Stremio/stremio-desktop",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Kodi",
          "desc": "开源家庭影院中心，插件扩展",
          "nature": "community",
          "for": "multi",
          "links": [
            {
              "label": "官网",
              "url": "https://kodi.tv/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/xbmc/xbmc",
              "kind": "资料"
            }
          ]
        }
      ]
    },
    {
      "id": "cloud-storage",
      "name": "云盘 / 网盘",
      "icon": "☁️",
      "desc": "国内外主流云存储与离线下载服务",
      "items": [
        {
          "name": "百度网盘",
          "desc": "国内用户量最大的网盘",
          "nature": "official",
          "for": "cn",
          "links": [
            {
              "label": "官网",
              "url": "https://pan.baidu.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "阿里云盘",
          "desc": "不限速大空间云盘",
          "nature": "official",
          "for": "cn",
          "links": [
            {
              "label": "官网",
              "url": "https://www.alipan.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "夸克网盘",
          "desc": "夸克浏览器内置云盘，资源分享活跃",
          "nature": "official",
          "for": "cn",
          "links": [
            {
              "label": "官网",
              "url": "https://pan.quark.cn/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "115 网盘",
          "desc": "老牌网盘，离线下载能力强",
          "nature": "official",
          "for": "cn",
          "links": [
            {
              "label": "官网",
              "url": "https://115.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "天翼云盘",
          "desc": "中国电信出品，上传下载不限速",
          "nature": "official",
          "for": "cn",
          "links": [
            {
              "label": "官网",
              "url": "https://cloud.189.cn/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Google Drive",
          "desc": "Google Workspace 集成云盘",
          "nature": "official",
          "for": "global",
          "links": [
            {
              "label": "官网",
              "url": "https://drive.google.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "OneDrive",
          "desc": "Microsoft 365 集成云盘",
          "nature": "official",
          "for": "global",
          "links": [
            {
              "label": "官网",
              "url": "https://onedrive.live.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Dropbox",
          "desc": "老牌文件同步云盘",
          "nature": "official",
          "for": "global",
          "links": [
            {
              "label": "官网",
              "url": "https://www.dropbox.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "MEGA",
          "desc": "端到端加密云存储",
          "nature": "official",
          "for": "global",
          "links": [
            {
              "label": "官网",
              "url": "https://mega.io/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "pCloud",
          "desc": "瑞士隐私云盘，支持虚拟驱动器",
          "nature": "official",
          "for": "global",
          "links": [
            {
              "label": "官网",
              "url": "https://www.pcloud.com/",
              "kind": "官方"
            }
          ]
        }
      ]
    },
    {
      "id": "resource-search",
      "name": "资源搜索 / 索引",
      "icon": "🔍",
      "desc": "公开资源搜索引擎与元数据索引站",
      "items": [
        {
          "name": "TMDB",
          "desc": "The Movie Database，影视元数据开放 API",
          "nature": "official",
          "for": "meta",
          "links": [
            {
              "label": "官网",
              "url": "https://www.themoviedb.org/",
              "kind": "官方"
            },
            {
              "label": "文档",
              "url": "https://developer.themoviedb.org/docs",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "TVDB",
          "desc": "TheTVDB，剧集元数据权威来源",
          "nature": "official",
          "for": "meta",
          "links": [
            {
              "label": "官网",
              "url": "https://thetvdb.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "IGDB",
          "desc": "Twitch 旗下游戏数据库",
          "nature": "official",
          "for": "meta",
          "links": [
            {
              "label": "官网",
              "url": "https://www.igdb.com/",
              "kind": "官方"
            },
            {
              "label": "文档",
              "url": "https://api-docs.igdb.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "MusicBrainz",
          "desc": "开放音乐元数据百科全书",
          "nature": "official",
          "for": "meta",
          "links": [
            {
              "label": "官网",
              "url": "https://musicbrainz.org/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "OpenSubtitles",
          "desc": "全球最大字幕库",
          "nature": "official",
          "for": "meta",
          "links": [
            {
              "label": "官网",
              "url": "https://www.opensubtitles.org/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Subdl",
          "desc": "新兴字幕搜索站",
          "nature": "official",
          "for": "meta",
          "links": [
            {
              "label": "官网",
              "url": "https://subdl.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "ROMVault",
          "desc": "ROM 完整性校验与 DAT 管理",
          "nature": "community",
          "for": "rom",
          "links": [
            {
              "label": "官网",
              "url": "https://www.romvault.com/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/RomVault/RomVault",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Clrmamepro",
          "desc": "经典 ROM 集合管理工具",
          "nature": "official",
          "for": "rom",
          "links": [
            {
              "label": "官网",
              "url": "https://mamedev.emulab.it/clrmamepro/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "No-Intro DAT-o-MATIC",
          "desc": "卡带 ROM 校验 DAT 数据库",
          "nature": "official",
          "for": "rom",
          "links": [
            {
              "label": "官网",
              "url": "https://datomatic.no-intro.org/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Redump",
          "desc": "光盘镜像校验数据库",
          "nature": "official",
          "for": "rom",
          "links": [
            {
              "label": "官网",
              "url": "http://redump.org/",
              "kind": "官方"
            }
          ]
        }
      ]
    },
    {
      "id": "book-sources",
      "icon": "📚",
      "name": "电子书 / 图书获取",
      "desc": "电子书库、公版古籍、正版阅读与购买入口。灰色书站域名经常变动，打不开时换备用域名；下载内容请自行判断版权风险，优先正版。",
      "items": [
        {
          "name": "Z-Library",
          "desc": "全球最大的电子书库之一，中外文书籍与期刊极全，需注册；域名常换。",
          "nature": "gray",
          "for": "电子书 / 图书",
          "links": [
            {
              "label": "主入口",
              "url": "https://zh.z-library.sk/",
              "kind": "入口"
            },
            {
              "label": "备用域名",
              "url": "https://z-library.ec/",
              "kind": "入口"
            },
            {
              "label": "统一登录",
              "url": "https://singlelogin.re/",
              "kind": "入口"
            },
            {
              "label": "镜像导航",
              "url": "https://zlibrary.vip/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "Anna's Archive",
          "desc": "聚合 Z-Library、Library Genesis、Sci-Hub 等资源的影子图书馆搜索引擎，一个入口搜全部。",
          "nature": "gray",
          "for": "电子书 / 图书 / 论文",
          "links": [
            {
              "label": "主站",
              "url": "https://annas-archive.gl/",
              "kind": "入口"
            },
            {
              "label": "镜像",
              "url": "https://annas-archive.gd/",
              "kind": "入口"
            },
            {
              "label": "镜像",
              "url": "https://annas-archive.pk/",
              "kind": "入口"
            },
            {
              "label": "镜像列表",
              "url": "https://annas-archive.gl/faq#mirrors",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "Library Genesis",
          "desc": "老牌学术电子书库，教材与学术专著覆盖广，无需注册即可下载。",
          "nature": "gray",
          "for": "电子书 / 教材",
          "links": [
            {
              "label": "libgen.rs",
              "url": "https://libgen.rs/",
              "kind": "入口"
            },
            {
              "label": "libgen.is",
              "url": "https://libgen.is/",
              "kind": "入口"
            },
            {
              "label": "libgen.st",
              "url": "https://libgen.st/",
              "kind": "入口"
            },
            {
              "label": "搜索入口",
              "url": "https://libgen.rs/search.php",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "鸠摩搜书",
          "desc": "中文电子书聚合搜索，把各网盘与书站结果汇总到一页。",
          "nature": "community",
          "for": "中文电子书",
          "links": [
            {
              "label": "官网",
              "url": "https://www.jiumodiary.com/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "熊猫搜书",
          "desc": "聚合数十个电子书站点的导航与搜索。",
          "nature": "community",
          "for": "中文电子书",
          "links": [
            {
              "label": "官网",
              "url": "https://xmsoushu.com/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "苦瓜书盘",
          "desc": "以 PDF 为主的中文电子书分享站。",
          "nature": "gray",
          "for": "中文电子书",
          "links": [
            {
              "label": "官网",
              "url": "https://www.kgbook.com/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "古腾堡计划",
          "desc": "公版外文电子书鼻祖，6 万余种免费 EPUB/Kindle 格式。",
          "nature": "official",
          "for": "外文公版",
          "links": [
            {
              "label": "官网",
              "url": "https://www.gutenberg.org/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "维基文库",
          "desc": "维基媒体旗下的公版文献库，中文古籍与外文经典原文。",
          "nature": "community",
          "for": "公版文献",
          "links": [
            {
              "label": "中文站",
              "url": "https://zh.wikisource.org/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "Internet Archive",
          "desc": "互联网档案馆，可在线借阅扫描版图书，含大量绝版书。",
          "nature": "community",
          "for": "外文图书",
          "links": [
            {
              "label": "官网",
              "url": "https://archive.org/",
              "kind": "入口"
            },
            {
              "label": "Open Library",
              "url": "https://openlibrary.org/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "中国哲学书电子化计划",
          "desc": "先秦至清代典籍全文检索，附原文、译文与注释，研究古籍首选。",
          "nature": "community",
          "for": "中文古籍",
          "links": [
            {
              "label": "官网",
              "url": "https://ctext.org/zh",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "书格",
          "desc": "高清古籍善本扫描下载，多为公版影印本，排版考究。",
          "nature": "community",
          "for": "中文古籍",
          "links": [
            {
              "label": "官网",
              "url": "https://www.shuge.org/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "微信读书",
          "desc": "中文电子书正版平台，出版书与网文覆盖广，可无限卡畅读。",
          "nature": "official",
          "for": "中文电子书",
          "links": [
            {
              "label": "网页版",
              "url": "https://weread.qq.com/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "豆瓣读书",
          "desc": "图书资料、评分与书评库，找书与选书的第一站。",
          "nature": "official",
          "for": "图书资料",
          "links": [
            {
              "label": "官网",
              "url": "https://book.douban.com/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "京东读书 / 当当网",
          "desc": "纸质书与电子书购买，新书首发与折扣活动多。",
          "nature": "official",
          "for": "购买",
          "links": [
            {
              "label": "京东图书",
              "url": "https://book.jd.com/",
              "kind": "入口"
            },
            {
              "label": "当当网",
              "url": "http://book.dangdang.com/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "中图网",
          "desc": "出版社尾货与特价纸质书，淘绝版书的好去处。",
          "nature": "official",
          "for": "特价纸质书",
          "links": [
            {
              "label": "官网",
              "url": "http://www.bookschina.com/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "Amazon Books / Google Books",
          "desc": "外文原版购买与预览，Kindle 电子书生态。",
          "nature": "official",
          "for": "外文原版",
          "links": [
            {
              "label": "Amazon",
              "url": "https://www.amazon.com/books-used-books-textbooks/b?node=283155",
              "kind": "入口"
            },
            {
              "label": "Google Books",
              "url": "https://books.google.com/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "得到",
          "desc": "中文知识付费与电子书平台，课程与听书资源丰富。",
          "nature": "official",
          "for": "中文电子书 / 听书",
          "links": [
            {
              "label": "官网",
              "url": "https://www.igetget.com/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "喜马拉雅 / LibriVox",
          "desc": "中文有声书平台与外文公版有声书（志愿者朗读）。",
          "nature": "official",
          "for": "有声书",
          "links": [
            {
              "label": "喜马拉雅",
              "url": "https://www.ximalaya.com/",
              "kind": "入口"
            },
            {
              "label": "LibriVox",
              "url": "https://librivox.org/",
              "kind": "入口"
            }
          ]
        }
      ]
    },
    {
      "id": "academic-sources",
      "icon": "🎓",
      "name": "学术文献 / 论文获取",
      "desc": "论文与学术文献的检索、下载与馆际传递入口。灰色站点请自行判断版权风险；正规途径优先走图书馆文献传递。",
      "items": [
        {
          "name": "Sci-Hub",
          "desc": "输入 DOI 或链接即可获取付费论文 PDF，域名常换。",
          "nature": "gray",
          "for": "论文",
          "links": [
            {
              "label": "sci-hub.se",
              "url": "https://sci-hub.se/",
              "kind": "入口"
            },
            {
              "label": "sci-hub.ru",
              "url": "https://sci-hub.ru/",
              "kind": "入口"
            },
            {
              "label": "sci-hub.st",
              "url": "https://sci-hub.st/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "Anna's Archive（论文）",
          "desc": "同样可按 DOI 检索并下载论文，是 Sci-Hub 的补充。",
          "nature": "gray",
          "for": "论文",
          "links": [
            {
              "label": "主站",
              "url": "https://annas-archive.gl/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "Google Scholar",
          "desc": "学术搜索引擎，聚合期刊、预印本与学位论文，可找开放获取版本。",
          "nature": "official",
          "for": "论文检索",
          "links": [
            {
              "label": "官网",
              "url": "https://scholar.google.com/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "全国图书馆参考咨询联盟",
          "desc": "依托全国图书馆的文献传递服务，注册后可免费获取论文与图书章节。",
          "nature": "community",
          "for": "文献传递",
          "links": [
            {
              "label": "官网",
              "url": "http://www.ucdrs.superlib.net/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "国家哲学社会科学文献中心",
          "desc": "国家社科基金支持，哲学社科类期刊与图书免费全文。",
          "nature": "official",
          "for": "免费学术",
          "links": [
            {
              "label": "官网",
              "url": "https://www.ncpssd.org/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "中国知网",
          "desc": "中文核心期刊、学位论文与会议论文最全的数据库（机构订阅）。",
          "nature": "official",
          "for": "中文论文",
          "links": [
            {
              "label": "官网",
              "url": "https://www.cnki.net/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "万方数据",
          "desc": "中文科技与社科文献库，与知网互补。",
          "nature": "official",
          "for": "中文论文",
          "links": [
            {
              "label": "官网",
              "url": "https://www.wanfangdata.com.cn/",
              "kind": "入口"
            }
          ]
        },
        {
          "name": "国家科技图书文献中心",
          "desc": "NSTL，理工医农外文文献检索与原文传递。",
          "nature": "official",
          "for": "外文文献",
          "links": [
            {
              "label": "官网",
              "url": "https://www.nstl.gov.cn/",
              "kind": "入口"
            }
          ]
        }
      ]
    },
    {
      "id": "transcode-tools",
      "name": "转码 / 压制 / 修复",
      "icon": "🎞️",
      "desc": "视频 / 音频编码转换、画质增强与修复工具",
      "items": [
        {
          "name": "FFmpeg",
          "desc": "音视频处理事实标准命令行工具",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://ffmpeg.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/FFmpeg/FFmpeg",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "HandBrake",
          "desc": "开源视频转码 GUI",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://handbrake.fr/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/HandBrake/HandBrake",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Shutter Encoder",
          "desc": "FFmpeg GUI 封装，功能全面",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.shutterencoder.com/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/cpouzet/ShutterEncoder",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "LosslessCut",
          "desc": "无损视频剪切合并工具",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://losslesscut.app/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/mifi/lossless-cut",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "MKVToolNix",
          "desc": "MKV 封装 / 拆分 / 编辑套件",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://mkvtoolnix.download/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/mbunkus/mkvtoolnix",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "MakeMKV",
          "desc": "蓝光 / DVD 无损提取为 MKV",
          "nature": "official",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.makemkv.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Topaz Video AI",
          "desc": "AI 视频超分 / 插帧 / 降噪（付费）",
          "nature": "official",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.topazlabs.com/video-ai",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Waifu2x",
          "desc": "动漫图片 / 视频 AI 放大",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://waifu2x.booru.pics/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/AaronFeng753/Waifu2x-Extension-GUI",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "SoX",
          "desc": "命令行音频处理瑞士军刀",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "http://sox.sourceforge.net/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/chirlu/sox",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Audacity",
          "desc": "开源音频编辑器",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.audacityteam.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/audacity/audacity",
              "kind": "资料"
            }
          ]
        }
      ]
    },
    {
      "id": "mods-patches",
      "name": "MOD / 汉化 / 补丁",
      "icon": "🧩",
      "desc": "游戏模组、汉化包、社区补丁分发平台",
      "items": [
        {
          "name": "Nexus Mods",
          "desc": "全球最大通用 MOD 社区",
          "nature": "official",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.nexusmods.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "ModDB",
          "desc": "老牌 MOD 数据库",
          "nature": "official",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.moddb.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "CurseForge",
          "desc": "Minecraft / WoW / 其他游戏 MOD 平台",
          "nature": "official",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.curseforge.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Thunderstore",
          "desc": "Unity / MonoMod 游戏 MOD 平台",
          "nature": "official",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://thunderstore.io/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Fluffy Mod Manager",
          "desc": "RE Engine / Capcom 游戏 MOD 管理器",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://github.com/FluffyQuack/FluffyModManager",
              "kind": "资料"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/FluffyQuack/FluffyModManager",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Vortex",
          "desc": "Nexus Mods 官方 MOD 管理器",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.nexusmods.com/about/vortex/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/Nexus-Mods/Vortex",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Mod Organizer 2",
          "desc": "Bethesda 游戏深度 MOD 管理",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://github.com/ModOrganizer2/modorganizer",
              "kind": "资料"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/ModOrganizer2/modorganizer",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Special K",
          "desc": "通用游戏注入框架，HDR / 帧率 / 纹理修复",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://special-k.info/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/Kaldaien/SpecialK",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "DGVOODOO2",
          "desc": "老游戏 Glide → DirectX 包装器",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://dege.freeweb.hu/dgVoodoo2/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/dege-dfwg/dgVoodoo2",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Widescreen Fixer",
          "desc": "老游戏宽屏适配补丁集合",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://community.pcgamingwiki.com/files/file/1-widescreen-fixer/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/ThirteenAG/WidescreenFixesPack",
              "kind": "资料"
            }
          ]
        }
      ]
    },
    {
      "id": "wikis-guides",
      "name": "攻略 / Wiki / 数据库",
      "icon": "📖",
      "desc": "游戏百科、成就指南、速通知识库",
      "items": [
        {
          "name": "PCGamingWiki",
          "desc": "PC 游戏技术信息百科（分辨率 / DRM / 修复）",
          "nature": "official",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.pcgamingwiki.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "HowLongToBeat",
          "desc": "游戏通关时长众包数据库",
          "nature": "official",
          "for": "multi",
          "links": [
            {
              "label": "官网",
              "url": "https://howlongtobeat.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Backloggd",
          "desc": "游戏 backlog 追踪与评分社区",
          "nature": "official",
          "for": "multi",
          "links": [
            {
              "label": "官网",
              "url": "https://backloggd.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Grouvee",
          "desc": "游戏书架式收藏管理",
          "nature": "official",
          "for": "multi",
          "links": [
            {
              "label": "官网",
              "url": "https://www.grouvee.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Speedrun.com",
          "desc": "全球速通排行榜与社区",
          "nature": "official",
          "for": "multi",
          "links": [
            {
              "label": "官网",
              "url": "https://www.speedrun.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Achievement Hunter / TrueAchievements",
          "desc": "Xbox / Steam 成就追踪社区",
          "nature": "official",
          "for": "xbox / pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.trueachievements.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "PSNProfiles",
          "desc": "PlayStation 奖杯追踪社区",
          "nature": "official",
          "for": "ps",
          "links": [
            {
              "label": "官网",
              "url": "https://psnprofiles.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Nintendo Life",
          "desc": "任天堂游戏新闻 / 评测 / 攻略",
          "nature": "official",
          "for": "nintendo",
          "links": [
            {
              "label": "官网",
              "url": "https://www.nintendolife.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "IGN Wiki",
          "desc": "IGN 旗下游戏攻略百科",
          "nature": "official",
          "for": "multi",
          "links": [
            {
              "label": "官网",
              "url": "https://www.ign.com/wikis",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Fandom Gaming",
          "desc": "海量游戏 Fan Wiki 托管平台",
          "nature": "official",
          "for": "multi",
          "links": [
            {
              "label": "官网",
              "url": "https://www.fandom.com/gaming",
              "kind": "官方"
            }
          ]
        }
      ]
    },
    {
      "id": "network-privacy",
      "name": "网络 / 隐私 / 代理",
      "icon": "🔒",
      "desc": "Tracker 管理、DNS、隐私保护与网络加速工具",
      "items": [
        {
          "name": "TrackersList",
          "desc": "公共 BT Tracker 列表聚合",
          "nature": "community",
          "for": "net",
          "links": [
            {
              "label": "官网",
              "url": "https://trackerslist.com/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/XIU2/TrackersListCollection",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Pi-hole",
          "desc": "全网 DNS 级广告拦截",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://pi-hole.net/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/pi-hole/pi-hole",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "AdGuard Home",
          "desc": "自托管 DNS 广告拦截器",
          "nature": "community",
          "for": "selfhost",
          "links": [
            {
              "label": "官网",
              "url": "https://adguard.com/adguard-home/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/AdguardTeam/AdGuardHome",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "NextDNS",
          "desc": "云端可定制 DNS 过滤服务",
          "nature": "official",
          "for": "net",
          "links": [
            {
              "label": "官网",
              "url": "https://nextdns.io/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Cloudflare WARP",
          "desc": "免费 DNS + WireGuard 加速",
          "nature": "official",
          "for": "net",
          "links": [
            {
              "label": "官网",
              "url": "https://one.one.one.one/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Tailscale",
          "desc": "零配置 WireGuard Mesh VPN",
          "nature": "community",
          "for": "net",
          "links": [
            {
              "label": "官网",
              "url": "https://tailscale.com/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/tailscale/tailscale",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "ZeroTier",
          "desc": "开源虚拟局域网组网工具",
          "nature": "community",
          "for": "net",
          "links": [
            {
              "label": "官网",
              "url": "https://www.zerotier.com/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/zerotier/ZeroTierOne",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Syncthing",
          "desc": "去中心化 P2P 文件同步",
          "nature": "community",
          "for": "net",
          "links": [
            {
              "label": "官网",
              "url": "https://syncthing.net/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/syncthing/syncthing",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Resilio Sync",
          "desc": "BT 协议私有文件同步",
          "nature": "official",
          "for": "net",
          "links": [
            {
              "label": "官网",
              "url": "https://www.resilio.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "FilePizza",
          "desc": "浏览器 P2P 临时文件传输",
          "nature": "community",
          "for": "net",
          "links": [
            {
              "label": "官网",
              "url": "https://file.pizza/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/kern/filepizza",
              "kind": "资料"
            }
          ]
        }
      ]
    },
    {
      "id": "dev-reverse",
      "name": "开发 / 逆向 / 调试",
      "icon": "🛠️",
      "desc": "游戏逆向、内存调试、自制开发工具链",
      "items": [
        {
          "name": "Cheat Engine",
          "desc": "Windows 内存扫描 / 调试器",
          "nature": "gray",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://www.cheatengine.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/cheat-engine/cheat-engine",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "x64dbg",
          "desc": "开源 Windows x64/x32 调试器",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://x64dbg.com/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/x64dbg/x64dbg",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Ghidra",
          "desc": "NSA 开源反汇编 / 反编译框架",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://ghidra-sre.org/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/NationalSecurityAgency/ghidra",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "IDA Free",
          "desc": "Hex-Rays 免费版反汇编器",
          "nature": "official",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://hex-rays.com/ida-free/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "dnSpyEx",
          "desc": ".NET 程序反编译 / 调试（dnSpy 社区 fork）",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://github.com/dnSpyEx/dnSpy",
              "kind": "资料"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/dnSpyEx/dnSpy",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Frida",
          "desc": "动态二进制插桩框架",
          "nature": "community",
          "for": "pc / mobile",
          "links": [
            {
              "label": "官网",
              "url": "https://frida.re/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/frida/frida",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "ReClass.NET",
          "desc": ".NET / Native 内存结构可视化",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://github.com/ReClassNET/ReClass.NET",
              "kind": "资料"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/ReClassNET/ReClass.NET",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "Process Hacker / System Informer",
          "desc": "高级进程 / 句柄 / 驱动查看器",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://systeminformer.com/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/winsiderss/systeminformer",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "UniVRAM / UnityExplorer",
          "desc": "Unity 游戏运行时检查 / MOD 注入",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://github.com/sinai-dev/UnityExplorer",
              "kind": "资料"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/sinai-dev/UnityExplorer",
              "kind": "资料"
            }
          ]
        },
        {
          "name": "MelonLoader",
          "desc": "Unity 游戏通用 MOD 加载器",
          "nature": "community",
          "for": "pc",
          "links": [
            {
              "label": "官网",
              "url": "https://melonwiki.xyz/",
              "kind": "官方"
            },
            {
              "label": "GitHub",
              "url": "https://github.com/LavaGang/MelonLoader",
              "kind": "资料"
            }
          ]
        }
      ]
    },
    {
      "id": "communities",
      "name": "社区 / 论坛 / 资讯",
      "icon": "💬",
      "desc": "玩家交流、资源讨论、行业资讯聚集地",
      "items": [
        {
          "name": "Reddit r/Piracy",
          "desc": "海盗湾相关讨论社区（信息参考用）",
          "nature": "gray",
          "for": "community",
          "links": [
            {
              "label": "官网",
              "url": "https://www.reddit.com/r/Piracy/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Reddit r/emulation",
          "desc": "模拟器技术讨论社区",
          "nature": "official",
          "for": "community",
          "links": [
            {
              "label": "官网",
              "url": "https://www.reddit.com/r/emulation/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Reddit r/DataHoarder",
          "desc": "数据囤积与归档社区",
          "nature": "official",
          "for": "community",
          "links": [
            {
              "label": "官网",
              "url": "https://www.reddit.com/r/DataHoarder/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "r/selfhosted",
          "desc": "自托管服务交流与推荐",
          "nature": "official",
          "for": "community",
          "links": [
            {
              "label": "官网",
              "url": "https://www.reddit.com/r/selfhosted/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "CS.RIN.RU",
          "desc": "Steam 相关技术讨论论坛",
          "nature": "gray",
          "for": "community",
          "links": [
            {
              "label": "官网",
              "url": "https://cs.rin.ru/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "GBATemp",
          "desc": "任天堂 / 掌机破解与自制社区",
          "nature": "gray",
          "for": "community",
          "links": [
            {
              "label": "官网",
              "url": "https://gbatemp.net/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "ResetEra",
          "desc": "核心玩家综合讨论论坛",
          "nature": "official",
          "for": "community",
          "links": [
            {
              "label": "官网",
              "url": "https://www.resetera.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "NeoGAF",
          "desc": "老牌硬核游戏论坛",
          "nature": "official",
          "for": "community",
          "links": [
            {
              "label": "官网",
              "url": "https://www.neogaf.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Keylol (其乐)",
          "desc": "中文 Steam / PC 游戏社区",
          "nature": "official",
          "for": "community",
          "links": [
            {
              "label": "官网",
              "url": "https://keylol.com/",
              "kind": "官方"
            }
          ]
        },
        {
          "name": "Bangumi",
          "desc": "中文 ACG 作品管理与评分社区",
          "nature": "official",
          "for": "community",
          "links": [
            {
              "label": "官网",
              "url": "https://bangumi.tv/",
              "kind": "官方"
            }
          ]
        }
      ]
    }
  ]
};
