export type Item = {
  id: number;
  title: string;
  select: () => void;
  content?: string;
};
