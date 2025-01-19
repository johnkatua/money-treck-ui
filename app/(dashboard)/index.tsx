import React from "react";
import Dashboard from "./layout";
import PageWrapper from "../components/pageWrapper";
import RevenueBudgetChart from "../components/analytics/RevenueBudgetChart";

const HomePage = () => {
  return (
    <Dashboard>
      <PageWrapper title="Dashboard">
        <div>
          <RevenueBudgetChart />
        </div>
      </PageWrapper>
    </Dashboard>
  );
};

export default HomePage;
