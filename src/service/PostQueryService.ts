import { PostRepository } from "../repository/PostRepository";
import { Post } from "../types";

export class PostQueryService {
  constructor(private postRepository: PostRepository) {}

  getPost(id: number): Post {
    return this.postRepository.get(id);
  }

  getAllPosts(): Post[] {
    return this.postRepository.findAll();
  }
}
