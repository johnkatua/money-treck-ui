import React from "react";
import PageWrapper from "@/app/components/page-wrapper";
import GeneralSettings from "./GeneralSettings";
import Plan from "./Plan";
import Notifications from "./Notifications";
import TabWrapper from "@/app/components/tab-wrapper";
import { settingsHeader } from "@/lib/data";
import TableListWrapper from "@/app/components/table-wrapper/TableListWrapper";
import { USER_QUERY_KEY } from "@/app/constants";
import { getUser } from "@/app/services";

const tabsContent = [
  {
    value: "General-Settings",
    children: (
      <TableListWrapper queryKey={USER_QUERY_KEY} queryFn={getUser}>
        <GeneralSettings />
      </TableListWrapper>
    ),
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
