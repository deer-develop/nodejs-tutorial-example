import replyToAnswer from "./answer";
import store from "../store";
import commander from "../commander";

const askQuestion = async () => {
  showQuestionPage();

  const answer = await commander.ask("선택: ");
  replyToAnswer(answer);
};

const showQuestionPage = () => {
  showOptionList();
  showLastOption();
};

const showOptionList = () => {
  const list =
    store.askType === "HomeMenu" ? store.HOME_MENU : store.postTitles;
  if (!list.length) return;
  list.forEach((item, i) => console.log(`${i + 1}) ${item}`));
};

const showLastOption = () =>
  console.log(`x) ${store.askType === "HomeMenu" ? "종료" : "뒤로가기"}\n`);

export default askQuestion;
