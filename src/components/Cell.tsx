import type { CellValue } from '../types/game';
import { cn } from '../utils/cn';

interface CellProps {
  value: CellValue;
  onClick: () => void;
  disabled: boolean;
}

export function Cell({ value, onClick, disabled }: CellProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'flex items-center justify-center',
        'aspect-square w-full',
        'bg-cell rounded-sm',
        'text-base sm:text-lg md:text-xl font-extrabold leading-none',
        'transition-colors duration-150',
        'select-none',
        disabled ? 'cursor-default' : 'cursor-pointer hover:bg-cell-hover',
        value === 'X' && 'text-x',
        value === 'O' && 'text-o',
        !value && 'text-transparent',
      )}
      aria-label={value ? `Cell: ${value}` : 'Empty cell'}
    >
      {value ?? '\u00A0'}
    </button>
  );
}
