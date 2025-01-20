import React from "react";
import PageWrapper from "@/app/components/page-wrapper";
import GeneralSettings from "./GeneralSettings";
import Plan from "./Plan";
import Notifications from "./Notifications";

const tabsContent = [
  {
    value: "General-Settings",
    children: <GeneralSettings />,
  },
  {
    value: "Notification",
    children: <Notifications />,
  },
  {
    value: "Plan",
    children: <Plan />,
  },
];

const Settings = () => {
  return (
    <PageWrapper title="Settings">
      <div>Settings</div>
    </PageWrapper>
  );
};

export default Settings;
