import { Search, X } from 'lucide-react'

export const CUISINE_FILTERS = [
  { id: 'all',      label: 'All' },
  { id: 'italian',  label: 'Italian' },
  { id: 'american', label: 'American' },
  { id: 'asian',    label: 'Asian' },
  { id: 'healthy',  label: 'Healthy' },
  { id: 'desserts', label: 'Desserts' },
  { id: 'coffee',   label: 'Coffee' },
]

export const SORT_OPTIONS = [
  { id: 'popular',  label: 'Popular' },
  { id: 'rating',   label: 'Highest rated' },
  { id: 'fastest',  label: 'Fastest delivery' },
]

export default function RestaurantFilters({
  query, onQueryChange,
  cuisine, onCuisineChange,
  sort, onSortChange,
}) {
  return (
    <div className="space-y-5">

      {/* Search + Sort row */}
      <div className="flex flex-col md:flex-row md:items-center gap-3">

        {/* Search */}
        <div className="relative flex-1">
          <Search
            size={18}
            strokeWidth={2.2}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted pointer-events-none"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => onQueryChange(e.target.value)}
            placeholder="Search restaurants..."
            className="w-full h-12 md:h-[52px] bg-surface border border-line rounded-[12px] pl-11 pr-10 text-sm placeholder:text-faint focus:border-accent focus:outline-none transition-colors"
          />
          {query && (
            <button
              type="button"
              aria-label="Clear search"
              onClick={() => onQueryChange('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 w-7 h-7 rounded-full hover:bg-cream flex items-center justify-center text-muted"
            >
              <X size={14} strokeWidth={2.5} />
            </button>
          )}
        </div>

        {/* Sort */}
        <div className="relative">
          <select
            value={sort}
            onChange={(e) => onSortChange(e.target.value)}
            className="h-12 md:h-[52px] w-full md:w-52 bg-surface border border-line rounded-[12px] px-4 pr-9 text-sm font-semibold focus:border-accent focus:outline-none appearance-none cursor-pointer"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.id} value={o.id}>{o.label}</option>
            ))}
          </select>
          <svg
            className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted"
            width="12" height="12" viewBox="0 0 12 12" fill="none"
          >
            <path d="M3 4.5L6 7.5L9 4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>

      {/* Cuisine pills */}
      <div className="flex gap-2 overflow-x-auto pb-1 -mx-5 px-5 md:mx-0 md:px-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CUISINE_FILTERS.map((f) => {
          const active = cuisine === f.id
          return (
            <button
              key={f.id}
              type="button"
              onClick={() => onCuisineChange(f.id)}
              className={[
                'shrink-0 h-10 px-4 rounded-full text-sm font-semibold border transition-colors',
                active
                  ? 'bg-accent text-white border-accent'
                  : 'bg-surface text-ink border-line hover:border-ink/40',
              ].join(' ')}
            >
              {f.label}
            </button>
          )
        })}
      </div>

    </div>
  )
}