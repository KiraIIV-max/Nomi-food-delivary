import { createContext, useContext, useCallback, useMemo } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'
import { calculateTotals } from '../utils/priceCalculator'
import { generateOrderId } from '../utils/generateOrderId'

const AppContext = createContext(null)

const DEFAULT_USER = {
  name: 'Ahmed Mohamed',
  email: 'ahmed@example.com',
}

export function AppProvider({ children }) {
  const [cart, setCart]                   = useLocalStorage('nomi_cart', [])
  const [favorites, setFavorites]         = useLocalStorage('nomi_favorites', { restaurants: [], foods: [] })
  const [orders, setOrders]               = useLocalStorage('nomi_orders', [])
  const [user, setUser]                   = useLocalStorage('nomi_user', DEFAULT_USER)

  /* ============ CART ============ */
  const addToCart = useCallback((food, restaurant) => {
    setCart((prev) => {
      const existing = prev.find((i) => i.foodId === food.id)
      if (existing) {
        return prev.map((i) =>
          i.foodId === food.id ? { ...i, quantity: i.quantity + 1 } : i
        )
      }
      return [
        ...prev,
        {
          foodId: food.id,
          name: food.name,
          price: food.price,
          image: food.image,
          restaurantId: restaurant?.id ?? food.restaurantId,
          restaurantName: restaurant?.name ?? '',
          quantity: 1,
        },
      ]
    })
  }, [setCart])

  const removeFromCart = useCallback((foodId) => {
    setCart((prev) => prev.filter((i) => i.foodId !== foodId))
  }, [setCart])

  const increaseQuantity = useCallback((foodId) => {
    setCart((prev) =>
      prev.map((i) => (i.foodId === foodId ? { ...i, quantity: i.quantity + 1 } : i))
    )
  }, [setCart])

  const decreaseQuantity = useCallback((foodId) => {
    setCart((prev) =>
      prev
        .map((i) => (i.foodId === foodId ? { ...i, quantity: i.quantity - 1 } : i))
        .filter((i) => i.quantity > 0)
    )
  }, [setCart])

  const clearCart = useCallback(() => setCart([]), [setCart])

  const cartCount = useMemo(
    () => cart.reduce((sum, i) => sum + i.quantity, 0),
    [cart]
  )

  const totals = useMemo(() => calculateTotals(cart), [cart])

  /* ============ FAVORITES ============ */
  const toggleFavoriteRestaurant = useCallback((id) => {
    setFavorites((prev) => ({
      ...prev,
      restaurants: prev.restaurants.includes(id)
        ? prev.restaurants.filter((x) => x !== id)
        : [...prev.restaurants, id],
    }))
  }, [setFavorites])

  const toggleFavoriteFood = useCallback((id) => {
    setFavorites((prev) => ({
      ...prev,
      foods: prev.foods.includes(id)
        ? prev.foods.filter((x) => x !== id)
        : [...prev.foods, id],
    }))
  }, [setFavorites])

  const isFavoriteRestaurant = useCallback(
    (id) => favorites.restaurants.includes(id),
    [favorites]
  )

  const isFavoriteFood = useCallback(
    (id) => favorites.foods.includes(id),
    [favorites]
  )

  /* ============ ORDERS ============ */
  const createOrder = useCallback((customer, items) => {
    const t = calculateTotals(items)
    const order = {
      id: generateOrderId(),
      items,
      customer,
      subtotal: t.subtotal,
      delivery: t.delivery,
      discount: t.discount,
      total: t.total,
      status: 'confirmed',
      createdAt: new Date().toISOString(),
      estimatedDelivery: '25–35 min',
    }
    setOrders((prev) => [order, ...prev])
    return order
  }, [setOrders])

  const getOrderById = useCallback(
    (id) => orders.find((o) => o.id === id),
    [orders]
  )

  /* ============ RESET ============ */
  const resetAll = useCallback(() => {
    setCart([])
    setFavorites({ restaurants: [], foods: [] })
    setOrders([])
    setUser(DEFAULT_USER)
  }, [setCart, setFavorites, setOrders, setUser])

  const value = {
    // cart
    cart, cartCount, totals,
    addToCart, removeFromCart, increaseQuantity, decreaseQuantity, clearCart,
    // favorites
    favorites,
    toggleFavoriteRestaurant, toggleFavoriteFood,
    isFavoriteRestaurant, isFavoriteFood,
    // orders
    orders, createOrder, getOrderById,
    // user
    user, setUser,
    // reset
    resetAll,
  }

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}

export function useApp() {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within <AppProvider>')
  return ctx
}