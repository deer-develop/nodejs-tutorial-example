import askQuestion from './ask';
import { QuestionPage, ViewType, WriteType } from '../model';
import r1 from '../readline';
import showPost from './show';
import store from '../store';
import write from './write';

const ERROR_MESSAGE =
  "입력이 올바르지 않습니다. 아래 선택지의 맨 앞 문자를 입력해주세요.\n";

const answerCallback = (answer: string, page: QuestionPage) => {
  console.clear();
  if (isAnswerValid(answer, page)) {
    page === QuestionPage.HOME_MENU 
      ? getHomeMenuAnswer(answer) 
      : getBulletinBoardAnswer(answer, page);
  } else {
    console.log(ERROR_MESSAGE);
    askQuestion(page);
  }
};

const isAnswerValid = (answer: string, page: QuestionPage): boolean => {
  return (
    answer === "x" ||
    (
      parseInt(answer) !== 0 && 
      parseInt(answer) <= store.getMaxAnswerNumber(page)
    )
  )
};

const getHomeMenuAnswer = (answer: string) => {
  if (answer === "1") {
    askQuestion(QuestionPage.BULLETIN_BOARD);
  } else if (answer === "2") {
    write(WriteType.TITLE);
  } else {
    r1.close();
  }
};

const getBulletinBoardAnswer = (answer: string, page: QuestionPage) => {
  if (answer === "x") return askQuestion(QuestionPage.HOME_MENU);

  showPost(store.getPost(parseInt(answer) - 1), ViewType.VIEW);
  onEnter(page);
};

const onEnter = (page: QuestionPage) => {
  r1.on('line', () => {
    console.clear();
    askQuestion(page);
  });
}

export default answerCallback;