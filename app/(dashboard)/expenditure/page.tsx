import PageWrapper from "@/app/components/pageWrapper";
import TabWrapper from "@/app/components/tabWrapper";
import { tabsHeader } from "@/lib/data";

const tabsContent = [];

const Expenses = () => {
  return (
    <PageWrapper title="Expenses">
      <TabWrapper
        defaultValue="View"
        tabsHeader={tabsHeader}
        tabsContent={tabsContent}
      />
    </PageWrapper>
  );
};

export default Expenses;
