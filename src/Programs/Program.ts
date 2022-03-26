export interface Program<T> {
  run: () => void | Promise<T | undefined>;
}
