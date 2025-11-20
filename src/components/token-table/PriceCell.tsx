import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface PriceCellProps {
    price: number;
    className?: string;
}

export const PriceCell = ({ price, className }: PriceCellProps) => {
    const prevPrice = useRef(price);
    const [flash, setFlash] = useState<'green' | 'red' | null>(null);

    useEffect(() => {
        if (price > prevPrice.current) {
            setFlash('green');
        } else if (price < prevPrice.current) {
            setFlash('red');
        }
        prevPrice.current = price;

        const timer = setTimeout(() => setFlash(null), 1000);
        return () => clearTimeout(timer);
    }, [price]);

    return (
        <div
            className={cn(
                "transition-colors duration-300 font-mono",
                flash === 'green' && "text-green-500",
                flash === 'red' && "text-red-500",
                !flash && "text-foreground",
                className
            )}
        >
            ${price.toFixed(4)}
        </div>
    );
};
