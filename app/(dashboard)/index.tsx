import React from "react";
import Dashboard from "./layout";
import PageWrapper from "../components/pageWrapper";
import RevenueBudgetChart from "../components/analytics/RevenueBudgetChart";
import BudgetChart from "../components/analytics/BudgetChart";
import BudgetExpenditureChart from "../components/analytics/BudgetExpenditureChart";

const HomePage = () => {
  return (
    <Dashboard>
      <PageWrapper title="Dashboard">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <RevenueBudgetChart />
          </div>
          <div>
            <BudgetExpenditureChart />
          </div>
          <div>
            <BudgetChart />
          </div>
        </div>
      </PageWrapper>
    </Dashboard>
  );
};

export default HomePage;
