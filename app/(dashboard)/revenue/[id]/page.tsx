import PageWrapper from "@/app/components/page-wrapper";
import React from "react";
import EditRevenueForm from "./EditRevenueForm";

const EditRevenue = () => {
  return (
    <PageWrapper title="Edit Revenue">
      <div className="px-4 py-4 bg-gradient-to-r from-pink-400 to-purple-600 rounded-lg shadow-2xl space-y-6">
        <EditRevenueForm />
      </div>
    </PageWrapper>
  );
};

export default EditRevenue;
