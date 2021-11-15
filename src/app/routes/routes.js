import Correct from "../views/Correct/Correct";
import InCorrect from "../views/InCorrect/InCorrect";
import Score from "../views/Score/Score";
import Questions from "../views/Questions/Questions";
import Welcome from "../views/Welcome/Welcome";

export const routes = {
  correct: {
    path: "/correct",
    component: <Correct />,
  },
  incorrect: {
    path: "/incorrect",
    component: <InCorrect />,
  },
  score: {
    path: "/score",
    component: <Score />,
  },
  question: {
    path: "/question/:id",
    component: <Questions />,
  },
  welcome: {
    path: "/",
    component: <Welcome />,
  },
};
