'use client';

import { Token } from '@/types/token';
import {
    User,
    Globe,
    Search,
    Trophy,
    Crown,
    Zap,
    Copy,
    CandlestickChart,
    Users,
    ChefHat,
    Target,
    Ghost,
    Hexagon,
    Bird,
    Pill
} from 'lucide-react';
import { cn } from '@/lib/utils';
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
} from "@/components/ui/hover-card";

interface TokenCardProps {
    token: Token;
}

export const TokenCard = ({ token }: TokenCardProps) => {
    const formatNumber = (num: number) => {
        if (num >= 1000000) return `$${(num / 1000000).toFixed(1)}M`;
        if (num >= 1000) return `$${(num / 1000).toFixed(1)}K`;
        return `$${num.toFixed(2)}`;
    };

    const getTimeAgo = (date: string) => {
        const seconds = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
        if (seconds < 60) return `${seconds}s`;
        if (seconds < 3600) return `${Math.floor(seconds / 60)}m`;
        if (seconds < 86400) return `${Math.floor(seconds / 3600)}h`;
        return `${Math.floor(seconds / 86400)}d`;
    };

    // Mock similar tokens data
    const similarTokens = [
        { name: 'BOXY', age: '4m', tx: '5s', holders: '12K' },
        { name: 'BOXYCAT', age: '1y', tx: '1y', holders: '1.28K' },
    ];

    return (
        <div className="bg-[#0a0a0a] border-b border-[#1a1a1a] p-3 hover:bg-[#111] transition-colors group relative">
            <div className="flex gap-3">
                {/* Left: Image */}
                <div className="relative shrink-0">
                    <HoverCard openDelay={0} closeDelay={100}>
                        <HoverCardTrigger asChild>
                            <div className="relative cursor-pointer">
                                <img
                                    src={token.logoUrl}
                                    alt={token.name}
                                    className="w-[72px] h-[72px] rounded-lg ring-1 ring-green-500/50 hover:ring-green-500 transition-all object-cover"
                                />
                                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-[#0a0a0a] rounded-full flex items-center justify-center border border-[#1a1a1a]">
                                    <Pill className="w-3 h-3 text-green-500" />
                                </div>
                            </div>
                        </HoverCardTrigger>
                        <HoverCardContent className="w-72 bg-[#1a1a1a] border-[#2a2a2a] p-0" side="left" align="start">
                            <div className="p-4 border-b border-[#2a2a2a]">
                                <div className="flex items-center gap-3 mb-3">
                                    <img src={token.logoUrl} alt="Creator" className="w-24 h-24 rounded-lg object-cover" />
                                    <div className="w-8 h-8 bg-[#0a0a0a] rounded-full flex items-center justify-center border border-[#2a2a2a]">
                                        <span className="text-lg">📷</span>
                                    </div>
                                </div>
                            </div>
                            <div className="p-4">
                                <h3 className="text-gray-400 text-xs mb-3">Similar Tokens</h3>
                                <div className="space-y-3">
                                    {similarTokens.map((similar, idx) => (
                                        <div key={idx} className="flex items-center gap-3">
                                            <img src={`https://api.dicebear.com/7.x/identicon/svg?seed=similar-${idx}`} alt={similar.name} className="w-8 h-8 rounded" />
                                            <div className="flex-1">
                                                <div className="flex items-center gap-2">
                                                    <span className="text-white font-medium text-sm">{similar.name}</span>
                                                    <span className="text-green-500 text-xs">{similar.age}</span>
                                                </div>
                                                <div className="text-gray-500 text-xs">TX: {similar.tx}</div>
                                            </div>
                                            <div className="text-blue-400 text-xs">{similar.holders}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </HoverCardContent>
                    </HoverCard>
                    <div className="mt-1 text-[10px] text-gray-500 truncate max-w-[72px]">
                        {token.symbol}1...pump
                    </div>
                </div>

                {/* Right: Content */}
                <div className="flex-1 min-w-0">
                    {/* Row 1: Name & MC */}
                    <div className="flex justify-between items-start mb-1">
                        <div className="flex items-center gap-1.5 min-w-0">
                            <h3 className="text-white font-bold text-sm truncate">{token.name}</h3>
                            <span className="text-gray-500 text-sm truncate">{token.symbol}</span>
                            <Copy className="w-3 h-3 text-gray-600 cursor-pointer hover:text-gray-400" />
                        </div>
                        <div className="text-xs whitespace-nowrap">
                            <span className="text-gray-500 mr-1">MC</span>
                            <span className="text-yellow-400 font-bold">{formatNumber(token.marketCap)}</span>
                        </div>
                    </div>

                    {/* Row 2: Icons & V */}
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2 text-xs">
                            <span className="text-green-500 font-medium">{getTimeAgo(token.createdAt)}</span>
                            <User className="w-3.5 h-3.5 text-blue-400" />
                            <Globe className="w-3.5 h-3.5 text-gray-500" />
                            <Pill className="w-3.5 h-3.5 text-gray-500" />
                            <Search className="w-3.5 h-3.5 text-gray-500" />

                            <div className="flex items-center gap-0.5 text-gray-400 ml-1">
                                <Users className="w-3 h-3" />
                                <span>195</span>
                            </div>
                            <div className="flex items-center gap-0.5 text-gray-400">
                                <CandlestickChart className="w-3 h-3" />
                                <span>59</span>
                            </div>
                            <div className="flex items-center gap-0.5 text-gray-400">
                                <Trophy className="w-3 h-3" />
                                <span>1</span>
                            </div>
                            <div className="flex items-center gap-0.5 text-gray-400">
                                <Crown className="w-3 h-3" />
                                <span>0/1</span>
                            </div>
                        </div>
                        <div className="text-xs whitespace-nowrap">
                            <span className="text-gray-500 mr-1">V</span>
                            <span className="text-white font-bold">{formatNumber(token.volume24h)}</span>
                        </div>
                    </div>

                    {/* Row 3: Badges & TX/Button */}
                    <div className="flex justify-between items-end">
                        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar">
                            <div className="flex items-center gap-1 bg-red-500/10 text-red-500 px-1.5 py-0.5 rounded text-[10px] font-medium border border-red-500/20">
                                <User className="w-3 h-3" />
                                <span>20%</span>
                            </div>
                            <div className="flex items-center gap-1 bg-green-500/10 text-green-500 px-1.5 py-0.5 rounded text-[10px] font-medium border border-green-500/20">
                                <ChefHat className="w-3 h-3" />
                                <span>1%</span>
                            </div>
                            <div className="flex items-center gap-1 bg-green-500/10 text-green-500 px-1.5 py-0.5 rounded text-[10px] font-medium border border-green-500/20">
                                <Target className="w-3 h-3" />
                                <span>1%</span>
                            </div>
                            <div className="flex items-center gap-1 bg-green-500/10 text-green-500 px-1.5 py-0.5 rounded text-[10px] font-medium border border-green-500/20">
                                <Ghost className="w-3 h-3" />
                                <span>1%</span>
                            </div>
                            <div className="flex items-center gap-1 bg-green-500/10 text-green-500 px-1.5 py-0.5 rounded text-[10px] font-medium border border-green-500/20">
                                <Hexagon className="w-3 h-3" />
                                <span>7%</span>
                            </div>
                            <div className="flex items-center gap-1 bg-green-500/10 text-green-500 px-1.5 py-0.5 rounded text-[10px] font-medium border border-green-500/20">
                                <Bird className="w-3 h-3" />
                                <span>Paid</span>
                            </div>
                        </div>

                        <div className="flex flex-col items-end gap-1">
                            <div className="flex items-center gap-2 text-[10px]">
                                <span className="text-gray-500">F</span>
                                <span className="text-white font-bold">15.7</span>
                                <span className="text-gray-500">TX</span>
                                <span className="text-white font-bold">4473</span>
                                <div className="w-6 h-0.5 bg-gradient-to-r from-green-500 to-red-500 rounded-full"></div>
                            </div>
                            <button className="bg-[#4c6ef5] hover:bg-[#4263eb] text-white text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 transition-colors">
                                <Zap className="w-3 h-3 text-black fill-black" />
                                <span>0 SOL</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
