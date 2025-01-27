import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { BUDGETS_QUERY_KEY } from "@/app/constants";
import { getBudgets } from "@/app/services/budget";
import BudgetList from "./BudgetList";

const BudgetListWrapper = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: BUDGETS_QUERY_KEY,
    queryFn: getBudgets,
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <BudgetList />
    </HydrationBoundary>
  );
};

export default BudgetListWrapper;
