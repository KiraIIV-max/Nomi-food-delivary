export const categories = [
  { id: 'pizza',     name: 'Pizza',     image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&q=80' },
  { id: 'burgers',   name: 'Burgers',   image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&q=80' },
  { id: 'asian',     name: 'Asian',     image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600&q=80' },
  { id: 'fast-food', name: 'Fast Food', image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=600&q=80' },
  { id: 'healthy',   name: 'Healthy',   image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80' },
  { id: 'desserts',  name: 'Desserts',  image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=600&q=80' },
  { id: 'drinks',    name: 'Drinks',    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&q=80' },
]

export const getCategoryById = (id) => categories.find(c => c.id === id)