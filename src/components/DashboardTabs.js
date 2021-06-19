import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import Paper from "@material-ui/core/Paper";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "./TabPanel";
import QuestionsList from "./questionsList";
function DashboardTabs({ questions, loggedUser, users, ...rest }) {
  const [value, setValue] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const [unAnsweredQuestions, setUnAnsweredQuestions] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  useEffect(() => {
    const answeredQuestions = loggedUser
      ? Object.keys(questions)
          .filter((id) => Object.keys(users[loggedUser].answers).includes(id))
          .sort((b, a) => questions[a].timestamp - questions[b].timestamp)
      : [];

    const unAnsweredQuestions = Object.keys(questions)
      .filter((id) => !answeredQuestions.includes(id))
      .sort((b, a) => questions[a].timestamp - questions[b].timestamp);

    setAnsweredQuestions(answeredQuestions);
    setUnAnsweredQuestions(unAnsweredQuestions);
  }, [loggedUser, questions, users]);

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
        <QuestionsList questions={unAnsweredQuestions} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <QuestionsList questions={answeredQuestions} />
      </TabPanel>
    </>
  );
}
function mapStateToProps({ loggedUser, users, questions }) {
  return {
    loggedUser,
    users,
    questions,
  };
}

export default connect(mapStateToProps)(DashboardTabs);
