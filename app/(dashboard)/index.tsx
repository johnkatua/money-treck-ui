import BudgetChart from "../components/analytics/BudgetChart";
import BudgetExpenditureChart from "../components/analytics/BudgetExpenditureChart";
import BudgetUtilization from "../components/analytics/BudgetUtilization";
import RevenueBudgetChart from "../components/analytics/RevenueBudgetChart";
import FinancialOverview from "../components/financial-overview";
import PageWrapper from "../components/page-wrapper";
import Dashboard from "./layout";

const HomePage = () => {
  return (
    <Dashboard>
      <PageWrapper title="Dashboard">
        <FinancialOverview />
        <div className="h-4" />
        <BudgetUtilization />
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
