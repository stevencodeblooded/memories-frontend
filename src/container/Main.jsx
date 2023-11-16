import MemorySection from "../components/MemorySection"
import Footer from "../shared/Footer"
import Navbar from "../shared/Navbar"
import { Toaster } from 'sonner'

const Main = () => {
  return (
    <div className="w-full bg-slate-400 min-h-screen">
      <Toaster />
      <div className="max-w-4xl mx-auto py-6 flex flex-col gap-5">
        <Navbar />
        <main>
          <MemorySection />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Main