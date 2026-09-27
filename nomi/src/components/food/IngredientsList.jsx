export default function IngredientsList({ ingredients }) {
  if (!ingredients?.length) return null

  return (
    <div>
      <p className="eyebrow mb-3">Ingredients</p>
      <ul className="flex flex-wrap gap-2">
        {ingredients.map((item) => (
          <li
            key={item}
            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-surface border border-line text-muted"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}