# Ultimate Tic-Tac-Toe

A two-player Ultimate Tic-Tac-Toe game built with React, TypeScript, and Tailwind CSS.

## How to Play

The board consists of 9 smaller 3x3 tic-tac-toe boards arranged in a 3x3 grid.

- Players (X and O) take turns placing marks on the smaller boards.
- **Your cell position determines the next board:** placing a mark in cell N sends your opponent to board N.
- **Free move:** if the target board is already won or drawn, the opponent can play in any open board.
- **Win condition:** win 3 small boards in a row, column, or diagonal to win the game.
- Active boards are highlighted with a yellow border so you always know where to play.

## Getting Started

### Prerequisites

- Node.js (v18+)

### Install & Run

```bash
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for Production

```bash
npm run build
npm run preview
```

## Tech Stack

- **React 19** with TypeScript
- **Tailwind CSS v4** for styling
- **Vite** for development and builds

## Project Structure

```
src/
├── App.tsx                          # Main layout
├── components/
│   ├── Board.tsx                    # 3x3 grid of small boards
│   ├── SmallBoard.tsx               # Individual 3x3 board
│   ├── Cell.tsx                     # Single cell button
│   └── GameStatus.tsx               # Turn indicator and restart
├── hooks/
│   └── useUltimateTicTacToe.ts     # Game state and logic
├── types/
│   └── game.ts                      # Type definitions
├── utils/
│   └── cn.ts                        # Class name utility
└── index.css                        # Tailwind config and theme
```
