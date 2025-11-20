'use client';

import { useTokenData } from '@/hooks/useTokenData';
import { PriceCell } from './PriceCell';
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { useEffect, useState, useMemo } from 'react';
import { mockWebSocketService, TokenUpdate } from '@/services/websocket';
import { Token } from '@/types/token';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '@/lib/store';
import { setSort, SortKey } from '@/lib/features/table/tableSlice';
import { TableToolbar } from './TableToolbar';
import { ArrowUpDown, ArrowUp, ArrowDown, MoreHorizontal, Info, Plus } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip";

export const TokenTable = () => {
    const { data: initialTokens, isLoading } = useTokenData();
    const [tokens, setTokens] = useState<Token[]>([]);
    const dispatch = useDispatch();
    const { sortBy, sortDirection, activeTab, searchQuery } = useSelector((state: RootState) => state.table);

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
                            change24h: newTokens[index].change24h + update.change
                        };
                    }
                });
                return newTokens;
            });
        };

        const unsubscribe = mockWebSocketService.subscribe(handleUpdates);
        mockWebSocketService.connect();

        return () => {
            unsubscribe();
            mockWebSocketService.disconnect();
        };
    }, []);

    const filteredAndSortedTokens = useMemo(() => {
        let result = [...tokens];

        // Filter by Tab
        if (activeTab === 'new-pairs') {
            result = result.filter(t => t.isNew);
        } else if (activeTab === 'final-stretch') {
            result = result.filter(t => !t.isNew && t.marketCap < 5000000);
        } else {
            result = result.filter(t => !t.isNew && t.marketCap >= 5000000);
        }

        // Filter by Search
        if (searchQuery) {
            const query = searchQuery.toLowerCase();
            result = result.filter(t =>
                t.name.toLowerCase().includes(query) ||
                t.symbol.toLowerCase().includes(query)
            );
        }

        // Sort
        if (sortBy && sortDirection) {
            result.sort((a, b) => {
                const aValue = a[sortBy as keyof Token];
                const bValue = b[sortBy as keyof Token];

                if (typeof aValue === 'number' && typeof bValue === 'number') {
                    return sortDirection === 'asc' ? aValue - bValue : bValue - aValue;
                }
                return 0;
            });
        }

        return result;
    }, [tokens, activeTab, searchQuery, sortBy, sortDirection]);

    const handleSort = (key: SortKey) => {
        const isAsc = sortBy === key && sortDirection === 'asc';
        dispatch(setSort({ key, direction: isAsc ? 'desc' : 'asc' }));
    };

    const SortIcon = ({ column }: { column: SortKey }) => {
        if (sortBy !== column) return <ArrowUpDown className="ml-2 h-4 w-4 text-muted-foreground/50" />;
        return sortDirection === 'asc'
            ? <ArrowUp className="ml-2 h-4 w-4 text-primary" />
            : <ArrowDown className="ml-2 h-4 w-4 text-primary" />;
    };

    if (isLoading) {
        return (
            <div className="space-y-4">
                <div className="flex justify-between mb-6">
                    <Skeleton className="h-10 w-[400px]" />
                    <Skeleton className="h-10 w-72" />
                </div>
                {Array.from({ length: 10 }).map((_, i) => (
                    <Skeleton key={i} className="h-16 w-full" />
                ))}
            </div>
        );
    }

    return (
        <div className="space-y-4">
            <TableToolbar />
            <div className="rounded-md border bg-card">
                <Table>
                    <TableHeader>
                        <TableRow className="hover:bg-transparent">
                            <TableHead className="w-[100px]"></TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {filteredAndSortedTokens.map((token) => (
                            <TableRow key={token.id} className="group hover:bg-muted/50 transition-colors">
                                <TableCell className="font-medium">
                                    <div className="flex items-center gap-3">
                                        <img src={token.logoUrl} alt={token.name} className="w-8 h-8 rounded-full ring-2 ring-border" />
                                        <div className="flex flex-col">
                                            <span className="font-bold text-foreground">{token.symbol}</span>
                                            <span className="text-xs text-muted-foreground">{token.name}</span>
                                        </div>
                                    </div>
                                </TableCell>
                                <TableCell className="text-right font-mono">
                                    <PriceCell price={token.price} />
                                </TableCell>
                                <TableCell className={`text-right font-mono font-medium ${token.change24h >= 0 ? 'text-green-500' : 'text-red-500'}`}>
                                    {token.change24h > 0 ? '+' : ''}{token.change24h.toFixed(2)}%
                                </TableCell>
                                <TableCell className="text-right font-mono text-muted-foreground hidden md:table-cell">
                                    ${token.volume24h.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                </TableCell>
                                <TableCell className="text-right font-mono text-muted-foreground hidden lg:table-cell">
                                    ${token.liquidity.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                </TableCell>
                                <TableCell className="text-right font-mono text-muted-foreground hidden xl:table-cell">
                                    ${token.marketCap.toLocaleString(undefined, { maximumFractionDigits: 0 })}
                                </TableCell>
                                <TableCell>
                                    <div className="flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        <TooltipProvider>
                                            <Tooltip>
                                                <TooltipTrigger asChild>
                                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                                        <Info className="h-4 w-4" />
                                                    </Button>
                                                </TooltipTrigger>
                                                <TooltipContent>
                                                    <p>View Details</p>
                                                </TooltipContent>
                                            </Tooltip>
                                        </TooltipProvider>
                                        <Button variant="outline" size="sm" className="h-8 text-xs">
                                            Trade
                                        </Button>
                                    </div>
                                </TableCell>
                            </TableRow>
                        ))}
                        {filteredAndSortedTokens.length === 0 && (
                            <TableRow>
                                <TableCell colSpan={7} className="h-24 text-center text-muted-foreground">
                                    No tokens found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};
