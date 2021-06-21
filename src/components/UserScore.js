import { connect } from "react-redux";
import {
  Grid,
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Statistic } from "semantic-ui-react";

import { useTheme } from "@material-ui/core/styles";

function UserScore({ users, score, ...rest }) {
  const theme = useTheme();

  return (
    <Grid container direction="row">
      <Grid item>
        <Box maxWidth={theme.spacing(30)}>
          <Avatar
            alt="avatar"
            src={users[score.userId].avatarURL}
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
            <Typography component="div" color="primary" gutterBottom>
              {users[score.userId].name} :
            </Typography>
            <Grid container direction="column" justify="center" spacing={5}>
              <Statistic.Group>
                <Statistic>
                  <Statistic.Value>
                    {score.answersCount + score.questionsCount}
                  </Statistic.Value>
                  <Statistic.Label>Total Score</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>{score.answersCount}</Statistic.Value>
                  <Statistic.Label>Answers</Statistic.Label>
                </Statistic>
                <Statistic>
                  <Statistic.Value>{score.questionsCount}</Statistic.Value>
                  <Statistic.Label>Questions</Statistic.Label>
                </Statistic>
              </Statistic.Group>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

function mapStateToProps({ users }) {
  return {
    users,
  };
}

export default connect(mapStateToProps)(UserScore);
