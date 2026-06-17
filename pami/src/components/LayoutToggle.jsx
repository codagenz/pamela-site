import Icon from './Icon.jsx';

// Grid / List layout switch for collection views. Controlled component:
// parent owns the `layout` state ('grid' | 'list').
export default function LayoutToggle({ layout, onChange }) {
  const options = [
    { value: 'grid', icon: 'grid', label: 'Grid view' },
    { value: 'list', icon: 'list', label: 'List view' },
  ];

  return (
    <div
      role="group"
      aria-label="Choose layout"
      className="inline-flex items-center gap-1 rounded-pill border border-line p-1"
    >
      {options.map((opt) => {
        const active = layout === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            data-cursor
            aria-pressed={active}
            aria-label={opt.label}
            onClick={() => onChange(opt.value)}
            className={`grid h-9 w-9 place-items-center rounded-pill transition-colors duration-300 ease-editorial ${
              active ? 'bg-ink text-paper' : 'text-ink-2 hover:text-ink'
            }`}
          >
            <Icon name={opt.icon} size={18} />
          </button>
        );
      })}
    </div>
  );
}
