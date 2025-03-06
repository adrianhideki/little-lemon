import { Route, Routes } from "react-router";
import Home from "./Components/Home";
import Booking from "./Components/Booking";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/booking" element={<Booking />} />
    </Routes>
  );
}

export default App;
