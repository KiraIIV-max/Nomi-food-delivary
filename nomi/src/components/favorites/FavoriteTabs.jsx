const TABS = [
  { id: 'restaurants', label: 'Restaurants' },
  { id: 'food',        label: 'Food' },
]

export default function FavoriteTabs({ active, onChange, counts }) {
  return (
    <div
      role="tablist"
      className="inline-flex items-center gap-1 bg-surface border border-line rounded-full p-1"
    >
      {TABS.map((tab) => {
        const isActive = active === tab.id
        const count = counts?.[tab.id] ?? 0

        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={[
              'h-10 px-4 md:px-5 rounded-full text-sm font-semibold transition-colors',
              'inline-flex items-center gap-2',
              isActive
                ? 'bg-ink text-cream'
                : 'text-ink/70 hover:text-ink',
            ].join(' ')}
          >
            {tab.label}
            <span
              className={[
                'min-w-[20px] h-5 px-1.5 rounded-full text-[11px] font-bold flex items-center justify-center',
                isActive ? 'bg-cream/15 text-cream' : 'bg-cream text-muted',
              ].join(' ')}
            >
              {count}
            </span>
          </button>
        )
      })}
    </div>
  )
}