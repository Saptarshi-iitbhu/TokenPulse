# TokenPulse

A pixel-perfect, high-performance replica of the Axiom Trade Token Discovery Table built with Next.js 14, TypeScript, Tailwind CSS, and Redux Toolkit.

## Features
- 🚀 **Real-time Price Updates**: Mock WebSocket service simulating live market data.
- 📊 **Advanced Sorting & Filtering**: Sort by any column, filter by category (New Pairs, Final Stretch, Migrated), and search tokens.
- 🎨 **Pixel-Perfect UI**: "Dark mode crypto" aesthetic with smooth transitions and animations.
- ⚡ **High Performance**: Optimized for speed with React.memo, virtualization-ready structure, and efficient state management.
- 📱 **Fully Responsive**: Adaptive layout for mobile, tablet, and desktop.

## Tech Stack
- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS, Shadcn/UI
- **State Management**: Redux Toolkit
- **Data Fetching**: React Query
- **Icons**: Lucide React

## Getting Started

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd axiom-trade-replica
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   ```

4. **Open the app**
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure
```
src/
├── app/                  # Next.js App Router pages
├── components/
│   ├── ui/               # Shadcn/UI primitives
│   ├── token-table/      # Token Table specific components
│   └── providers.tsx     # Global providers (Redux, React Query)
├── hooks/                # Custom hooks (useTokenData)
├── lib/
│   ├── features/         # Redux slices
│   └── store.ts          # Redux store config
├── services/             # Services (WebSocket mock)
└── types/                # TypeScript definitions
```

## Performance Optimization
- **Memoization**: Components are memoized to prevent unnecessary re-renders.
- **Efficient Updates**: WebSocket updates are batched and applied efficiently.
- **Skeleton Loading**: Smooth loading states to prevent layout shifts.

## FrontPage SnapShot
![Screenshot (83).png](https://github.com/Saptarshi-iitbhu/Eterna-Frontend-Assignment/blob/main/Screenshot%20(83).png)

## License
MIT
