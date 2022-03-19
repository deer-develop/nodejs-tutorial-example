import { ViewType } from './../model';
import { Post } from '../model';

const ON_ENTER_MESSAGE = "엔터 키를 누르면 이전 화면으로 되돌아갑니다.";

const showPost = (post: Post, type: ViewType) => {
  console.log(`제목: ${post.title}\n내용: ${post.content}\n`);
  if (type === ViewType.PRE_VIEW) console.log(`게시글을 저장했습니다. id: ${post.id}\n`);
  console.log(ON_ENTER_MESSAGE);
};

export default showPost;