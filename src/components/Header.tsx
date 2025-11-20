'use client';

import { Search, Bell, Wallet, Settings, Menu, Star, ChevronDown, Globe, User, Triangle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Header = () => {
    return (
        <header className="border-b border-[#1a1a1a] bg-black sticky top-0 z-50 h-14 flex items-center">
            <div className="w-full px-4">
                <div className="flex items-center justify-between">
                    {/* Left Section: Logo & Nav */}
                    <div className="flex items-center gap-8">
                        {/* Logo */}
                        <div className="flex items-center gap-1.5">
                            <Triangle className="w-5 h-5 text-white fill-white" />
                            <span className="text-white font-bold text-xl tracking-tight">AXIOM</span>
                            <span className="text-gray-500 text-lg">Pro</span>
                        </div>

                        {/* Navigation */}
                        <nav className="hidden lg:flex items-center gap-6">
                            <a href="#" className="text-gray-400 hover:text-white text-[13px] font-medium transition-colors">Discover</a>
                            <a href="#" className="text-blue-500 text-[13px] font-medium">Pulse</a>
                            <a href="#" className="text-gray-400 hover:text-white text-[13px] font-medium transition-colors">Trackers</a>
                            <a href="#" className="text-gray-400 hover:text-white text-[13px] font-medium transition-colors">Perpetuals</a>
                            <a href="#" className="text-gray-400 hover:text-white text-[13px] font-medium transition-colors">Yield</a>
                            <a href="#" className="text-gray-400 hover:text-white text-[13px] font-medium transition-colors">Vision</a>
                            <a href="#" className="text-gray-400 hover:text-white text-[13px] font-medium transition-colors">Portfolio</a>
                        </nav>
                    </div>

                    {/* Right Section: Search & Actions */}
                    <div className="flex items-center gap-3">
                        {/* Search Bar */}
                        <div className="hidden xl:flex relative group">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500 group-hover:text-gray-400 transition-colors" />
                            <input
                                type="text"
                                placeholder="Search by token or CA..."
                                className="pl-9 pr-8 w-64 h-9 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-gray-800 transition-colors"
                            />
                            <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center justify-center w-5 h-5 rounded bg-[#1a1a1a] border border-[#2a2a2a] text-[10px] text-gray-500">
                                /
                            </div>
                        </div>

                        {/* SOL Selector */}
                        <button className="hidden md:flex items-center gap-2 h-9 px-3 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full hover:border-gray-800 transition-colors">
                            <div className="flex items-center gap-1.5">
                                <div className="w-4 h-4 rounded-full bg-gradient-to-br from-purple-500 to-teal-400 flex items-center justify-center text-[8px] font-bold text-white">S</div>
                                <span className="text-white text-sm font-medium">SOL</span>
                            </div>
                            <ChevronDown className="w-3 h-3 text-gray-500" />
                        </button>

                        {/* Deposit Button */}
                        <Button className="h-9 px-5 bg-[#4c6ef5] hover:bg-[#4263eb] text-white rounded-full text-sm font-medium transition-colors">
                            Deposit
                        </Button>

                        {/* Icons */}
                        <div className="flex items-center gap-1">
                            <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-400 hover:text-white hover:bg-[#1a1a1a] rounded-full">
                                <Star className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-400 hover:text-white hover:bg-[#1a1a1a] rounded-full">
                                <Bell className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* Wallet Pill */}
                        <div className="hidden md:flex items-center h-9 bg-[#0a0a0a] border border-[#1a1a1a] rounded-full px-1 p-1 gap-2">
                            <div className="flex items-center gap-2 px-2">
                                <Wallet className="w-4 h-4 text-gray-400" />
                                <div className="flex flex-col leading-none">
                                    <span className="text-white text-xs font-medium">≡ 0</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1 pl-2 border-l border-[#1a1a1a] pr-2">
                                <Globe className="w-3.5 h-3.5 text-blue-400" />
                                <span className="text-white text-xs">0</span>
                                <ChevronDown className="w-3 h-3 text-gray-500 ml-1" />
                            </div>
                        </div>

                        {/* Profile */}
                        <Button variant="ghost" size="icon" className="w-9 h-9 text-gray-400 hover:text-white hover:bg-[#1a1a1a] rounded-full relative">
                            <User className="w-4 h-4" />
                            <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-black rounded-full flex items-center justify-center">
                                <Settings className="w-2 h-2 text-gray-500" />
                            </div>
                        </Button>

                        {/* Mobile Menu */}
                        <Button variant="ghost" size="icon" className="lg:hidden text-gray-400 hover:text-white">
                            <Menu className="w-5 h-5" />
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    );
};
