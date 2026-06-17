// Thin wrapper around lucide-react so every icon shares one consistent stroke
// weight and sizing. ONE icon set, used sparingly — never as filler.
import {
  Menu,
  X,
  Plus,
  Minus,
  LayoutGrid,
  Rows3,
  ArrowRight,
  ArrowUpRight,
  Instagram,
  Search,
  Sun,
  Moon,
} from 'lucide-react';

const ICONS = {
  menu: Menu,
  close: X,
  plus: Plus,
  minus: Minus,
  grid: LayoutGrid,
  list: Rows3,
  arrowRight: ArrowRight,
  arrowUpRight: ArrowUpRight,
  instagram: Instagram,
  search: Search,
  sun: Sun,
  moon: Moon,
};

export default function Icon({ name, size = 20, strokeWidth = 1.5, className = '', ...rest }) {
  const Cmp = ICONS[name];
  if (!Cmp) return null;
  return (
    <Cmp
      size={size}
      strokeWidth={strokeWidth}
      className={className}
      aria-hidden="true"
      focusable="false"
      {...rest}
    />
  );
}
