# 🍴 NOMI — Food worth finding.

> A modern food delivery frontend built with React, Vite, and Tailwind CSS.  
> Discover local favorites, order what you love, and enjoy every bite — no backend required.

**🔗 Live Demo:** [nomi-food-delivary.vercel.app](https://nomi-food-delivary.vercel.app/)

**🔗 overview:**


---
<img width="1920" height="6768" alt="screencapture-nomi-food-delivary-vercel-app-2026-09-27-07_54_40" src="https://github.com/user-attachments/assets/2fc19c4b-6824-4d5b-94bf-00d568b3e182" />


## ✨ About the Project

NOMI is a **fully functional food delivery platform** that runs entirely on the frontend.  
It uses **static data + LocalStorage** to simulate a real ordering experience — from browsing restaurants to placing and tracking orders.

The project follows a strict **Editorial × Modern App** design language:  
warm colors, generous spacing, editorial typography, and minimal, photography-first UI.

---

## 🚀 Key Features

- **🏠 Home** — Hero, Categories, Popular Restaurants, Featured Food, Promo, How It Works, Final CTA
- **🔍 Restaurants Discovery** — Search + Filter by cuisine + Sort by rating / delivery time
- **🍽️ Restaurant Details** — Cover image, dynamic menu tabs, quick-add items
- **🍔 Food Details** — Ingredients, quantity selector, add to cart, order now
- **🛒 Cart** — Dynamic quantity control, live totals, discount calculations
- **💳 Checkout** — Form validation (on blur + on submit), order summary, place order
- **✅ Order Success** — Animated confirmation, order ID, estimated delivery
- **📦 Orders History** — All past orders with status badges and details
- **❤️ Favorites** — Save restaurants and dishes, tabbed view
- **👤 Profile** — User info, stats, quick links, clear-all-data
- **🎁 Offers** — Promo codes with copy-to-clipboard
- **🌐 404** — Custom designed page
- **📱 Fully Responsive** — Bottom nav on mobile, adaptive grids everywhere

---

## 🧰 Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 |
| **Build Tool** | Vite |
| **Styling** | Tailwind CSS v4 |
| **Routing** | React Router v6 |
| **Animation** | Framer Motion |
| **Icons** | Lucide React |
| **State** | Context API |
| **Persistence** | LocalStorage |
| **Deployment** | Vercel |

---

## 🎨 Design System

| Token | Value |
|---|---|
| Background | `#F7F3EC` (warm cream) |
| Surface | `#FFFFFF` |
| Primary Text | `#171513` |
| Accent | `#E85D2A` (burnt orange) |
| Dark Surface | `#24201D` |
| Border | `#E7E0D6` |
| Font — UI | Manrope |
| Font — Display | DM Serif Display |

---

## 📁 Project Structure

src/
├── assets/images/
├── components/
│   ├── cart/             # CartItem, CartSummary, EmptyCart
│   ├── checkout/         # FormField, CheckoutForm, CheckoutSummary
│   ├── common/           # Button, SectionHeader, Rating, EmptyState, ScrollToTop
│   ├── favorites/        # FavoriteTabs, FavoriteRestaurants, FavoriteFoods
│   ├── food/             # FoodCard, QuantitySelector, IngredientsList, ...
│   ├── home/             # Hero, Categories, PopularRestaurants, FeaturedFood, ...
│   ├── layout/           # Navbar, MobileNav, Footer, LoadingScreen, Layout
│   ├── offers/           # OfferCard, OfferCodeBox
│   ├── order/            # OrderCard, OrderInfoCard, OrderStatusBadge, SuccessMark, ...
│   ├── profile/          # ProfileHeader, ProfileStats, ProfileLinks, DangerZone
│   └── restaurant/       # RestaurantCard, RestaurantGrid, RestaurantFilters, ...
├── context/
│   └── AppContext.jsx    # Cart + Favorites + Orders + User state
├── data/
│   ├── categories.js     # 7 categories
│   ├── restaurants.js    # 8 restaurants
│   └── foods.js          # ~25 food items
├── hooks/
│   └── useLocalStorage.js
├── pages/
│   ├── Home.jsx
│   ├── Restaurants.jsx
│   ├── RestaurantDetails.jsx
│   ├── FoodDetails.jsx
│   ├── Cart.jsx
│   ├── Checkout.jsx
│   ├── OrderSuccess.jsx
│   ├── Orders.jsx
│   ├── OrderDetails.jsx
│   ├── Favorites.jsx
│   ├── Profile.jsx
│   ├── Offers.jsx
│   └── NotFound.jsx
├── utils/
│   ├── priceCalculator.js
│   ├── validation.js
│   ├── generateOrderId.js
│   └── formatDate.js
├── App.jsx
├── main.jsx
└── index.css
🛣️ Routes
Path	Page
/	Home
/restaurants	Explore Restaurants
/restaurants/:id	Restaurant Details
/food/:id	Food Details
/cart	Cart
/checkout	Checkout
/order-success	Order Confirmation
/orders	Order History
/orders/:id	Order Details
/favorites	Favorites
/profile	Profile
/offers	Offers
*	404
💻 Getting Started
Prerequisites
Node.js 18+

npm 9+

Install & Run
Bash
# Clone the repository
git clone [https://github.com/KiraIIV-max/Nomi-food-delivary.git](https://github.com/KiraIIV-max/Nomi-food-delivary.git)
cd nomi

# Install dependencies
npm install

# Start dev server
npm run dev
Open http://localhost:5173 in your browser.

Build for Production
Bash
npm run build
npm run preview
🗝️ LocalStorage Keys
Key	Content
nomi_cart	Cart items
nomi_favorites	Saved restaurants & foods
nomi_orders	Order history
nomi_user	User profile
nomi_loaded	Session flag for loading screen
🎯 User Journey
Plaintext
Home → Categories / Restaurants → Restaurant Details
     → Food Details → Add to Cart → Cart → Checkout
     → Place Order → Order Success → Order History
⚖️ Trade-offs
LocalStorage instead of a backend — keeps the project frontend-only and deployable anywhere with zero infrastructure.

Client-side filtering & sorting — the dataset is small (~8 restaurants, ~25 dishes), so no pagination or server queries are needed.

No real authentication — the profile is a mock; adding real auth would require a backend or a service like Firebase.

Static image URLs (Unsplash) — no asset optimization pipeline; production would use a CDN with responsive images.

🗺️ Roadmap
[ ] Real backend (Firebase / Supabase) with auth

[ ] Live order tracking with map

[ ] Payment gateway integration

[ ] Push notifications for deals

[ ] Dark mode (Light-first by design)

[ ] PWA support with offline cart

[ ] E2E tests (Playwright)

👤 Author
Ahmed Mohamed

GitHub: @KiraIIV-max

Project Repo: Nomi-food-delivary

📄 License
This project is open source and available under the MIT License.
