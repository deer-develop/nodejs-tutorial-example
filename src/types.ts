export type Entity = {
  id: number;
  title: string;
};

export type Post = Entity & { content: string };

export type ApplicationState = {
  view: ViewState;
  postId?: number;
};

export type ViewState =
  | "SELECT_MENU"
  | "SELECT_POST"
  | "VIEW_POST"
  | "CREATE_POST";
