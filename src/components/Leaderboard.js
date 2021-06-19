import Fab from "@material-ui/core/Fab";
import { connect } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import { Container } from "@material-ui/core";
import ScoreList from "./ScoreList";
import AddQuestion from "./AddQuestion";

function Leaderboard({ ...props }) {
  return (
    <Container disableGutters maxWidth={"md"} style={{ marginTop: "30px" }}>
      <ScoreList></ScoreList>
      <AddQuestion
        trigger={
          <Fab
            color="primary"
            aria-label="add"
            style={{
              position: "fixed",
              bottom: 30,
              right: 20,
            }}
          >
            <AddIcon />
          </Fab>
        }
      />
    </Container>
  );
}

export default connect()(Leaderboard);
