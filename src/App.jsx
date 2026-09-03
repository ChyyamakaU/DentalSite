import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Components/Header.jsx";
import Main from "./pages/Main.jsx"
import Booking from "./pages/Booking.jsx";
import Footer from "./Components/Footer.jsx"
import BookNow from "./pages/BookNow.jsx";
import Success from "./pages/Success.jsx";
import Privacy from "./pages/Privacy.jsx"

function App() {


  
  return (
   
      <BrowserRouter>
        <Header />
 <>
        <Routes>
          <Route path="/" element= {<Main />}></Route>
          

          <Route path="/booking" element={<Booking />}></Route>

           <Route path="/booknow" element={<BookNow />}></Route>
             <Route path="/success" element={<Success />}></Route>
              <Route path="/privacy" element={<Privacy />}></Route>
        </Routes>
</>
        <Footer />
      </BrowserRouter>
    
  );
}

export default App;
