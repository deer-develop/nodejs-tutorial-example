import { Post } from "../model";
import { store } from "./../store";

const ON_ENTER_MESSAGE = "엔터 키를 누르면 이전 화면으로 되돌아갑니다.";

const showPost = (post: Post) => {
  console.log(`제목: ${post.title}\n내용: ${post.content}\n`);
  if (store.viewType === "Preview")
    console.log(`게시글을 저장했습니다. id: ${post.id}\n`);
  console.log(ON_ENTER_MESSAGE);
};

export default showPost;
