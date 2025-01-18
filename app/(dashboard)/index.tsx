import CustomSidebar from "../components/sidebar/CustomSidebar";

const Dashboard = () => {
  return (
    <div className="bg-[--theme-color-one] text-white h-screen flex gap-4">
      <div className="w-[250px] p-2 overflow-hidden">
        <CustomSidebar />
      </div>
      <div className="flex-1 py-4 pr-4">
        <div className="h-[100%] p-2 bg-white text-[--theme-color-one] rounded-lg overflow-scroll">
          <div className="h-[900px]">Hello</div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
