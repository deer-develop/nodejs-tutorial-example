export type Entity = {
  id: number;
  title: string;
};

export type Post = Entity & { content: string };

export type MenuName = "목록 조회" | "쓰기";
