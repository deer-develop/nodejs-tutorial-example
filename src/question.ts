import { Post, QuestionPage } from "./model";

const readline = require("readline");
const r1 = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const ERROR_MESSAGE =
  "입력이 올바르지 않습니다. 아래 선택지의 맨 앞 문자를 입력해주세요.";
const QUESTION_MESSAGE = "선택: ";
const HOME_MENU: string[] = ["목록 조회", "쓰기"];

const postList: Post[] = [
  {
    id: 0,
    title: "달러구트 꿈 백화점",
    content: "많이 웃고 울었던",
  },
  {
    id: 1,
    title: "스토너",
    content: "오늘 읽고 싶은",
  },
];

const isAnswerValid = (answer: string, page: QuestionPage): boolean => {
  if (answer === "x") return true;

  const maxAnswerNumber =
    page === QuestionPage.HOME_MENU ? HOME_MENU.length : postList.length;

  if (parseInt(answer) !== 0 && parseInt(answer) <= maxAnswerNumber)
    return true;

  return false;
};

const showOptionList = (list: string[]) => {
  list.forEach((item, i) => console.log(`${i + 1}) ${item}`));
};

const getPostTitles = () => postList.map((post) => post.title);

const showLastOption = (page: QuestionPage) =>
  console.log(`x) ${page === QuestionPage.HOME_MENU ? "종료" : "뒤로가기"}`);

const showQuestionPage = (page: QuestionPage) => {
  const list = QuestionPage.HOME_MENU ? HOME_MENU : getPostTitles();
  showOptionList(list);
  showLastOption(page);
};

const writePost = () => {
 console.log('write post');
}

const getHomeMenuAnswer = (answer: string) => {
  if (answer === '1') {
    askQuestion(QuestionPage.BULLETIN_BOARD);
  } else if (answer === '2') {
    writePost();
  } else {
    r1.close();
  }
}

const getBulletinBoardAnswer = (answer: string) => {
  if (answer === '1') {
    askQuestion(QuestionPage.BULLETIN_BOARD);
  } else if (answer === '2') {
    writePost();
  } else {
    r1.close();
  }
}

const answerCallback = (answer: string, page: QuestionPage) => {
  if (isAnswerValid(answer, page)) {
    console.clear();
    page === QuestionPage.HOME_MENU ? getHomeMenuAnswer(answer) : console.log("POST");
  } else {
    console.clear();
    console.log(ERROR_MESSAGE);
    askQuestion(page);
  }
};

const askQuestion = (page: QuestionPage) => {
  showQuestionPage(page);
  r1.question(QUESTION_MESSAGE, (answer: string) =>
    answerCallback(answer, page)
  );
};

export default askQuestion;
