import React from "react";

import StatusCard from "./../components/common/StatusCard";
import Header from "../components/common/Header";

import { motion } from "framer-motion";
import { UserCheck, UserPlus, UsersIcon, UserX } from "lucide-react";
import UsersTable from "../components/users/UsersTable";
import UserActivityHeatmap from "../components/users/UserActivityHeatmap";
import UserDemographicsChart from "../components/users/UserDemographicsChart";
import UserGrowthChart from "../components/users/UserGrowthChart";

const userstate = {
  totalUsers: 152845,
  newUsersToday: 243,
  activeUsers: 98520,
  churnRate: "2.4%",
};

const UsersPages = () => {
  return (
    <div className="flex-1 overflow-auto relative z-10">
      <Header title="Users" />
      <main className="max-w-7xl mx-auto py-6 px-4 lg:px-8">
        {/*  status */}
        <motion.div
          className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <StatusCard
            name="Total Users"
            icon={UsersIcon}
            value={userstate.totalUsers.toLocaleString()}
            color="#6366f1"
          />
          <StatusCard
            name="New Users Today"
            icon={UserPlus}
            value={userstate.newUsersToday}
            color="#885cf6"
          />
          <StatusCard
            name="Active Users"
            icon={UserCheck}
            value={userstate.activeUsers.toLocaleString()}
            color="#ec4899"
          />
          <StatusCard
            name="Churn Rrate"
            icon={UserX}
            value={userstate.churnRate}
            color="#10b981"
          />
        </motion.div>
        <UsersTable />
        {/* USER CHARTS */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
          <UserGrowthChart />
          <UserDemographicsChart />
          <UserActivityHeatmap />
        </div>
      </main>
    </div>
  );
};

export default UsersPages;
