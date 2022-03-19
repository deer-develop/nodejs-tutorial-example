import { Post, QuestionPage, ViewType, WriteType } from "./../model";
import r1 from "../readline";
import store from "../store";
import showPost from "./show";
import askQuestion from "./ask";

const ERROR_MESSAGE = "한 글자 이상 입력해주세요.\n";
let title = '';
let content = ''

const write = (type: WriteType) => {
  r1.question(type === WriteType.TITLE ? "제목: " : "내용: ", (answer: string) => {
    console.clear();
    if (!answer.length) {
      console.log(ERROR_MESSAGE);
      write(type);
    } else {
      if (type === WriteType.TITLE) {
        title = answer;
        console.log(`제목: ${title}`)
        write(WriteType.CONTENT);
      } else {
        content = answer;
        compelteWriting();
      }
    }
  });
};

const compelteWriting = () => {
  console.clear();
  const post = {id: store.newPostId, title, content}
  showPost(post, ViewType.PRE_VIEW);
  store.postList = store.postList.concat(post);
  onEnter();
};

const onEnter = () => {
  r1.on("line", () => {
    console.clear();
    askQuestion(QuestionPage.HOME_MENU);
  });
};

export default write;
