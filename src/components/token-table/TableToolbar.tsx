'use client';

import {
    HelpCircle,
    LayoutGrid,
    Volume2,
    Settings,
    ChevronDown,
    Bookmark,
    Layers,
    FolderOpen,
    Box
} from 'lucide-react';
import { Button } from '@/components/ui/button';

export const TableToolbar = () => {
    return (
        <div className="flex items-center justify-between mb-4">
            {/* Left: Title & Icons */}
            <div className="flex items-center gap-3">
                <h1 className="text-2xl font-bold text-white">Pulse</h1>
                <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-teal-400 flex items-center justify-center">
                        <span className="text-[10px] font-bold text-white">S</span>
                    </div>
                    <Box className="w-5 h-5 text-yellow-500" />
                </div>
            </div>

            {/* Right: Controls */}
            <div className="flex items-center gap-2">
                <Button variant="ghost" size="icon" className="text-gray-500 hover:text-white w-8 h-8">
                    <HelpCircle className="w-4 h-4" />
                </Button>

                <Button variant="outline" className="h-8 bg-[#1a1a1a] border-[#2a2a2a] text-white hover:bg-[#2a2a2a] gap-2 px-3 rounded-full">
                    <LayoutGrid className="w-4 h-4" />
                    <span className="text-xs font-medium">Display</span>
                    <ChevronDown className="w-3 h-3 text-gray-500" />
                </Button>

                <Button variant="ghost" size="icon" className="text-gray-500 hover:text-white w-8 h-8">
                    <Bookmark className="w-4 h-4" />
                </Button>

                <Button variant="ghost" size="icon" className="text-gray-500 hover:text-white w-8 h-8">
                    <LayoutGrid className="w-4 h-4" />
                </Button>

                <Button variant="ghost" size="icon" className="text-gray-500 hover:text-white w-8 h-8">
                    <Volume2 className="w-4 h-4" />
                </Button>

                <Button variant="ghost" size="icon" className="text-gray-500 hover:text-white w-8 h-8">
                    <Settings className="w-4 h-4" />
                </Button>

                {/* Filter Pill */}
                <div className="flex items-center h-8 bg-black border border-[#2a2a2a] rounded-full px-3 gap-3 ml-2">
                    <div className="flex items-center gap-1.5">
                        <FolderOpen className="w-3.5 h-3.5 text-gray-400" />
                        <span className="text-white text-xs font-medium">1</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Layers className="w-3.5 h-3.5 text-blue-400" />
                        <span className="text-white text-xs font-medium">0</span>
                    </div>
                    <ChevronDown className="w-3 h-3 text-gray-500" />
                </div>
            </div>
        </div>
    );
};
