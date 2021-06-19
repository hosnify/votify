import React, { useEffect, useState } from "react";
import { Grid } from "@material-ui/core";
import UserScore from "./UserScore";
import { connect } from "react-redux";

function ScoreList({ users, questions, ...rest }) {
  const [scoreList, setScoreList] = useState([]);

  const score = (userId) => {
    return {
      userId,
      answersCount: Object.keys(users[userId].answers).length,
      questionsCount: Object.values(questions).filter(
        (question) => question.author === userId
      ).length,
    };
  };
  useEffect(() => {
    const newScoreList = Object.keys(users)
      .map((id) => score(id))
      .sort(
        (b, a) =>
          a.answersCount +
          a.questionsCount -
          (b.answersCount + b.questionsCount)
      );
    setScoreList(newScoreList);
  }, []);
  return (
    <Grid container direction="column" spacing={2} justify="flex-start">
      {scoreList.map((score) => (
        <Grid key={score.userId} item>
          <UserScore key={score.userId} score={score} />
        </Grid>
      ))}
    </Grid>
  );
}

function mapStateToProps({ users, questions }) {
  return {
    users,
    questions,
  };
}

export default connect(mapStateToProps)(ScoreList);
