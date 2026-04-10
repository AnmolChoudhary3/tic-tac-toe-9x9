export type CellValue = 'X' | 'O' | null;
export type Player = 'X' | 'O';
export type BoardResult = Player | 'draw' | null;

export interface GameState {
  /** 9 small boards, each with 9 cells */
  boards: CellValue[][];
  currentPlayer: Player;
  /** Which small board the current player must play in, or null for free move */
  activeBoardIndex: number | null;
  /** Winner of each small board: 'X', 'O', 'draw', or null */
  localResults: BoardResult[];
  /** Overall game result */
  globalResult: BoardResult;
}

/** All 8 possible three-in-a-row lines on a 3×3 grid */
export const WIN_LINES: readonly [number, number, number][] = [
  [0, 1, 2], // rows
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6], // columns
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8], // diagonals
  [2, 4, 6],
];
