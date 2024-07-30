import 'bootstrap/dist/css/bootstrap.min.css';
import CollapsibleExample from './components/Navbar';
import Footer from "./components/footer.jsx";
import FluidExample from './components/Home.jsx';
import WithHeaderExample from './components/Jobspage.jsx';
import { BrowserRouter as Router, Routes, Route  } from 'react-router-dom';



function App() {
 

  return (
    <Router> 

      <CollapsibleExample />

      <Routes>

      <Route path="/" element={<FluidExample />} />
      <Route path="/jobpage" element={<WithHeaderExample />} />


      </Routes>

      <Footer/>


    </Router>
  )
}

export default App
