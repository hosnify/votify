import Header from "./header";
import { connect } from "react-redux";

import { useEffect } from "react";
import { handleInitialData } from "../actions/shared";
import { Container } from "@material-ui/core";
import DashboardTabs from "./DashboardTabs";

function Dashboard({ ...props }) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  });
  return (
    <Container disableGutters maxWidth={"md"} style={{ marginTop: "30px" }}>
      <DashboardTabs />
    </Container>
  );
}

// function mapStateToProps() {
//   return {
//   };
// }

export default connect()(Dashboard);
