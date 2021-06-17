import { connect } from "react-redux";
import {
  Grid,
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Progress } from "semantic-ui-react";
import { useTheme } from "@material-ui/core/styles";
import QuestionOption from "./QuestionOption";

function Question({ authedUser, users, question, ...rest }) {
  const theme = useTheme();

  return (
    <Grid container direction="row">
      <Grid item>
        <Box maxWidth={theme.spacing(30)}>
          <Avatar
            alt="avatar"
            src={users[question.author].avatarURL}
            style={{
              width: theme.spacing(20),
              height: theme.spacing(20),
              margin: theme.spacing(5),
            }}
          ></Avatar>
        </Box>
      </Grid>
      <Grid item lg>
        <Card style={{ minWidth: theme.spacing(150), maxWidth: "fit-content" }}>
          <CardContent>
            <Typography color="primary" gutterBottom>
              {question.author} asked :
            </Typography>
            <Typography color="primary" gutterBottom>
              Would you rather ?
            </Typography>
            <QuestionOption optionText={question.optionOne.text} />
            <Progress value="4" total="5" progress="percent" />
            <QuestionOption optionText={question.optionTwo.text} />
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

function mapStateToProps({ authedUser, users, questions }, { id }) {
  const question = questions[id];
  return {
    authedUser,
    users,
    question,
  };
}

export default connect(mapStateToProps)(Question);
