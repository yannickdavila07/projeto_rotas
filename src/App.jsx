import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Sobre from "./pages/Contato"
import Produtos from "./pages/Produtos"
import Contato from "./pages/Contato"

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-violet-800 text-white">
        <NavBar/>
        <main>
          <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/sobre' element={<Sobre />} />
              <Route path='/produtos' element={<Produtos />} />
              <Route path='/contato' element={<Contato />} />
          </Routes>
        </main>
      </div>
      
    </Router>
  )
}

export default App
