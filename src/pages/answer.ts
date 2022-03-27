import { store } from "./../store";
import askQuestion from "./ask";
import commander from "../commander";

const ERROR_MESSAGE =
  "입력이 올바르지 않습니다. 아래 선택지의 맨 앞 문자를 입력해주세요.\n";

const replyToAnswer = (answer: string) => {
  console.clear();

  if (isAnswerValid(answer)) {
    store.askType === "HomeMenu"
      ? getHomeMenuAnswer(answer)
      : getBulletinBoardAnswer(answer);
  } else {
    console.log(ERROR_MESSAGE);
    askQuestion();
  }
};

const isAnswerValid = (answer: string): boolean => {
  return (
    answer === "x" ||
    (parseInt(answer) !== 0 && parseInt(answer) <= store.getMaxAnswerNumber())
  );
};

const getHomeMenuAnswer = (answer: string) => {
  if (answer === "1") store.askType = "BulletinBoard";
  else if (answer === "2") store.writeType = "Title";
  else commander.terminate();
};

const getBulletinBoardAnswer = (answer: string) => {
  if (answer === "x") return (store.askType = "HomeMenu");

  store.configureShowInfo(store.getPost(parseInt(answer) - 1), "View");
};

export default replyToAnswer;
