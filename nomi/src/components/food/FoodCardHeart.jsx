// في src/components/food/FoodCard.jsx — أضف داخل الـ div اللي فيه الصورة:
import { Heart } from 'lucide-react'
import { useApp } from '../../context/AppContext'

// ...
const { isFavoriteFood, toggleFavoriteFood } = useApp()
const liked = isFavoriteFood(food.id)

// جوه الـ <div className="relative aspect-[4/3] ...">
<button
  type="button"
  aria-label={liked ? 'Remove from favorites' : 'Add to favorites'}
  onClick={(e) => {
    e.preventDefault()
    toggleFavoriteFood(food.id)
  }}
  className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center hover:bg-white transition-colors"
>
  <Heart
    size={16}
    strokeWidth={2.5}
    className={liked ? 'fill-accent text-accent' : 'text-ink'}
  />
</button>