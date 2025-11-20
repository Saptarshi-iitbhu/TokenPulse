'use client';

import { useTokenData } from '@/hooks/useTokenData';
import { TokenCard } from './TokenCard';
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState } from 'react';
import { mockWebSocketService, TokenUpdate } from '@/services/websocket';
import { Flame, TrendingUp, CheckCircle2, Zap, List, SlidersHorizontal } from 'lucide-react';

const ColumnHeader = ({
    title,
    icon: Icon,
    count,
    color
}: {
    title: string;
    icon: any;
    count: number;
    color: string;
}) => (
    <div className="flex items-center justify-between pb-3 border-b border-[#1a1a1a] 
                    sticky top-0 bg-black z-20">
        <h2 className="text-white font-bold text-lg">{title}</h2>

        <div className="flex items-center gap-4">
            {/* Lightning + Count */}
            <div className="flex items-center gap-1.5 text-gray-400">
                <Zap className="w-3.5 h-3.5" />
                <span className="text-white text-sm font-medium">0</span>
            </div>

            {/* List + P1 P2 P3 */}
            <div className="flex items-center gap-2">
                <List className="w-3.5 h-3.5 text-blue-500" />
                <span className="text-gray-500 text-xs font-medium">P1 P2 P3</span>
            </div>

            {/* Sliders */}
            <SlidersHorizontal className="w-3.5 h-3.5 text-gray-500 hover:text-white cursor-pointer" />
        </div>
    </div>
);

const Column = ({
    title,
    icon,
    color,
    tokens
}: {
    title: string;
    icon: any;
    color: string;
    tokens: Token[];
}) => (
    <div className="flex flex-col px-4 py-4 border-r border-[#1a1a1a] last:border-r-0 lg:h-full lg:min-h-0">
        <ColumnHeader
            title={title}
            icon={icon}
            count={tokens.length}
            color={color}
        />
        {/* IMPORTANT: independent scroll area */}
        <div className="space-y-0 pb-4 lg:flex-1 lg:overflow-y-auto">
            {tokens.map((token) => (
                <TokenCard key={token.id} token={token} />
            ))}
        </div>
    </div>
);

export const PulseView = () => {
    const { data: initialTokens, isLoading } = useTokenData();
    const [tokens, setTokens] = useState<Token[]>([]);

    useEffect(() => {
        if (initialTokens) {
            setTokens(initialTokens);
            const ids = initialTokens.map(t => t.id);
            mockWebSocketService.setTokenIds(ids);
        }
    }, [initialTokens]);

    useEffect(() => {
        const handleUpdates = (updates: TokenUpdate[]) => {
            setTokens(currentTokens => {
                const newTokens = [...currentTokens];
                updates.forEach(update => {
                    const index = newTokens.findIndex(t => t.id === update.id);
                    if (index !== -1) {
                        newTokens[index] = {
                            ...newTokens[index],
                            price: newTokens[index].price * (1 + update.change / 100),
                            priceChange: update.change
                        };
                    }
                });
                return newTokens;
            });
        };

        const unsub = mockWebSocketService.subscribe(handleUpdates);
        mockWebSocketService.connect();

        return () => {
            unsub();
            mockWebSocketService.disconnect();
        };
    }, []);

    const newPairs = tokens.filter(t => t.category === 'new-pairs');
    const finalStretch = tokens.filter(t => t.category === 'final-stretch');
    const migrated = tokens.filter(t => t.category === 'migrated');

    if (isLoading) {
        return (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:h-full lg:min-h-0">
                {[1, 2, 3].map((col) => (
                    <div key={col} className="flex flex-col px-4 py-4 lg:h-full lg:min-h-0">
                        <div className="lg:flex-1 lg:overflow-y-auto space-y-4">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <Skeleton key={i} className="h-48 w-full" />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 lg:h-full lg:min-h-0">
            <Column
                title="New Pairs"
                icon={Flame}
                color="text-orange-500"
                tokens={newPairs}
            />
            <Column
                title="Final Stretch"
                icon={TrendingUp}
                color="text-yellow-500"
                tokens={finalStretch}
            />
            <Column
                title="Migrated"
                icon={CheckCircle2}
                color="text-green-500"
                tokens={migrated}
            />
        </div>
    );
};
