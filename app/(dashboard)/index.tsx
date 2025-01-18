import React from "react";
import Dashboard from "./layout";
import PageWrapper from "../components/pageWrapper";

const HomePage = () => {
  return (
    <Dashboard>
      <PageWrapper title="Dashboard">
        <div>Welcome</div>
      </PageWrapper>
    </Dashboard>
  );
};

export default HomePage;
