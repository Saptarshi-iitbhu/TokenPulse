import { useQuery } from '@tanstack/react-query';
import { MOCK_TOKENS } from '@/lib/mockData';
import { Token } from '@/types/token';

export const useTokenData = () => {
    return useQuery<Token[]>({
        queryKey: ['tokens'],
        queryFn: async () => {
            // Simulate API delay
            await new Promise(resolve => setTimeout(resolve, 1000));
            return MOCK_TOKENS;
        },
    });
};
