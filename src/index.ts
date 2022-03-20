import * as readline from "readline";
import { Blog } from "./Blog";
import { Post } from "./Post";

export const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const posts = [
  new Post(
    1,
    "물고기는 존재하지 않는다",
    "물고기는 존재하지 않는다, 물고기는 존재하지 않는다"
  ),
  new Post(
    2,
    "호킹의 빅 퀘스천에 대한 간결한 대답",
    "호킹의 빅 퀘스천에 대한 간결한 대답, 호킹의 빅 퀘스천에 대한 간결한 대답"
  ),
  new Post(3, "나와 너", "나와 너, 나와 너"),
  new Post(
    4,
    "상자 밖에 있는 사람",
    "상자 밖에 있는 사람, 상자 밖에 있는 사람"
  ),
];

const blog = new Blog(posts);
blog.open();
