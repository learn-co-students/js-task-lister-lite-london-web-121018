class Task {
  constructor(contents){
    this.contents = contents;
  };

  render() {
    return `
    <li>
      ${this.contents}
    </li>
    <button data-contents="${this.contents}">
      delete
    </button>
    `;
  };
};
