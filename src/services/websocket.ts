type Listener = (data: TokenUpdate[]) => void;

export interface TokenUpdate {
    id: string;
    price: number;
    change: number;
}

export class MockWebSocket {
    private listeners: Listener[] = [];
    private intervalId: NodeJS.Timeout | null = null;
    private tokenIds: string[] = [];

    constructor(tokenIds: string[]) {
        this.tokenIds = tokenIds;
    }

    setTokenIds(tokenIds: string[]) {
        this.tokenIds = tokenIds;
    }

    connect() {
        if (this.intervalId) return;

        this.intervalId = setInterval(() => {
            if (this.tokenIds.length === 0) return;
            const updates = this.generateUpdates();
            this.notify(updates);
        }, 1000);
    }

    disconnect() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    subscribe(listener: Listener) {
        this.listeners.push(listener);
        return () => {
            this.listeners = this.listeners.filter(l => l !== listener);
        };
    }

    private notify(data: TokenUpdate[]) {
        this.listeners.forEach(listener => listener(data));
    }

    private generateUpdates(): TokenUpdate[] {
        // Update 10-20% of tokens randomly
        const numUpdates = Math.floor(this.tokenIds.length * 0.2) + 1;
        const updates: TokenUpdate[] = [];

        for (let i = 0; i < numUpdates; i++) {
            const randomId = this.tokenIds[Math.floor(Math.random() * this.tokenIds.length)];
            // Random price movement between -2% and +2%
            const priceChange = (Math.random() * 0.04) - 0.02;
            // This is a mock, so we don't have the current price here. 
            // In a real app, we'd have the current state. 
            // For this mock, we'll send the *change factor* or absolute value if we tracked state.
            // Let's send a delta object that the UI can merge.

            updates.push({
                id: randomId,
                price: 0, // UI will calculate based on current price * (1 + priceChange)
                change: priceChange * 100, // Visual % change
            });
        }
        return updates;
    }
}

export const mockWebSocketService = new MockWebSocket([]);
