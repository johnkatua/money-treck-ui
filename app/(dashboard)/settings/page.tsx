import React from "react";
import PageWrapper from "@/app/components/page-wrapper";
import GeneralSettings from "./GeneralSettings";
import Plan from "./Plan";
import Notifications from "./Notifications";
import TabWrapper from "@/app/components/tab-wrapper";
import { settingsHeader } from "@/lib/data";

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
      <TabWrapper
        defaultValue="General-Settings"
        tabsHeader={settingsHeader}
        tabsContent={tabsContent}
      />
    </PageWrapper>
  );
};

export default Settings;
