import React from "react";
import { motion } from "framer-motion";
// icon
import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
// Commponent
import Header from "../components/common/Header";
import StatusCard from "../components/common/StatusCard";
import SalesOverviewChart from "../components/overview/SalesOverviewChart";
import CategoryDistributionChart from './../components/overview/CategoryDistributionChart';
import SalesChannelChart from "../components/overview/SalesChannelChart";

const Home = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Home" />
      <main className='max-w-7xl mx-auto py-6 px-4 lg:px-8'>
        {/*  status */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatusCard
            name="Total Sales"
            icon={Zap}
            value="1,2345"
            color="#6366f1"
          />
          <StatusCard name="Users" icon={Users} value="1,234" color="#885cf6" />
          <StatusCard
            name="Total Product"
            icon={ShoppingBag}
            value="567"
            color="#ec4899"
          />
          <StatusCard
            name="Conversion Rate"
            icon={BarChart2}
            value="12.5%"
            color="#10b981"
          />
        </motion.div>

        {/* CHARTS */}

        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8'>
          <SalesOverviewChart />
          <CategoryDistributionChart />
          <SalesChannelChart />
        </div>
      </main>
    </div>
  );
};

export default Home;
