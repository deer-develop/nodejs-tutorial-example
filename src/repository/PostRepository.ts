import { Post } from "../types";

export class PostRepository {
  constructor(private posts: Post[]) {}

  get(id: number): Post {
    const post = this.posts.find((post) => post.id === id);
    if (!post) throw new Error("Query Error: There is no such post");
    return post;
  }

  findAll(): Post[] {
    return this.posts.slice();
  }

  create(post: Post): void {
    this.posts.push(post);
  }
}
