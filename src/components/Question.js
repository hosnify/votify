import { connect } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  Grid,
  Avatar,
  Box,
  Card,
  CardContent,
  Typography,
} from "@material-ui/core";
import { Button, Icon, Progress, Transition, Modal } from "semantic-ui-react";

import { useTheme } from "@material-ui/core/styles";
import { handleAddAnswer } from "../actions/answer";
import { useState, useEffect, useRef } from "react";

function Question({ loggedUser, users, question, dispatch, ...rest }) {
  const theme = useTheme();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [answer, setAnswer] = useState(users[loggedUser].answers[question.id]);

  const timer = useRef();
  const navigate = useNavigate();
  const { question_id } = useParams();
  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleAnswer = (qid, answer) => {
    if (!loading) {
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
    setAnswer(answer);
  };

  const confirmAnswer = () => {
    if (!answer) {
      alert("select one of two options first ");
    } else {
      dispatch(handleAddAnswer(question.id, answer));
    }
  };
  const getVotes = (answer) => {
    return question[answer].votes.length;
  };
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
              {users[question.author].name} asked :
            </Typography>
            <Typography color="primary" gutterBottom>
              Would you rather ?
            </Typography>
            <Grid container direction="column" justify="center" spacing={5}>
              <Grid item lg={6}>
                <Button.Group>
                  <Button
                    loading={loading}
                    disabled={!!users[loggedUser].answers[question.id]}
                    positive={answer === "optionOne"}
                    negative={answer === "optionTwo"}
                    icon
                    fluid
                    onClick={() => handleAnswer(question.id, "optionOne")}
                  >
                    <Icon
                      name={
                        (answer === "optionOne" && "check") ||
                        (answer === "optionTwo" && "close")
                      }
                    />
                    {question.optionOne.text}
                  </Button>
                  <Button.Or />
                  <Button
                    disabled={!!users[loggedUser].answers[question.id]}
                    loading={loading}
                    positive={answer === "optionTwo"}
                    negative={answer === "optionOne"}
                    fluid
                    onClick={() => handleAnswer(question.id, "optionTwo")}
                  >
                    <Icon
                      name={
                        (answer === "optionOne" && "close") ||
                        (answer === "optionTwo" && "check")
                      }
                    />
                    {question.optionTwo.text}
                  </Button>
                </Button.Group>
              </Grid>
              <Grid container direction="row" spacing={5} item lg={12}>
                <Grid item lg={6}>
                  <Transition
                    visible={!!users[loggedUser].answers[question.id]}
                    animation="scale"
                    duration={500}
                  >
                    <Progress
                      value={getVotes("optionOne")}
                      total={getVotes("optionOne") + getVotes("optionTwo")}
                      progress="percent"
                      precision={2}
                      indicating
                      label={` ${getVotes("optionOne")} of ${
                        getVotes("optionOne") + getVotes("optionTwo")
                      } votes `}
                    />
                  </Transition>
                </Grid>
                <Grid item lg={6}>
                  <Transition
                    visible={!!users[loggedUser].answers[question.id]}
                    animation="scale"
                    duration={500}
                  >
                    <Progress
                      value={getVotes("optionTwo")}
                      total={getVotes("optionOne") + getVotes("optionTwo")}
                      progress="percent"
                      precision={2}
                      indicating
                      label={` ${getVotes("optionTwo")} of ${
                        getVotes("optionOne") + getVotes("optionTwo")
                      } votes `}
                    />
                  </Transition>
                </Grid>
              </Grid>
              {!users[loggedUser].answers[question.id] && (
                <Grid item lg={12} container justify="flex-end">
                  {question_id ? (
                    <Button basic color="green" on onClick={confirmAnswer}>
                      Confirm Vote
                    </Button>
                  ) : (
                    <Button
                      basic
                      color="green"
                      on
                      onClick={() => navigate(`/questions/${question.id}`)}
                    >
                      Show Question
                    </Button>
                  )}
                </Grid>
              )}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

function mapStateToProps({ loggedUser, users, questions }, { id }) {
  const question = questions[id];
  return {
    loggedUser,
    users,
    question,
  };
}

export default connect(mapStateToProps)(Question);
