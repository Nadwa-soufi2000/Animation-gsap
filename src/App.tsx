import Hero from "./components/Hero"
import Highlights from "./components/Highlights"
import Navbar from "./components/Navbar"


function App() {

  return (
    <div className="bg-black w-full">
      <Navbar />
      <Hero />
      <Highlights />
    </div>
  )
}

export default App
