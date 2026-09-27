function getInitials(name = '') {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? '')
    .join('')
}

export default function ProfileHeader({ user }) {
  const initials = getInitials(user?.name) || 'N'

  return (
    <div className="flex items-center gap-5 md:gap-6">
      {/* Avatar */}
      <div
        aria-hidden
        className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-accent text-white flex items-center justify-center font-extrabold text-2xl md:text-3xl shrink-0"
      >
        {initials}
      </div>

      {/* Info */}
      <div className="min-w-0">
        <p className="eyebrow mb-2">Member</p>
        <h1 className="text-3xl md:text-5xl font-extrabold leading-[1.08] truncate">
          {user?.name || 'Guest'}
        </h1>
        <p className="text-muted mt-1 text-sm md:text-base truncate">
          {user?.email || '—'}
        </p>
      </div>
    </div>
  )
}
