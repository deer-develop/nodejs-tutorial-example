import answerCallback from './answer';
import { QuestionPage } from "../model";
import r1 from '../readline';
import store from '../store';

const askQuestion = (page: QuestionPage) => {
  showQuestionPage(page);
  r1.question('선택: ', (answer: string) =>
    answerCallback(answer, page)
  );
};

const showQuestionPage = (page: QuestionPage) => {
  showOptionList(page === QuestionPage.HOME_MENU ? store.HOME_MENU : store.postTitles);
  showLastOption(page);
};

const showOptionList = (list: string[]) => {
  if (!list.length) return;
  list.forEach((item, i) => console.log(`${i + 1}) ${item}`));
};

const showLastOption = (page: QuestionPage) =>
  console.log(`x) ${page === QuestionPage.HOME_MENU ? "종료" : "뒤로가기"}\n`);


export default askQuestion;
