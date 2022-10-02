import 'react-toastify/dist/ReactToastify.css';
import Home from "./Routes/home/Home";
import { Routes, Route } from 'react-router-dom'
import Navigation from "./Routes/Navigation/Navigation";
import Authentication from "./Routes/Authentication/Authentication";
import { ToastContainer } from 'react-toastify'
import Shop from './Routes/Shop/Shop'
import Checkout from './Routes/checkout/Checkout';
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="auth" element={<Authentication />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
