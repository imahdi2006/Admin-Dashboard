import { Route, Routes } from "react-router-dom";

import ProductPage from "./pages/ProductPage";
import Home from "./pages/Home";
import Sidebar from "./components/Sidebar";
import UsersPages from "./pages/UsersPages";
import SalesPage from "./pages/SalesPage";
import OrdersPage from './pages/OrdersPage';
import AnalyticsPage from "./pages/AnalyticsPage";
import SettingsPage from './pages/SettingsPage';

function App() {
  return (
    <div className="flex h-screen bg-gray-900 text-gray-100 overflow-hidden">
      {/* background */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-80"></div>
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/users" element={<UsersPages />} />
        <Route path="/sales" element={<SalesPage />} />
        <Route path="/orders" element={<OrdersPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="/settings" element={<SettingsPage />} />
      </Routes>
    </div>
  );
}

export default App;
