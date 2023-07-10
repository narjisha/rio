
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavExample from './Components/Navbar'
import Homepage from './Components/Homepage'
import Rio from './Components/Rio';
import Layout from "./Components/Layout";
import Contact from "./Components/contact";
import Foooter from "./Components/Foooter";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/rio" element={<Rio />} /> 
          <Route path="/contact" element={<Contact/>} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
