const Dashboard = () => {
  return (
    <div className="bg-[--theme-color-one] text-white h-screen flex gap-4">
      <div className="w-[300px] bg-slate-500 p-2">Left</div>
      <div className="flex-1 py-4 pr-4">
        <div className="h-[100%] p-2 bg-white text-[--theme-color-one] rounded-lg">
          Right
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
