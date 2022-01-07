
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header"
import Booking  from "./Booking";
import Maincontent from "./Maincontent";
import  Bookform from "./Bookform"
 
function App() {
  return (
    <div classNameNameName="App">
      <BrowserRouter>
      <Routes>

        <Route path ="/" element={<> <Header /> <Maincontent /></>} />
        
        <Route path ="/booking" element={<Booking />} />

        <Route path ="/bookform" element={<> <Header /><Bookform /></>} />
      </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
