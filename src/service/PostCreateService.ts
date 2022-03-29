import { PostRepository } from "../repository/PostRepository";
import { Post } from "../types";

export class PostCreateService {
  constructor(private postRepository: PostRepository) {}

  createPost(post: Post): void {
    this.postRepository.create(post);
  }
}
