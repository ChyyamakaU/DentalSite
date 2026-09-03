import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header.jsx";
import Main from "./pages/Main.jsx"
import Booking from "./pages/Booking.jsx";
import Footer from "./Components/Footer.jsx"

function App() {
  return (
   
      <BrowserRouter>
        <Header />
 <>
        <Routes>
          <Route path="/" element= {<Main />}></Route>
          

          <Route path="/booking" element={<Booking />}></Route>
        </Routes>
</>
        <Footer />
      </BrowserRouter>
    
  );
}

export default App;
