import Dashboard from '@/components/Dashboard'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <Dashboard />
      <Footer />
    </main>
  )
}
