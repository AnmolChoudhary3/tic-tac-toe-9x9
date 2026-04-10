import { useState, useCallback, useMemo } from 'react';
import type { GameState, BoardResult, CellValue, Player } from '../types/game';
import { WIN_LINES } from '../types/game';

function createInitialState(): GameState {
  return {
    boards: Array.from({ length: 9 }, () => Array<CellValue>(9).fill(null)),
    currentPlayer: 'X',
    activeBoardIndex: null,
    localResults: Array<BoardResult>(9).fill(null),
    globalResult: null,
  };
}

/** Check if a player has three-in-a-row among the given 9 cells */
function getWinner(cells: (CellValue | BoardResult)[]): Player | null {
  for (const [a, b, c] of WIN_LINES) {
    const v = cells[a];
    if (v && v !== 'draw' && v === cells[b] && v === cells[c]) {
      return v;
    }
  }
  return null;
}

/** Returns 'X', 'O', 'draw', or null for a single small board */
function getBoardResult(cells: CellValue[]): BoardResult {
  const winner = getWinner(cells);
  if (winner) return winner;
  if (cells.every((c) => c !== null)) return 'draw';
  return null;
}

export function useUltimateTicTacToe() {
  const [state, setState] = useState<GameState>(createInitialState);

  const isGameOver = state.globalResult !== null;

  /** Determine if a given small board can be played on right now */
  const isBoardPlayable = useCallback(
    (boardIdx: number): boolean => {
      if (state.globalResult !== null) return false;
      if (state.localResults[boardIdx] !== null) return false; // already resolved
      if (state.activeBoardIndex === null) return true; // free move
      return state.activeBoardIndex === boardIdx;
    },
    [state.globalResult, state.localResults, state.activeBoardIndex],
  );

  const makeMove = useCallback((boardIdx: number, cellIdx: number) => {
    setState((prev) => {
      // === Guards ===
      if (prev.globalResult !== null) return prev;
      if (prev.localResults[boardIdx] !== null) return prev;
      if (prev.activeBoardIndex !== null && prev.activeBoardIndex !== boardIdx) return prev;
      if (prev.boards[boardIdx][cellIdx] !== null) return prev;

      // === Clone ===
      const newBoards = prev.boards.map((b) => [...b]);
      const newLocalResults: BoardResult[] = [...prev.localResults];

      // === Place mark ===
      newBoards[boardIdx][cellIdx] = prev.currentPlayer;

      // === Evaluate local board ===
      newLocalResults[boardIdx] = getBoardResult(newBoards[boardIdx]);

      // === Evaluate global result ===
      let globalResult: BoardResult = getWinner(newLocalResults);
      if (!globalResult && newLocalResults.every((r) => r !== null)) {
        globalResult = 'draw';
      }

      // === Determine next active board ===
      // The cell position dictates the next board. If that board is already
      // resolved, the next player gets a free move (null).
      const nextActive =
        globalResult !== null
          ? null
          : newLocalResults[cellIdx] !== null
            ? null
            : cellIdx;

      return {
        boards: newBoards,
        currentPlayer: prev.currentPlayer === 'X' ? 'O' : 'X',
        activeBoardIndex: nextActive,
        localResults: newLocalResults,
        globalResult,
      };
    });
  }, []);

  const restart = useCallback(() => {
    setState(createInitialState());
  }, []);

  return useMemo(
    () => ({
      state,
      currentPlayer: state.currentPlayer,
      globalResult: state.globalResult,
      isGameOver,
      makeMove,
      restart,
      isBoardPlayable,
    }),
    [state, isGameOver, makeMove, restart, isBoardPlayable],
  );
}
