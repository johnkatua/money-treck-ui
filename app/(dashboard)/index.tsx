import React from "react";
import Dashboard from "./layout";
import PageWrapper from "../components/pageWrapper";
import RevenueBudgetChart from "../components/analytics/RevenueBudgetChart";
import BudgetChart from "../components/analytics/BudgetChart";

const HomePage = () => {
  return (
    <Dashboard>
      <PageWrapper title="Dashboard">
        <div>
          <RevenueBudgetChart />
        </div>
        <div>
          <BudgetChart />
        </div>
      </PageWrapper>
    </Dashboard>
  );
};

export default HomePage;
