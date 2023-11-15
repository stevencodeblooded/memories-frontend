import Footer from "../shared/Footer"
import Navbar from "../shared/Navbar"

const Main = () => {
  return (
    <div>
        <Navbar />
        <main>
            <h1 className="text-4xl text-red-800">MAIN</h1>
        </main>
        <Footer />
    </div>
  )
}

export default Main