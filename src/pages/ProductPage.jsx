import { motion } from "framer-motion";

import Header from "../components/common/Header";
import StatusCard from "../components/common/StatusCard";
import { AlertTriangle, DollarSign, Package, TrendingUp } from "lucide-react";
import SalesTrandChart from "../components/products/SalesTrandChart";
import CategoryDistributionChart from "../components/overview/CategoryDistributionChart";
import ProductsTable from "../components/products/ProductsTable";

const ProductPage = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Products" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/*  status */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatusCard
            name="Total Products"
            icon={Package}
            value="4,321"
            color="#6366f1"
          />
          <StatusCard
            name="Top Selling"
            icon={TrendingUp}
            value="4,321"
            color="#885cf6"
          />
          <StatusCard
            name="Low Stock"
            icon={AlertTriangle}
            value="321"
            color="#ec4899"
          />
          <StatusCard
            name="Total Revenue"
            icon={DollarSign}
            value="9.5%"
            color="#10b981"
          />
        </motion.div>

        {/* MATLAB TABLE */}

        <ProductsTable />

        {/* CHARTS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <SalesTrandChart />
          <CategoryDistributionChart />
        </div>
      </main>
    </div>
  );
};

export default ProductPage;
