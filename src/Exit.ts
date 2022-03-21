type ExitOption = {
  text: string;
  executor: () => void;
  hotKey: string;
};

export class Exit {
  text: string;
  executor: () => void;
  _hotKey?: string;

  constructor(exitOption: ExitOption) {
    this.text = exitOption.text;
    this.executor = exitOption.executor;
    this._hotKey = exitOption.hotKey;
  }

  toString(): string {
    return `${this._hotKey}) ${this.text}\n`;
  }

  hotKey(): string {
    return this._hotKey || "";
  }

  run() {
    this.executor();
  }
}
