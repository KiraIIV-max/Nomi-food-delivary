import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import MobileNav from './MobileNav'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="min-h-dvh flex flex-col">
      <Navbar />

      <div className="h-16 md:h-20" aria-hidden />

      <main className="flex-1">
        <Outlet />
      </main>

      <Footer />

      <div className="h-16 md:hidden" aria-hidden />

      <MobileNav />
    </div>
  )
}