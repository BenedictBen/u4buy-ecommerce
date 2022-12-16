import Home from "./Pages/Home";
import { Routes, Route} from "react-router-dom";
import NavPage from "./Components/Navbar/NavPage";
import Shop from "./Pages/Shop"
import Electronics from "./Pages/Electronics";
import Motors from "./Pages/Motors";
import Fashion from "./Pages/Fashion";
import Collectible from './Pages/Collectible'
import Sports from './Pages/Sports'
import HealthBeauty from './Pages/HealthBeauty'
import IndustrialEquipment from './Pages/IndustrialEquipment'
import HomeGarden from "./Pages/HomeGarden";
import Category from "./Pages/Category";
import FooterMain from "./Components/Footer/FooterMain";
import Handbag from "./Components/SingleProduct/Handbag";
import IPhone from "./Components/SingleProduct/IPhone";
import Earbuds from "./Components/SingleProduct/Earbuds";
import Cart from "./Components/Cart/Cart";
import ShopContextProvider from "./Components/Context/ShopContext";

import SmartWatch from "./Components/SingleProduct/SmartWatch";
import CanonCamera from "./Components/SingleProduct/CanonCamera";
import CarTires from "./Components/SingleProduct/CarTires";
import CheckOut from "./Pages/CheckOut";
import ThankYou from "./Components/Checkout/ThankYou";
import Login from "./Pages/Login";
import Register from "./Pages/Register";

function App() {
  return (
    <div className="App">
      <ShopContextProvider> 
        
      <NavPage />
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/shop" element={<Shop />}/>
        <Route path="/electronics" element={<Electronics />}/>
        <Route path="/motors" element={<Motors />}/>
        <Route path="/fashion" element={<Fashion />}/>
        <Route path="/collectible" element={<Collectible />}/>
        <Route path="/sports" element={<Sports />}/>
        <Route path="/healthbeauty" element={<HealthBeauty />}/>
        <Route path="/industrialequipment" element={<IndustrialEquipment />}/>
        <Route path="/homegarden" element={<HomeGarden />}/>
        <Route path="/category" element={<Category />}/>
        <Route path="/handbag" element={<Handbag />}/>
        <Route path="/iphone" element={<IPhone />}/>
        <Route path="/earbuds" element={<Earbuds />}/>
        <Route path="/smartwatch" element={<SmartWatch />}/>
        <Route path="/canoncamera" element={<CanonCamera />}/>
        <Route path="/cartires" element={<CarTires />}/>

        <Route path="/cart" element={<Cart />}/>
        <Route path="/checkout" element={<CheckOut />}/>
        <Route path="/thankyou" element={<ThankYou />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/register" element={<Register />}/>

        

      </Routes>
      <FooterMain />
      
      </ShopContextProvider>
    </div>
  );
}

export default App;
