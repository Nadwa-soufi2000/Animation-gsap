import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"


function App() {

  return (
    <div className="bg-[#0b0b0b] w-full">
      <Navbar />
      <Hero />
      <Highlights />
    </div>
  )
}

export default App
