import { Container } from "@material-ui/core";
import Question from "./Question";
import { useParams } from "react-router-dom";

function QuestionDetails({ navigateTo, ...props }) {
  const { question_id } = useParams();
  return (
    <Container disableGutters maxWidth={"md"} style={{ marginTop: "30px" }}>
      <Question id={question_id} />
    </Container>
  );
}

export default QuestionDetails;
