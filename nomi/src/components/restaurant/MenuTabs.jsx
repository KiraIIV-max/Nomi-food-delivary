export default function MenuTabs({ tabs, active, onChange }) {
  if (tabs.length <= 1) return null

  return (
    <div
      className="
        flex gap-2 overflow-x-auto pb-2 -mx-5 px-5
        md:mx-0 md:px-0 md:pb-0
        [scrollbar-width:none] [&::-webkit-scrollbar]:hidden
      "
      role="tablist"
    >
      {tabs.map((tab) => {
        const isActive = active === tab.id
        return (
          <button
            key={tab.id}
            role="tab"
            aria-selected={isActive}
            onClick={() => onChange(tab.id)}
            className={[
              'shrink-0 h-10 px-4 rounded-full text-sm font-semibold border transition-colors',
              isActive
                ? 'bg-ink text-cream border-ink'
                : 'bg-surface text-ink border-line hover:border-ink/40',
            ].join(' ')}
          >
            {tab.label}
            <span
              className={[
                'ml-2 text-xs font-bold',
                isActive ? 'text-cream/60' : 'text-faint',
              ].join(' ')}
            >
              {tab.items.length}
            </span>
          </button>
        )
      })}
    </div>
  )
}