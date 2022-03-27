import { store } from "./../store";
import commander from "../commander";

const ERROR_MESSAGE = "한 글자 이상 입력해주세요.\n";
let title = "";
let content = "";

const write = async () => {
  const answer = await commander.ask(
    store.writeType === "Title" ? "제목: " : "내용: "
  );

  if (!answer.length) {
    console.log(ERROR_MESSAGE);
    write();
  } else {
    if (store.writeType === "Title") {
      title = answer;
      console.log(`제목: ${title}`);
      store.writeType = "Content";
    } else {
      content = answer;
      compelteWriting();
    }
  }
};

const compelteWriting = () => {
  console.clear();

  store.configureShowInfo({ id: store.newPostId, title, content }, "Preview");
};

export default write;
