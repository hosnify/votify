import Fab from "@material-ui/core/Fab";
import { connect } from "react-redux";
import AddIcon from "@material-ui/icons/Add";
import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import { Container } from "@material-ui/core";
import DashboardTabs from "./DashboardTabs";
import AddQuestion from "./AddQuestion";

function Dashboard({ ...props }) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });
  return (
    <Container disableGutters maxWidth={"md"} style={{ marginTop: "30px" }}>
      <DashboardTabs />
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

export default connect()(Dashboard);
