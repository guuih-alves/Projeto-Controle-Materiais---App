import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import './index.css'

//PAGES &COMPONENTS
import Login from './Login'
import Material from './Fleet'
import First from './First'
import Menu from './Menu'
import TerrainLoading from './Terrain-Loading-Grading'  
import TerrainDrilling from './Terrain-Drilling'
import UMR from './UMR'
import Redes from './Redes'
import MEMS from './MEMS'


function App() {

  return (
    <Router>
       <Routes>
          <Route path="/" element={<Login/>}></Route>
          <Route path="/fleet" element={<Material/>}></Route>
          <Route path="/first" element={<First/>}></Route>
          <Route path="/menu" element={<Menu/>}></Route>
          <Route path="/terrain-loading-grading" element={<TerrainLoading/>}></Route>
          <Route path="/terrain-drilling" element={<TerrainDrilling/>}></Route>
          <Route path="/UMR" element={<UMR/>}></Route>
          <Route path="/Redes" element={<Redes/>}></Route>
          <Route path="/MEMS" element={<MEMS/>}></Route>
       </Routes>
    </Router>
  )
}

export default App
