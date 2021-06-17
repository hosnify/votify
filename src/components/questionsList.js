import { connect } from "react-redux";
import { Grid } from "@material-ui/core";
import Question from "./Question";

function QuestionsList({ ...props }) {
  return (
    <Grid container direction="column" spacing={2} justify="flex-start">
      {props.questionsIds.map((id) => (
        <Grid item>
          <Question id={id}></Question>
        </Grid>
      ))}
    </Grid>
  );
}

function mapStateToProps({ questions }) {
  return {
    questionsIds: Object.keys(questions).sort(
      (a, b) => questions[b].timestamp - questions[a].timestamp
    ),
  };
}

export default connect(mapStateToProps)(QuestionsList);
