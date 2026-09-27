export const foods = [
  // ===== Burger House =====
  { id: 'bh-1', restaurantId: 'burger-house', name: 'Classic Beef Burger',
    description: 'Juicy beef patty, cheddar, lettuce & special sauce.',
    price: 12.99, rating: 4.9, popular: true,
    categoryId: 'burgers',
    ingredients: ['Beef patty', 'Cheddar', 'Lettuce', 'Tomato', 'Special sauce'],
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&q=80' },

  { id: 'bh-2', restaurantId: 'burger-house', name: 'Double Cheese',
    description: 'Two patties, double cheddar, caramelized onions.',
    price: 15.99, rating: 4.8, popular: true,
    categoryId: 'burgers',
    ingredients: ['2 Beef patties', 'Double cheddar', 'Caramelized onion'],
    image: 'https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=800&q=80' },

  { id: 'bh-3', restaurantId: 'burger-house', name: 'Crispy Chicken Burger',
    description: 'Buttermilk-fried chicken, pickles, honey mustard.',
    price: 11.99, rating: 4.7, popular: false,
    categoryId: 'burgers',
    ingredients: ['Chicken breast', 'Pickles', 'Honey mustard'],
    image: 'https://images.unsplash.com/photo-1606755962773-d324e0a13086?w=800&q=80' },

  { id: 'bh-4', restaurantId: 'burger-house', name: 'Loaded Fries',
    description: 'Fries, melted cheese, bacon bits, scallions.',
    price: 6.99, rating: 4.6, popular: false,
    categoryId: 'fast-food',
    ingredients: ['Fries', 'Cheddar', 'Bacon', 'Scallions'],
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=800&q=80' },

  // ===== Pizza Roma =====
  { id: 'pr-1', restaurantId: 'pizza-roma', name: 'Margherita',
    description: 'San Marzano tomatoes, fior di latte, fresh basil.',
    price: 13.99, rating: 4.9, popular: true,
    categoryId: 'pizza',
    ingredients: ['Tomato', 'Mozzarella', 'Basil', 'Olive oil'],
    image: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=800&q=80' },

  { id: 'pr-2', restaurantId: 'pizza-roma', name: 'Diavola',
    description: 'Spicy salami, chili flakes, mozzarella.',
    price: 15.99, rating: 4.8, popular: true,
    categoryId: 'pizza',
    ingredients: ['Salami', 'Chili', 'Mozzarella'],
    image: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=800&q=80' },

  { id: 'pr-3', restaurantId: 'pizza-roma', name: 'Quattro Formaggi',
    description: 'Gorgonzola, parmesan, mozzarella, fontina.',
    price: 16.99, rating: 4.7, popular: false,
    categoryId: 'pizza',
    ingredients: ['4 cheeses', 'Cream base'],
    image: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800&q=80' },

  { id: 'pr-4', restaurantId: 'pizza-roma', name: 'Garlic Bread',
    description: 'Wood-fired bread, garlic butter, parsley.',
    price: 5.99, rating: 4.6, popular: false,
    categoryId: 'pizza',
    ingredients: ['Bread', 'Garlic butter', 'Parsley'],
    image: 'https://images.unsplash.com/photo-1573140247632-f8fd74997d5c?w=800&q=80' },

  // ===== Green Bowl =====
  { id: 'gb-1', restaurantId: 'green-bowl', name: 'Quinoa Power Bowl',
    description: 'Quinoa, avocado, chickpeas, kale, tahini.',
    price: 13.99, rating: 4.8, popular: true,
    categoryId: 'healthy',
    ingredients: ['Quinoa', 'Avocado', 'Chickpeas', 'Kale', 'Tahini'],
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80' },

  { id: 'gb-2', restaurantId: 'green-bowl', name: 'Caesar Salad',
    description: 'Romaine, parmesan, croutons, grilled chicken.',
    price: 11.99, rating: 4.7, popular: true,
    categoryId: 'healthy',
    ingredients: ['Romaine', 'Parmesan', 'Chicken', 'Croutons'],
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=800&q=80' },

  { id: 'gb-3', restaurantId: 'green-bowl', name: 'Açaí Bowl',
    description: 'Açaí, banana, granola, berries, coconut.',
    price: 10.99, rating: 4.9, popular: false,
    categoryId: 'healthy',
    ingredients: ['Açaí', 'Banana', 'Granola', 'Berries'],
    image: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=800&q=80' },

  // ===== Sakura Table =====
  { id: 'st-1', restaurantId: 'sakura-table', name: 'Salmon Nigiri Set',
    description: 'Fresh salmon, vinegared rice, wasabi.',
    price: 18.99, rating: 4.9, popular: true,
    categoryId: 'asian',
    ingredients: ['Salmon', 'Rice', 'Wasabi', 'Nori'],
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=800&q=80' },

  { id: 'st-2', restaurantId: 'sakura-table', name: 'Rainbow Roll',
    description: 'California roll topped with assorted sashimi.',
    price: 16.99, rating: 4.8, popular: true,
    categoryId: 'asian',
    ingredients: ['Tuna', 'Salmon', 'Avocado', 'Cucumber'],
    image: 'https://images.unsplash.com/photo-1553621042-f6e147245754?w=800&q=80' },

  { id: 'st-3', restaurantId: 'sakura-table', name: 'Miso Ramen',
    description: 'Rich miso broth, pork belly, soft egg, noodles.',
    price: 14.99, rating: 4.9, popular: true,
    categoryId: 'asian',
    ingredients: ['Miso', 'Pork belly', 'Egg', 'Noodles'],
    image: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&q=80' },

  // ===== Firebird =====
  { id: 'fb-1', restaurantId: 'firebird', name: 'Spicy Fried Chicken',
    description: 'Korean-style double-fried chicken, gochujang glaze.',
    price: 13.99, rating: 4.7, popular: true,
    categoryId: 'fast-food',
    ingredients: ['Chicken', 'Gochujang', 'Sesame'],
    image: 'https://images.unsplash.com/photo-1626645738196-c2a7c87a8f58?w=800&q=80' },

  { id: 'fb-2', restaurantId: 'firebird', name: 'Chicken Tenders',
    description: 'Crispy tenders, choice of dip.',
    price: 9.99, rating: 4.6, popular: false,
    categoryId: 'fast-food',
    ingredients: ['Chicken', 'Breading'],
    image: 'https://images.unsplash.com/photo-1562967914-608f82629710?w=800&q=80' },

  // ===== La Crème =====
  { id: 'lc-1', restaurantId: 'la-creme', name: 'Crème Brûlée',
    description: 'Vanilla custard, caramelized sugar crust.',
    price: 8.99, rating: 4.9, popular: true,
    categoryId: 'desserts',
    ingredients: ['Cream', 'Vanilla', 'Sugar', 'Egg yolk'],
    image: 'https://images.unsplash.com/photo-1551024506-0bccd828d307?w=800&q=80' },

  { id: 'lc-2', restaurantId: 'la-creme', name: 'Chocolate Fondant',
    description: 'Warm chocolate cake, molten center, vanilla ice cream.',
    price: 9.99, rating: 4.9, popular: true,
    categoryId: 'desserts',
    ingredients: ['Dark chocolate', 'Butter', 'Eggs', 'Ice cream'],
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=800&q=80' },

  // ===== Casa Pasta =====
  { id: 'cp-1', restaurantId: 'casa-pasta', name: 'Cacio e Pepe',
    description: 'Tonnarelli, pecorino romano, black pepper.',
    price: 14.99, rating: 4.8, popular: true,
    categoryId: 'pizza',
    ingredients: ['Pasta', 'Pecorino', 'Black pepper'],
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=800&q=80' },

  { id: 'cp-2', restaurantId: 'casa-pasta', name: 'Rigatoni Bolognese',
    description: 'Slow-cooked beef ragù, parmesan.',
    price: 15.99, rating: 4.7, popular: true,
    categoryId: 'pizza',
    ingredients: ['Rigatoni', 'Beef ragù', 'Parmesan'],
    image: 'https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=800&q=80' },

  // ===== Brew & Bean =====
  { id: 'bb-1', restaurantId: 'brew-bean', name: 'Flat White',
    description: 'Double espresso, silky microfoam.',
    price: 4.50, rating: 4.9, popular: true,
    categoryId: 'drinks',
    ingredients: ['Espresso', 'Milk'],
    image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&q=80' },

  { id: 'bb-2', restaurantId: 'brew-bean', name: 'Iced Latte',
    description: 'Cold espresso, milk, ice.',
    price: 5.00, rating: 4.8, popular: true,
    categoryId: 'drinks',
    ingredients: ['Espresso', 'Milk', 'Ice'],
    image: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=800&q=80' },

  { id: 'bb-3', restaurantId: 'brew-bean', name: 'Butter Croissant',
    description: 'Flaky, buttery, baked fresh daily.',
    price: 3.99, rating: 4.7, popular: false,
    categoryId: 'desserts',
    ingredients: ['Flour', 'Butter'],
    image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800&q=80' },
]

export const getFoodById = (id) => foods.find(f => f.id === id)
export const getFoodsByRestaurant = (restaurantId) =>
  foods.filter(f => f.restaurantId === restaurantId)
export const getPopularFoods = () => foods.filter(f => f.popular)