import { Grid } from "@material-ui/core";
import Question from "./Question";

export default function QuestionsList({ ...props }) {
  return (
    <Grid container direction="column" spacing={2} justify="flex-start">
      {props.questions.map((id) => (
        <Grid key={id} item>
          <Question key={id} id={id}></Question>
        </Grid>
      ))}
    </Grid>
  );
}
