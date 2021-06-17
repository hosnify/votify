import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";
import QuestionsList from "./questionsList";

export default function DashboardTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Paper square>
        <Tabs
          value={value}
          indicatorColor="primary"
          textColor="primary"
          onChange={handleChange}
          aria-label="disabled tabs example"
          centered
        >
          <Tab label="Unanswered Questions" />
          <Tab label="Answered Questions" />
        </Tabs>
      </Paper>
      <TabPanel value={value} index={0}>
        <QuestionsList></QuestionsList>
      </TabPanel>
      <TabPanel value={value} index={1}>
        two
      </TabPanel>
    </>
  );
}
