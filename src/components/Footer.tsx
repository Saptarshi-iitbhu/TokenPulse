'use client';

import {
    Settings,
    Wallet,
    Compass,
    Activity,
    BarChart2,
    Flame,
    Zap,
    LayoutTemplate,
    Bell,
    Palette,
    MessageSquare,
    FileText,
    ChevronDown,
    Wifi,
    Layers,
    Monitor
} from 'lucide-react';

export const Footer = () => {
    return (
        <div className="h-10 bg-[#0a0a0a] border-t border-[#1a1a1a] flex items-center justify-between px-4 text-[11px] select-none z-50">
            {/* Left Section */}
            <div className="flex items-center gap-4">
                {/* Preset Button */}
                <button className="flex items-center gap-2 bg-[#1a1a2e] text-blue-400 px-3 py-1 rounded border border-blue-900/30 hover:bg-[#2a2a4e] transition-colors">
                    <Settings className="w-3 h-3" />
                    <span className="font-bold">PRESET 1</span>
                </button>

                {/* Wallet Selector */}
                <div className="flex items-center gap-2 bg-[#111] px-3 py-1 rounded border border-[#222] text-gray-400">
                    <Wallet className="w-3 h-3" />
                    <span className="font-medium text-white">1</span>
                    <span className="text-gray-600">≡</span>
                    <span className="font-medium text-white">0</span>
                    <ChevronDown className="w-3 h-3 ml-1" />
                </div>

                {/* Divider */}
                <div className="h-4 w-[1px] bg-[#222]"></div>

                {/* Navigation Links */}
                <div className="flex items-center gap-4 text-gray-400">
                    <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <Settings className="w-3.5 h-3.5" />
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <Wallet className="w-3.5 h-3.5" />
                        <span>Wallet</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <span className="font-bold text-lg leading-none">𝕏</span>
                        <span>Twitter</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <Compass className="w-3.5 h-3.5" />
                        <span>Discover</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <Activity className="w-3.5 h-3.5" />
                        <span>Pulse</span>
                        <div className="w-1.5 h-1.5 rounded-full bg-pink-500"></div>
                    </button>
                    <button className="flex items-center gap-1.5 hover:text-white transition-colors">
                        <BarChart2 className="w-3.5 h-3.5" />
                        <span>PnL</span>
                    </button>
                </div>
            </div>

            {/* Center Section - Stats */}
            <div className="flex items-center gap-6">
                {/* Gas/Network Pill */}
                <div className="flex items-center gap-2 bg-[#111] px-2 py-0.5 rounded-full border border-[#222]">
                    <div className="flex items-center gap-1 text-green-500">
                        <div className="w-2 h-2 rounded-full bg-green-500"></div>
                        <Flame className="w-3 h-3" />
                    </div>
                    <div className="w-[1px] h-3 bg-[#333]"></div>
                    <div className="flex items-center gap-1 text-red-500">
                        <Zap className="w-3 h-3" />
                    </div>
                </div>

                {/* Prices */}
                <div className="flex items-center gap-4 text-gray-400 font-medium">
                    <div className="flex items-center gap-1.5">
                        <span className="text-orange-500">₿</span>
                        <span className="text-orange-500">$90.5K</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-blue-400">♦</span>
                        <span className="text-blue-400">$2979</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <span className="text-cyan-400">◎</span>
                        <span className="text-green-500">$139.47</span>
                    </div>
                    <div className="w-[1px] h-3 bg-[#222]"></div>
                    <span>$57.3K</span>
                    <div className="flex items-center gap-1">
                        <FileText className="w-3 h-3" />
                        <span>0.003</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Layers className="w-3 h-3" />
                        <span>0.003</span>
                    </div>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex items-center gap-4">
                {/* Connection Status */}
                <div className="flex items-center gap-2 bg-green-900/20 text-green-500 px-3 py-1 rounded border border-green-900/30">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="font-medium">Connection is stable</span>
                </div>

                {/* Global Dropdown */}
                <button className="flex items-center gap-1 text-white font-medium hover:text-gray-300">
                    GLOBAL
                    <ChevronDown className="w-3 h-3" />
                </button>

                {/* Icons */}
                <div className="flex items-center gap-3 text-gray-400">
                    <LayoutTemplate className="w-4 h-4 hover:text-white cursor-pointer" />
                    <Bell className="w-4 h-4 hover:text-white cursor-pointer" />
                    <Palette className="w-4 h-4 hover:text-white cursor-pointer" />

                    <div className="h-4 w-[1px] bg-[#222]"></div>

                    <MessageSquare className="w-4 h-4 hover:text-white cursor-pointer" />
                    <span className="font-bold text-lg leading-none hover:text-white cursor-pointer">𝕏</span>
                    <FileText className="w-4 h-4 hover:text-white cursor-pointer" />
                </div>
            </div>
        </div>
    );
};
